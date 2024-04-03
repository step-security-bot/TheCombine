import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

import { type Word } from "api/models";
import {
  type MergeTreeReference,
  type MergeTreeSense,
  type MergeTreeWord,
  type Sidebar,
  convertSenseToMergeTreeSense,
  convertWordToMergeTreeWord,
  defaultData,
  defaultSidebar,
  defaultTree,
  newMergeTreeWord,
} from "goals/MergeDuplicates/MergeDupsTreeTypes";
import { newMergeWords } from "goals/MergeDuplicates/MergeDupsTypes";
import { defaultState } from "goals/MergeDuplicates/Redux/MergeDupsReduxTypes";
import {
  buildSenses,
  createMergeWords,
} from "goals/MergeDuplicates/Redux/reducerUtilities";
import { StoreActionTypes } from "rootActions";
import { type Hash } from "types/hash";

const mergeDuplicatesSlice = createSlice({
  name: "mergeDupStepReducer",
  initialState: defaultState,
  reducers: {
    clearMergeWordsAction: (state) => {
      state.mergeWords = [];
    },

    clearTreeAction: () => {
      return defaultState;
    },

    combineSenseAction: (state, action) => {
      const srcRef: MergeTreeReference = action.payload.src;
      const destRef: MergeTreeReference = action.payload.dest;

      // Ignore dropping a sense (or one of its sub-senses) into itself.
      if (srcRef.mergeSenseId !== destRef.mergeSenseId) {
        const words = state.tree.words;
        const srcWordId = srcRef.wordId;
        const srcGuids = words[srcWordId].sensesGuids[srcRef.mergeSenseId];
        const destGuids: string[] = [];
        if (srcRef.order === undefined || srcGuids.length === 1) {
          // A sense from a word dropped into another sense.
          destGuids.push(...srcGuids);
          delete words[srcWordId].sensesGuids[srcRef.mergeSenseId];
          if (!Object.keys(words[srcWordId].sensesGuids).length) {
            delete words[srcWordId];
          }
        } else {
          // A sense from the sidebar dropped into another sense.
          destGuids.push(srcGuids.splice(srcRef.order, 1)[0]);
          if (srcGuids.length < 2) {
            // If not multiple senses in the sidebar, reset the sidebar.
            state.tree.sidebar = defaultSidebar;
          }
        }

        words[destRef.wordId].sensesGuids[destRef.mergeSenseId].push(
          ...destGuids
        );
        state.tree.words = words;
      }
    },

    deleteSenseAction: (state, action) => {
      const srcRef: MergeTreeReference = action.payload;
      const srcWordId = srcRef.wordId;
      const { deletedSenseGuids, words } = state.tree;

      const sensesGuids = words[srcWordId].sensesGuids;
      const srcGuids = sensesGuids[srcRef.mergeSenseId];
      if (srcRef.order === undefined || srcGuids.length === 1) {
        // A sense deleted from a word.
        deletedSenseGuids.push(...srcGuids);
        delete sensesGuids[srcRef.mergeSenseId];
        if (!Object.keys(sensesGuids).length) {
          delete words[srcWordId];
        }

        // If the deleted sense was open in the sidebar, reset the sidebar.
        const { mergeSenseId, wordId } = state.tree.sidebar;
        if (mergeSenseId === srcRef.mergeSenseId && wordId === srcRef.wordId) {
          state.tree.sidebar = defaultSidebar;
        }
      } else {
        // A sense deleted from the sidebar.
        deletedSenseGuids.push(srcGuids[srcRef.order]);
        srcGuids.splice(srcRef.order, 1);
        if (srcGuids.length < 2) {
          // If not multiple senses in the sidebar, reset the sidebar.
          state.tree.sidebar = defaultSidebar;
        }
      }
    },

    flagWordAction: (state, action) => {
      state.tree.words[action.payload.wordId].flag = action.payload.flag;
    },

    getMergeWordsAction: (state) => {
      // Handle words with all senses deleted.
      const possibleWords = Object.values(state.data.words);
      const deletedSenseGuids = state.tree.deletedSenseGuids;
      const deletedWords = possibleWords.filter((w) =>
        w.senses.every((s) => deletedSenseGuids.includes(s.guid))
      );
      state.mergeWords = deletedWords.map((w) =>
        newMergeWords(w, [{ srcWordId: w.id, getAudio: false }], true)
      );

      for (const wordId in state.tree.words) {
        const mergeWord = state.tree.words[wordId];
        const mergeSenses = buildSenses(
          mergeWord.sensesGuids,
          state.data,
          deletedSenseGuids
        );
        const mergeWords = createMergeWords(
          wordId,
          mergeWord,
          mergeSenses,
          state.data.words[wordId]
        );
        if (mergeWords) {
          state.mergeWords.push(mergeWords);
        }
      }
    },

    moveSenseAction: (state, action) => {
      const destWordId = action.payload.destWordId;
      const srcRef: MergeTreeReference = action.payload.src;
      const srcWordId = srcRef.wordId;
      // Verify that this is a valid movement of a word sense.
      if (srcRef.order === undefined && srcWordId !== destWordId) {
        const mergeSenseId = srcRef.mergeSenseId;

        const words = state.tree.words;

        // Check if dropping the sense into a new word.
        if (words[destWordId] === undefined) {
          if (Object.keys(words[srcWordId].sensesGuids).length === 1) {
            // Don't do anything if the sense was alone in its word.
            return;
          }
          words[destWordId] = newMergeTreeWord();
        }

        // Update the destWord.
        const guids = words[srcWordId].sensesGuids[mergeSenseId];
        const sensesPairs = Object.entries(words[destWordId].sensesGuids);
        sensesPairs.splice(action.payload.destOrder, 0, [mergeSenseId, guids]);
        words[destWordId].sensesGuids = Object.fromEntries(sensesPairs);

        // Cleanup the srcWord.
        delete words[srcWordId].sensesGuids[mergeSenseId];
        if (!Object.keys(words[srcWordId].sensesGuids).length) {
          delete words[srcWordId];
        }
      }
    },

    moveDuplicateAction: (state, action) => {
      const srcRef: MergeTreeReference = action.payload.src;
      const words = state.tree.words;
      const srcGuids = words[srcRef.wordId].sensesGuids[srcRef.mergeSenseId];
      // Verify that this is a valid movement of a sidebar sense.
      if (srcRef.order !== undefined && srcGuids.length > 1) {
        const destWordId = action.payload.destWordId;

        // Get guid of sense being restored from the sidebar.
        const guid = srcGuids.splice(srcRef.order, 1)[0];
        if (srcGuids.length < 2) {
          // If not multiple senses in the sidebar, reset the sidebar.
          state.tree.sidebar = defaultSidebar;
        }

        // Check if dropping the sense into a new word.
        if (words[destWordId] === undefined) {
          words[destWordId] = newMergeTreeWord();
        }

        // Update the destWord.
        const sensesPairs = Object.entries(words[destWordId].sensesGuids);
        sensesPairs.splice(action.payload.destOrder, 0, [v4(), [guid]]);
        words[destWordId].sensesGuids = Object.fromEntries(sensesPairs);
      }
    },

    orderDuplicateAction: (state, action) => {
      const ref: MergeTreeReference = action.payload.src;
      const oldOrder = ref.order;
      const newOrder = action.payload.destOrder;

      // Ensure the reorder is valid.
      if (oldOrder !== undefined && oldOrder !== newOrder) {
        // Move the guid.
        const oldSensesGuids = state.tree.words[ref.wordId].sensesGuids;
        const guids = [...oldSensesGuids[ref.mergeSenseId]];
        const guid = guids.splice(oldOrder, 1)[0];
        guids.splice(newOrder, 0, guid);

        const sensesGuids = { ...oldSensesGuids };
        sensesGuids[ref.mergeSenseId] = guids;

        state.tree.words[ref.wordId].sensesGuids = sensesGuids;
      }
    },

    orderSenseAction: (state, action) => {
      const ref: MergeTreeReference = action.payload.src;
      const word = state.tree.words[ref.wordId];

      // Convert the Hash<string[]> to an array to expose the order.
      const sensePairs = Object.entries(word.sensesGuids);

      const mergeSenseId = ref.mergeSenseId;
      const oldOrder = sensePairs.findIndex((p) => p[0] === mergeSenseId);
      const newOrder = action.payload.destOrder;

      // Ensure the move is valid.
      if (oldOrder > -1 && newOrder !== undefined && oldOrder !== newOrder) {
        // Move the sense pair to its new place.
        const pair = sensePairs.splice(oldOrder, 1)[0];
        sensePairs.splice(newOrder, 0, pair);

        // Rebuild the Hash<string[]>.
        word.sensesGuids = {};
        for (const [key, value] of sensePairs) {
          word.sensesGuids[key] = value;
        }

        state.tree.words[ref.wordId] = word;
      }
    },

    setSidebarAction: (state, action) => {
      const sidebar: Sidebar = action.payload;
      // Only open sidebar with multiple senses.
      state.tree.sidebar =
        sidebar.mergeSenses.length > 1 ? sidebar : defaultSidebar;
    },

    setDataAction: (state, action) => {
      if (action.payload.length === 0) {
        state = defaultState;
      } else {
        const words: Hash<Word> = {};
        const senses: Hash<MergeTreeSense> = {};
        const wordsTree: Hash<MergeTreeWord> = {};
        action.payload.forEach((word: Word) => {
          words[word.id] = JSON.parse(JSON.stringify(word));
          word.senses.forEach((s, order) => {
            senses[s.guid] = convertSenseToMergeTreeSense(s, word.id, order);
          });
          wordsTree[word.id] = convertWordToMergeTreeWord(word);
        });
        state.data = { ...defaultData, senses, words };
        state.tree = { ...defaultTree, words: wordsTree };
        state.mergeWords = [];
      }
    },

    setVernacularAction: (state, action) => {
      state.tree.words[action.payload.wordId].vern = action.payload.vern;
    },
  },
  extraReducers: (builder) =>
    builder.addCase(StoreActionTypes.RESET, () => defaultState),
});

export const {
  clearMergeWordsAction,
  clearTreeAction,
  combineSenseAction,
  deleteSenseAction,
  flagWordAction,
  getMergeWordsAction,
  moveDuplicateAction,
  moveSenseAction,
  orderDuplicateAction,
  orderSenseAction,
  setDataAction,
  setSidebarAction,
  setVernacularAction,
} = mergeDuplicatesSlice.actions;

export default mergeDuplicatesSlice.reducer;
