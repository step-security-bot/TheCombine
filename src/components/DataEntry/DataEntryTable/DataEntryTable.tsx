import { Button, Grid, Typography } from "@material-ui/core";
import { List as ListIcon } from "@material-ui/icons";
import React from "react";
import {
  LocalizeContextProps,
  Translate,
  withLocalize,
} from "react-localize-redux";

import * as Backend from "../../../backend";
import * as LocalStorage from "../../../backend/localStorage";
import { AutoComplete } from "../../../types/AutoComplete";
import DomainTree from "../../../types/SemanticDomain";
import theme from "../../../types/theme";
import { SemanticDomain, Word } from "../../../types/word";
import Recorder from "../../Pronunciations/Recorder";
import { ExistingEntry } from "./ExistingEntry/ExistingEntry";
import { ImmutableExistingEntry } from "./ExistingEntry/ImmutableExistingEntry";
import { NewEntry } from "./NewEntry/NewEntry";

interface DataEntryTableProps {
  domain: DomainTree;
  semanticDomain: SemanticDomain;
  displaySemanticDomainView: (isGettingSemanticDomain: boolean) => void;
  getWordsFromBackend: () => Promise<Word[]>;
  showExistingData: () => void;
  isSmallScreen: boolean;
  hideQuestions: () => void;
}

interface WordAccess {
  word: Word;
  mutable?: boolean;
  glossIndex: number;
}

export interface DataEntryTableState {
  existingWords: Word[];
  recentlyAddedWords: WordAccess[];
  displayDuplicatesIndex?: number;
  displaySpellingSuggestionsIndex?: number;
  isReady: boolean;
  autoComplete: AutoComplete;
}

async function getProjectAutocompleteSetting(): Promise<AutoComplete> {
  let proj = await Backend.getProject(LocalStorage.getProjectId());
  return proj.autocompleteSetting;
}

/**
 * A data entry table containing word entries
 */
export class DataEntryTable extends React.Component<
  DataEntryTableProps & LocalizeContextProps,
  DataEntryTableState
> {
  constructor(props: DataEntryTableProps & LocalizeContextProps) {
    super(props);
    this.state = {
      existingWords: [],
      recentlyAddedWords: [],
      isReady: false,
      autoComplete: AutoComplete.Off,
    };
    this.refNewEntry = React.createRef<NewEntry>();
    this.recorder = new Recorder();
  }
  refNewEntry: React.RefObject<NewEntry>;
  recorder: Recorder;

  async componentDidMount() {
    let allWords = await this.props.getWordsFromBackend();
    let autoCompleteSetting = await getProjectAutocompleteSetting();
    this.setState({
      existingWords: allWords,
      autoComplete: autoCompleteSetting,
    });
  }

  /** Finished with this page of words, select new semantic domain */
  // TODO: Implement
  submit(e?: React.FormEvent<HTMLFormElement>, callback?: Function) {
    if (e) e.preventDefault();
  }

  async addNewWord(wordToAdd: Word) {
    let updatedWord = await Backend.createWord(wordToAdd);
    let updatedNewWords = [...this.state.recentlyAddedWords];
    updatedNewWords.push({ word: updatedWord, mutable: true, glossIndex: 0 });
    let words: Word[] = await this.props.getWordsFromBackend();
    this.setState({
      existingWords: words,
      recentlyAddedWords: updatedNewWords,
    });
  }

  /** Update the word in the backend and the frontend */
  async updateWordForNewEntry(wordToUpdate: Word, glossIndex: number) {
    let existingWord = this.state.existingWords.find(
      (word) => word.id === wordToUpdate.id
    );
    if (!existingWord)
      throw new Error("You are trying to update a nonexistent word");
    let index = this.state.existingWords.indexOf(existingWord);
    if (index === -1) throw new Error(wordToUpdate + " does not exist");

    let updatedWord: Word = await this.updateWordInBackend(wordToUpdate);

    let recentlyAddedWords = [...this.state.recentlyAddedWords];

    let updatedWordAccess: WordAccess = {
      word: updatedWord,
      mutable: false,
      glossIndex: glossIndex,
    };

    recentlyAddedWords.push(updatedWordAccess);
    this.setState({ recentlyAddedWords: recentlyAddedWords });
  }

  async updateExistingWord(wordToUpdate: Word, wordToDelete?: Word) {
    let updatedWord: Word = await this.updateWordInBackend(wordToUpdate);
    let recentlyAddedWords = [...this.state.recentlyAddedWords];
    let frontendWords: Word[] = recentlyAddedWords.map(
      (wordAccess) => wordAccess.word
    );

    if (wordToDelete) {
      // Delete word from backend, then replace word in frontend with updated one
      let index = frontendWords.findIndex((w) => w.id === wordToDelete.id);
      if (index === -1) {
        console.log("Word does not exist in recentlyAddedWords");
      } else {
        let updatedWordAccess: WordAccess = {
          word: updatedWord,
          mutable: false,
          glossIndex: 0,
        };
        this.updateWordInFrontend(index, updatedWordAccess);
        this.deleteWordAndUpdateExistingWords(wordToDelete);
      }
    } else {
      // Update word
      let index = frontendWords.findIndex((w) => w.id === wordToUpdate.id);
      if (index === -1) {
        console.log("Word does not exist in recentlyAddedWords");
      } else {
        let updatedWordAccess: WordAccess = {
          word: updatedWord,
          mutable: true,
          glossIndex: 0,
        };
        this.updateWordInFrontend(index, updatedWordAccess);
      }
    }
  }

  updateWordInFrontend(index: number, updatedWord: WordAccess) {
    let recentlyAddedWords: WordAccess[] = [...this.state.recentlyAddedWords];
    recentlyAddedWords.splice(index, 1, updatedWord);
    this.setState({ recentlyAddedWords });
  }

  async updateWordInBackend(wordToUpdate: Word): Promise<Word> {
    let updatedWord = await Backend.updateWord(wordToUpdate);
    let words = await this.props.getWordsFromBackend();
    this.setState({ existingWords: words });
    return updatedWord;
  }

  async removeWord(word: Word) {
    this.deleteWordAndUpdateExistingWords(word);
    this.removeWordFromDisplay(word);
  }

  async deleteWordAndUpdateExistingWords(word: Word) {
    await Backend.deleteWord(word);
    let existingWords: Word[] = await this.props.getWordsFromBackend();
    this.setState({ existingWords });
  }

  removeWordFromDisplay(word: Word) {
    let recentlyAddedWords: WordAccess[] = this.state.recentlyAddedWords.filter(
      (wordAccess) => wordAccess.word.id !== word.id
    );
    this.setState({ recentlyAddedWords });
  }

  toggleDisplayDuplicates(index: number) {
    if (this.state.displayDuplicatesIndex === index)
      this.setState({ displayDuplicatesIndex: undefined });
    else this.setState({ displayDuplicatesIndex: index });
  }

  toggleDisplaySpellingSuggestions(index: number) {
    if (this.state.displaySpellingSuggestionsIndex === index)
      this.setState({ displaySpellingSuggestionsIndex: undefined });
    else this.setState({ displaySpellingSuggestionsIndex: index });
  }

  render() {
    return (
      <form
        onSubmit={(e?: React.FormEvent<HTMLFormElement>, callback?: Function) =>
          this.submit(e, callback)
        }
      >
        <input type="submit" style={{ display: "none" }} />

        <Grid container>
          <Grid item xs={4}>
            <Typography
              variant="h5"
              align="center"
              style={{
                marginTop: theme.spacing(2),
                marginBottom: theme.spacing(2),
              }}
            >
              <Translate id="addWords.vernacular" />
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant="h5"
              align="center"
              style={{
                marginTop: theme.spacing(2),
                marginBottom: theme.spacing(2),
              }}
            >
              <Translate id="addWords.glosses" />
            </Typography>
          </Grid>

          {this.state.recentlyAddedWords.map((wordAccess, index) =>
            wordAccess.mutable ? (
              <ExistingEntry
                key={wordAccess.word.id}
                wordsBeingAdded={this.state.recentlyAddedWords.map(
                  (wordAccess) => wordAccess.word
                )}
                existingWords={this.state.existingWords}
                entryIndex={index}
                entry={wordAccess.word}
                updateWord={(wordToUpdate: Word, wordToDelete?: Word) =>
                  this.updateExistingWord(wordToUpdate, wordToDelete)
                }
                removeWord={(word: Word) => this.removeWord(word)}
                recorder={this.recorder}
                semanticDomain={this.props.semanticDomain}
                displayDuplicates={this.state.displayDuplicatesIndex === index}
                toggleDisplayDuplicates={() => {
                  this.toggleDisplayDuplicates(index);
                }}
                focusNewEntry={() => {
                  if (this.refNewEntry.current)
                    this.refNewEntry.current.focusVernInput();
                }}
              />
            ) : (
              <ImmutableExistingEntry
                key={wordAccess.word.id}
                vernacular={wordAccess.word.vernacular}
                gloss={
                  wordAccess.word.senses[wordAccess.glossIndex].glosses[0].def
                }
              />
            )
          )}

          <Grid item xs={12}>
            <NewEntry
              ref={this.refNewEntry}
              allWords={this.state.existingWords}
              updateWord={(wordToUpdate: Word, glossIndex: number) =>
                this.updateWordForNewEntry(wordToUpdate, glossIndex)
              }
              addNewWord={(word: Word) => this.addNewWord(word)}
              semanticDomain={this.props.semanticDomain}
              autocompleteSetting={this.state.autoComplete}
              displayDuplicates={
                this.state.autoComplete === AutoComplete.AlwaysOn ||
                this.state.displayDuplicatesIndex ===
                  this.state.recentlyAddedWords.length
              }
              toggleDisplayDuplicates={() => {
                this.toggleDisplayDuplicates(
                  this.state.recentlyAddedWords.length
                );
              }}
              setIsReadyState={(isReady: boolean) =>
                this.setState({ isReady: isReady })
              }
            />
          </Grid>
        </Grid>

        <Grid container justify="space-between" spacing={3}>
          <Grid item>
            {this.props.isSmallScreen ? (
              <Button
                style={{ marginTop: theme.spacing(2) }}
                onClick={this.props.showExistingData}
              >
                <ListIcon fontSize={"default"} color={"inherit"} />
              </Button>
            ) : null}
          </Grid>
          <Grid item>
            <Button
              id="complete"
              type="submit"
              variant="contained"
              color={this.state.isReady ? "primary" : "secondary"}
              style={{ marginTop: theme.spacing(2) }}
              onClick={() => {
                // Check if there is a new word, but the user clicked complete instead of pressing enter
                if (this.refNewEntry.current) {
                  let newEntry = this.refNewEntry.current.state.newEntry;
                  if (newEntry && newEntry.vernacular) {
                    this.addNewWord(newEntry);
                    this.refNewEntry.current.resetState();
                  }
                }

                // Reset everything
                this.props.hideQuestions();
                let recentlyAddedWords: WordAccess[] = [];
                this.setState({ recentlyAddedWords });

                // Reveal the TreeView, hiding DataEntry
                this.props.displaySemanticDomainView(true);
              }}
            >
              <Translate id="addWords.done" />
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default withLocalize(DataEntryTable);
