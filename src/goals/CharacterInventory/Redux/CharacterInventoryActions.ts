import { Action, PayloadAction } from "@reduxjs/toolkit";

import { Project } from "api/models";
import { getFrontierWords } from "backend";
import router from "browserRouter";
import {
  addCharInvChangesToGoal,
  asyncUpdateGoal,
} from "components/GoalTimeline/Redux/GoalActions";
import { asyncUpdateCurrentProject } from "components/Project/ProjectActions";
import {
  CharacterStatus,
  CharacterChange,
} from "goals/CharacterInventory/CharacterInventoryTypes";
import {
  addRejectedCharacterAction,
  addValidCharacterAction,
  resetCharInvAction,
  setAllWordsAction,
  setCharacterSetAction,
  setRejectedCharactersAction,
  setSelectedCharacterAction,
  setValidCharactersAction,
} from "goals/CharacterInventory/Redux/CharacterInventoryReducer";
import {
  CharacterInventoryState,
  CharacterSetEntry,
  getCharacterStatus,
} from "goals/CharacterInventory/Redux/CharacterInventoryReduxTypes";
import { StoreState } from "types";
import { StoreStateDispatch } from "types/Redux/actions";
import { Path } from "types/path";

// Action Creation Functions

export function addRejectedCharacter(char: string): PayloadAction {
  return addRejectedCharacterAction(char);
}

export function addValidCharacter(char: string): PayloadAction {
  return addValidCharacterAction(char);
}

export function resetCharInv(): Action {
  return resetCharInvAction();
}

export function setAllWords(words: string[]): PayloadAction {
  return setAllWordsAction(words);
}

export function setCharacterSet(
  characterSet: CharacterSetEntry[]
): PayloadAction {
  return setCharacterSetAction(characterSet);
}

export function setRejectedCharacters(chars: string[]): PayloadAction {
  return setRejectedCharactersAction(chars);
}

export function setSelectedCharacter(character: string): PayloadAction {
  return setSelectedCharacterAction(character);
}

export function setValidCharacters(chars: string[]): PayloadAction {
  return setValidCharactersAction(chars);
}

// Dispatch Functions

export function setCharacterStatus(character: string, status: CharacterStatus) {
  return (dispatch: StoreStateDispatch, getState: () => StoreState) => {
    switch (status) {
      case CharacterStatus.Accepted:
        dispatch(addValidCharacter(character));
        break;
      case CharacterStatus.Rejected:
        dispatch(addRejectedCharacter(character));
        break;
      case CharacterStatus.Undecided:
        const state = getState().characterInventoryState;
        const valid = state.validCharacters.filter(
          (c: string) => c !== character
        );
        if (valid.length < state.validCharacters.length) {
          dispatch(setValidCharacters(valid));
        }
        const rejected = state.rejectedCharacters.filter(
          (c: string) => c !== character
        );
        if (rejected.length < state.rejectedCharacters.length) {
          dispatch(setRejectedCharacters(rejected));
        }
        break;
    }
  };
}

/** Sends the in-state character inventory to the server. */
export function uploadInventory() {
  return async (dispatch: StoreStateDispatch, getState: () => StoreState) => {
    const charInvState = getState().characterInventoryState;
    const project = getState().currentProjectState.project;
    const changes = getChanges(project, charInvState);
    if (!changes.length) {
      exit();
      return;
    }
    await dispatch(
      asyncUpdateCurrentProject({
        ...project,
        rejectedCharacters: charInvState.rejectedCharacters,
        validCharacters: charInvState.validCharacters,
      })
    );
    dispatch(addCharInvChangesToGoal(changes));
    await dispatch(asyncUpdateGoal());
    exit();
  };
}

export function fetchWords() {
  return async (dispatch: StoreStateDispatch) => {
    const words = await getFrontierWords();
    dispatch(setAllWords(words.map((word) => word.vernacular)));
  };
}

export function getAllCharacters() {
  return async (dispatch: StoreStateDispatch, getState: () => StoreState) => {
    const allWords = getState().characterInventoryState.allWords;
    const characters = new Set<string>();
    allWords.forEach((w) => [...w].forEach((c) => characters.add(c)));
    const { rejectedCharacters, validCharacters } =
      getState().currentProjectState.project;
    const entries: CharacterSetEntry[] = [...characters].map((c) => ({
      character: c,
      occurrences: countOccurrences(c, allWords),
      status: getCharacterStatus(c, validCharacters, rejectedCharacters),
    }));
    dispatch(setCharacterSet(entries));
  };
}

export function loadCharInvData() {
  return async (dispatch: StoreStateDispatch, getState: () => StoreState) => {
    const project = getState().currentProjectState.project;
    await dispatch(fetchWords());
    dispatch(setValidCharacters(project.validCharacters));
    dispatch(setRejectedCharacters(project.rejectedCharacters));
    await dispatch(getAllCharacters());
    dispatch(setSelectedCharacter(""));
  };
}

// Helper Functions

export function exit(): void {
  router.navigate(Path.Goals);
}

function countOccurrences(char: string, words: string[]): number {
  if (char.length !== 1) {
    console.error(`countOccurrences expects length 1 char, but got: ${char}`);
  }
  let count = 0;
  for (const word of words) {
    for (const letter of word) {
      if (letter === char) {
        count++;
      }
    }
  }
  return count;
}

export function getChanges(
  project: Project,
  charInvState: CharacterInventoryState
): CharacterChange[] {
  const oldAcc = project.validCharacters;
  const newAcc = charInvState.validCharacters;
  const oldRej = project.rejectedCharacters;
  const newRej = charInvState.rejectedCharacters;
  const allCharacters = [
    ...new Set([...oldAcc, ...newAcc, ...oldRej, ...newRej]),
  ];
  const changes: CharacterChange[] = [];
  allCharacters.forEach((char) => {
    const change = getChange(char, oldAcc, newAcc, oldRej, newRej);
    if (change) {
      changes.push(change);
    }
  });
  return changes;
}

// Returns undefined if CharacterStatus unchanged.
function getChange(
  c: string,
  oldAcc: string[],
  newAcc: string[],
  oldRej: string[],
  newRej: string[]
): CharacterChange | undefined {
  if (oldAcc.includes(c)) {
    if (!newAcc.includes(c)) {
      if (newRej.includes(c)) {
        return [c, CharacterStatus.Accepted, CharacterStatus.Rejected];
      }
      return [c, CharacterStatus.Accepted, CharacterStatus.Undecided];
    }
    return;
  }
  if (oldRej.includes(c)) {
    if (!newRej.includes(c)) {
      if (newAcc.includes(c)) {
        return [c, CharacterStatus.Rejected, CharacterStatus.Accepted];
      }
      return [c, CharacterStatus.Rejected, CharacterStatus.Undecided];
    }
    return;
  }
  if (newAcc.includes(c)) {
    return [c, CharacterStatus.Undecided, CharacterStatus.Accepted];
  }
  if (newRej.includes(c)) {
    return [c, CharacterStatus.Undecided, CharacterStatus.Rejected];
  }
  return undefined;
}
