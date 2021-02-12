import {
  EditorEntityEnv,
  ElementChangeEvent,
  ConditionsState,
  Rule,
  RuleElement,
} from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ConditionsState = {
  rule: {
    cursorPosition: 0,
    elements: [],
  },
};

export const conditionsSlice = createSlice({
  name: "conditions",
  initialState,
  reducers: {
    conditionAddElement(state, action: PayloadAction<RuleElement>) {
      state.rule.elements.splice(state.rule.cursorPosition, 0, action.payload);
      state.rule.cursorPosition = state.rule.cursorPosition + 1;
    },

    conditionRemoveElement(state, action: PayloadAction<number>) {
      state.rule.elements.splice(action.payload, 1);
      state.rule.cursorPosition =
        state.rule.cursorPosition > action.payload
          ? action.payload
          : state.rule.cursorPosition;
    },

    conditionChangeElement(state, action: PayloadAction<ElementChangeEvent>) {
      state.rule.elements[action.payload.index].value = action.payload.value;
    },

    conditionCaretControl(state, action: PayloadAction<number>) {
      state.rule.cursorPosition = action.payload;
    },

    conditionClear(state) {
      state.rule.cursorPosition = 0;
      state.rule.elements = [];
    },

    conditionEdit() {},

    conditionEditSuccess(state, action: PayloadAction<Rule>) {
      state.rule.cursorPosition = action.payload.cursorPosition;
      state.rule.elements = action.payload.elements;
    },

    conditionSave(state, action: PayloadAction<Rule>) {},

    conditionEditorInit() {},

    conditionEditorInitSuccess(state, action: PayloadAction<EditorEntityEnv>) {
      state.editorEntityEnv = action.payload;
    },
  },
});

export const { reducer, actions } = conditionsSlice;
