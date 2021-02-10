import { ElementChangeEvent, Rule, RuleElement } from './types'
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: Rule = {
    cursorPosition: 0,
    elements: []
}


export const conditionsSlice = createSlice({
    name: "conditions",
    initialState,
    reducers: {

        conditionAddElement (state, action: PayloadAction<RuleElement>) {
            state.elements.splice(state.cursorPosition, 0, action.payload);
            state.cursorPosition = state.cursorPosition + 1;
        },
    
        conditionRemoveElement (state, action: PayloadAction<number>) {
            state.elements.splice(action.payload, 1);
            state.cursorPosition = state.cursorPosition > action.payload ? action.payload : state.cursorPosition;
        },
    
        conditionChangeElement (state, action: PayloadAction<ElementChangeEvent>) {
            state.elements[action.payload.index].value = action.payload.value;
        },

        conditionCaretControl (state, action: PayloadAction<number>) {
            state.cursorPosition = action.payload;
        },

        conditionClear (state) {
            state.cursorPosition = 0;
            state.elements = [];
        },

        conditionEdit () {
        },

        conditionEditSuccess (state, action: PayloadAction<Rule>) {
            state.cursorPosition = action.payload.cursorPosition;
            state.elements = action.payload.elements;
        },
    
        conditionSave (state, action: PayloadAction<Rule>) {
        },

        conditionEditorInit() {
        },
    }
}); 

export const { reducer, actions } = conditionsSlice; 