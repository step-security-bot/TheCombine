import { GoalsState, GoalType } from "../../types/goals";
import { Goal } from "../../types/goals";
import { GoalsActions } from "./GoalsActions";
import { ActionWithPayload } from "../../types/mockAction";
import { defaultState } from "./DefaultState";
import { MergeDupData } from "../../goals/MergeDupGoal/MergeDups";

export const goalsReducer = (
  state: GoalsState | undefined,
  action: ActionWithPayload<Goal[]>
): GoalsState => {
  if (!state) {
    return defaultState;
  }
  switch (action.type) {
    case GoalsActions.LOAD_USER_EDITS:
      return {
        ...state,
        historyState: {
          history: [...action.payload]
        }
      };
    case GoalsActions.ADD_GOAL_TO_HISTORY: // Remove top suggestion if same as goal to add
      let suggestions = state.suggestionsState.suggestions;
      let goalToAdd = action.payload[0];
      return {
        ...state,
        historyState: {
          history: [...state.historyState.history, goalToAdd]
        },
        suggestionsState: {
          suggestions: suggestions.filter(
            (goal, index) =>
              index !== 0 || (index === 0 && goalToAdd.name !== goal.name)
          )
        }
      };
    case GoalsActions.NEXT_STEP: // Update the step data in the current step, then go to the next step
      let history: Goal[] = [...state.historyState.history];
      let currentGoal: Goal = history[history.length - 1];
      currentGoal = updateStepData(currentGoal);
      history[history.length - 1] = currentGoal;

      return {
        ...state,
        historyState: {
          history: history
        }
      };
    case GoalsActions.UPDATE_GOAL: {
      let history: Goal[] = [...state.historyState.history];
      history[history.length - 1] = action.payload[0];

      return {
        ...state,
        historyState: {
          history: history
        }
      };
    }

    default:
      return state;
  }
};

export function updateStepData(goal: Goal): Goal {
  switch (goal.goalType) {
    case GoalType.MergeDups: {
      let currentGoalData: MergeDupData = goal.data as MergeDupData;
      goal.steps[goal.currentStep] = {
        words: currentGoalData.plannedWords[goal.currentStep]
      };
      goal.currentStep++;
      break;
    }
    case GoalType.CreateCharInv: {
      break;
    }
  }
  return goal;
}
