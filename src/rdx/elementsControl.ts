import { Rule } from '@/types/conditions'
import * as actions from '@/rdx/actions';
import { createReducer } from "@reduxjs/toolkit"; 

const defaultState: Rule = {
    cursorPosition: 0,
    elements: []
}

export const elementsControl = createReducer<Rule>(defaultState, {

    [actions.conditionAddElement.type]: (state, action) => {

        const newState = JSON.parse(JSON.stringify(state)); 
        newState.elements.splice(newState.cursorPosition, 0, action.payload);
        newState.cursorPosition = newState.cursorPosition + 1;

        return newState;
    },
    
    [actions.conditionRemovelement.type]: (state, action) => {

        const newState = JSON.parse(JSON.stringify(state)); 
        newState.elements.splice(action.payload, 1);
        newState.cursorPosition = newState.cursorPosition > newState.elements.length ? newState.elements.length : newState.cursorPosition;

        return newState;
    },
    
    [actions.conditionClear.type]: (state, action) => {
        return {
            cursorPosition: 0,
            elements: []
        }
    },

    [actions.conditionEdit.type]: (state, action) => {
        return state;
    },

    [actions.conditionEditSuccess.type]: (state, action) => {
        return action.payload;
    },
    
    [actions.conditionSave.type]: (state, action) => {
        return state;
    }

}); 