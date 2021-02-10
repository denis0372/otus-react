import { Rule } from "@/types/conditions";
import * as actions from "@/rdx/actions";
import { createReducer } from "@reduxjs/toolkit";

const defaultState: Rule = {
  cursorPosition: 0,
  elements: [],
};

export const elementsControl = createReducer<Rule>(defaultState, (builder) => {
  builder
    .addCase(actions.conditionAddElement, (state, action) => {
      state.elements.splice(state.cursorPosition, 0, action.payload);
      state.cursorPosition = state.cursorPosition + 1;
      return state;
    })

    .addCase(actions.conditionRemovelement, (state, action) => {
      state.elements.splice(action.payload, 1);
      state.cursorPosition =
        state.cursorPosition > state.elements.length
          ? state.elements.length
          : state.cursorPosition;
      return state;
    })

    .addCase(actions.conditionCaretControl, (state, action) => {
      state.cursorPosition = action.payload;
      return state;
    })

    .addCase(actions.conditionClear, (state, action) => {
      return {
        cursorPosition: 0,
        elements: [],
      };
    })

    .addCase(actions.conditionEdit, (state, action) => {
      return state;
    })

    .addCase(actions.conditionEditSuccess, (state, action) => {
      return action.payload;
    })

    .addCase(actions.conditionSave, (state, action) => {
      return state;
    })

    .addCase(actions.conditionEditorInit, (state, action) => {
      return state;
    });
});
