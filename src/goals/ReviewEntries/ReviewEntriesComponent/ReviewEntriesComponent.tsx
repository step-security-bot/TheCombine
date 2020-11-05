import { Typography } from "@material-ui/core";
import MaterialTable from "material-table";
import React from "react";
import {
  LocalizeContextProps,
  Translate,
  withLocalize,
} from "react-localize-redux";

import { getFrontierWords } from "../../../backend";
import Recorder from "../../../components/Pronunciations/Recorder";
import theme from "../../../types/theme";
import { Word } from "../../../types/word";
import columns from "./CellComponents/CellColumns";
import tableIcons from "./icons";
import { parseWord, ReviewEntriesWord } from "./ReviewEntriesTypes";

// Component state/props
interface ReviewEntriesProps {
  // Props mapped to store
  language: string;
  words: ReviewEntriesWord[];

  // Dispatch changes
  clearState: () => void;
  setAnalysisLanguage: () => void;
  updateAllWords: (words: ReviewEntriesWord[]) => void;
  updateFrontierWord: (
    newData: ReviewEntriesWord,
    oldData: ReviewEntriesWord,
    language: string
  ) => Promise<void>;
}

interface ReviewEntriesState {
  loaded: boolean;
  rowCount: number;
}

// Constants
const ROWS_PER_PAGE: number[] = [10, 100, 1000];
const tableRef: React.RefObject<any> = React.createRef();

export class ReviewEntriesComponent extends React.Component<
  ReviewEntriesProps & LocalizeContextProps,
  ReviewEntriesState
> {
  recorder: Recorder;

  constructor(props: ReviewEntriesProps & LocalizeContextProps) {
    super(props);
    this.state = {
      loaded: false,
      rowCount: props.words.length,
    };
    this.recorder = new Recorder();
    this.props.clearState();
    this.props.setAnalysisLanguage();
    getFrontierWords().then((frontier: Word[]) => {
      this.updateLocalWords(frontier);
      this.setState({ loaded: true });
    });
  }

  // Creates the local set of words from the frontier
  private updateLocalWords(frontier: Word[]) {
    let newWords: ReviewEntriesWord[] = [];
    let currentWord: ReviewEntriesWord;

    for (let word of frontier) {
      // Create a new currentword
      currentWord = parseWord(word, this.props.language, this.recorder);

      // Remove the trailing newlines + push to newWords
      newWords.push(currentWord);
    }
    this.props.updateAllWords(newWords);
  }

  // Remove the duplicates from an array; sugar syntax, as the place it's used is already hideous enough without adding more
  private removeDuplicates(array: any[]) {
    return [...new Set(array)];
  }

  private getPageSizeOptions(): number[] {
    const pageSizeOptions = ROWS_PER_PAGE.map((value) =>
      Math.min(value, this.state.rowCount)
    );
    return this.removeDuplicates(pageSizeOptions);
  }

  private updatePageSizeOptions() {
    const rowCount = tableRef.current?.state.data.length ?? 0;
    if (rowCount !== this.state.rowCount) {
      this.setState({ rowCount });
    }
  }

  render() {
    return (
      this.state.loaded && (
        <Translate>
          {({ translate }) => (
            <Typography
              component="h1"
              variant="h4"
              style={{ marginTop: theme.spacing(1) }}
            >
              <MaterialTable<any>
                tableRef={tableRef}
                icons={tableIcons}
                title={<Translate id={"reviewEntries.title"} />}
                columns={columns}
                data={this.props.words}
                onFilterChange={() => {
                  this.updatePageSizeOptions();
                }}
                editable={{
                  onRowUpdate: (
                    newData: ReviewEntriesWord,
                    oldData: ReviewEntriesWord
                  ) =>
                    new Promise(async (resolve, reject) => {
                      // Update database and update word ID.
                      // Awaited so user can't edit and submit word with bad ID before it's updated.
                      this.props
                        .updateFrontierWord(
                          newData,
                          oldData,
                          this.props.language
                        )
                        .then(() => {
                          setTimeout(() => {
                            resolve();
                          }, 500);
                        })
                        .catch((reason) => {
                          // May wish to change this alert method
                          alert(translate(reason));
                          reject();
                        });
                    }),
                }}
                options={{
                  debounceInterval: 500,
                  filtering: true,
                  pageSize:
                    Math.min(this.state.rowCount, ROWS_PER_PAGE[0]) ||
                    ROWS_PER_PAGE[0],
                  pageSizeOptions: this.getPageSizeOptions(),
                }}
              />
            </Typography>
          )}
        </Translate>
      )
    );
  }
}

export default withLocalize(ReviewEntriesComponent);
