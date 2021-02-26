import { randomIntString } from "utilities";

export enum State {
  Active = "Active",
  Deleted = "Deleted",
  Sense = "Sense",
  Duplicate = "Duplicate",
  Separate = "Separate",
}

export interface Gloss {
  def: string;
  language: string; // bcp-47 code
}

export interface SemanticDomain {
  name: string;
  id: string;
  // TODO: The backend also stores a description field. Should that be
  //    exposed?
}
export class Sense {
  guid?: string;
  glosses: Gloss[];
  semanticDomains: SemanticDomain[] = [];
  accessibility?: State;

  constructor(gloss: string, lang: string = "", semDom?: SemanticDomain) {
    this.glosses = [{ def: gloss, language: lang }];
    if (semDom) {
      this.semanticDomains.push(semDom);
    }
  }
}

export class Note {
  language: string; // bcp-47 code
  text: string;

  constructor(text: string = "", lang: string = "") {
    this.text = text;
    this.language = lang;
  }
}

export class Word {
  id: string = "";
  guid: string = "";
  vernacular: string = "";
  plural: string = "";
  senses: Sense[] = [];
  audio: string[] = [];
  created: string = "";
  modified: string = "";
  accessibility: State = State.Active;
  history: string[] = [];
  partOfSpeech: string = "";
  editedBy: string[] = [];
  otherField: string = "";
  projectId: string = "";
  note: Note = new Note();
}

export interface MergeWord {
  wordID: string;
  senses: State[];
}

//used in ExistingDataTable
export interface DomainWord {
  word: Word;
  gloss: Gloss;
}

export function hasSenses(word: Word): boolean {
  return (
    word.senses &&
    word.senses.length > 0 &&
    word.senses[0].glosses &&
    word.senses[0].glosses.length > 0
  );
}

export function simpleWord(vern: string, gloss: string): Word {
  return {
    ...new Word(),
    id: randomIntString(),
    vernacular: vern,
    senses: [new Sense(gloss)],
  };
}

export function multiGlossWord(vern: string, glosses: string[]): Word {
  return {
    ...new Word(),
    id: randomIntString(),
    vernacular: vern,
    senses: glosses.map((gloss) => new Sense(gloss)),
  };
}

export function testWordList(): Word[] {
  return [
    { ...simpleWord("NoSense", ""), senses: [] },
    simpleWord("Yoink", "Hello"),
    simpleWord("Yode", "Goodbye"),
    simpleWord("Yoff", "Yes"),
    simpleWord("Yank", "No"),
    simpleWord("Yank", "Please help me"),
    simpleWord("Ya", "Help"),
    simpleWord("Yeet", "Please"),
    simpleWord("Yeet", "Mandatory"),
    simpleWord("Yang", "Die"),
    multiGlossWord("Yuino", ["Love", "Boba Fett", "Life"]),
    multiGlossWord("Yuilo", ["Sadness", "Tree bark"]),
    simpleWord("Yes", "Wumbo"),
    simpleWord("Yes", "Mayonnaise"),
  ];
}
