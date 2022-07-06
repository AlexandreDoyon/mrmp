import { useState, useRef, useReducer } from "react";

// An enum with all the types of actions to use in our reducer
enum SectionActionKind {
  INCREASE = "INCREASE",
  DECREASE = "DECREASE",
}

// An interface for our actions
interface SectionAction {
  type: SectionActionKind;
  payload: number;
}

// An interface for our state
interface SectionState {
  section: number;
}

// Our reducer function that uses a switch statement to handle our actions
function sectionReducer(state: SectionState, action: SectionAction) {
  const { type, payload } = action;
  switch (type) {
    case SectionActionKind.INCREASE:
      return {
        ...state,
        value: (state.section = payload),
      };
    case SectionActionKind.DECREASE:
      return {
        ...state,
        value: (state.section = payload),
      };
    default:
      return state;
  }
}

const [state, dispatch] = useReducer(sectionReducer, { section: 0 });

const hoverHandler = (section: number) => {
  dispatch({ type: SectionActionKind.INCREASE, payload: section });
};

const outHandler = (section: number) => {
  dispatch({ type: SectionActionKind.DECREASE, payload: section });
};
