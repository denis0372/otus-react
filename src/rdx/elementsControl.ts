import { Action } from "redux";
import { Rule } from '@/types/conditions'
import * as actionTypes from '@/rdx/types';

const defaultState: Rule = {
    cursorPosition: 0,
    rules: []
}

export function elementsControl(state: Rule = defaultState, action: Action & { payload?: any }): Rule {

    switch (action.type) {
        case actionTypes.ADD_ELEMENT: {

            const element = action.payload;

            const newState = JSON.parse(JSON.stringify(state)); 
            newState.rules.splice(newState.cursorPosition, 0, element);
            newState.cursorPosition = newState.cursorPosition + 1;

            return newState;
        }
        case actionTypes.REMOVE_ELEMENT: {

            const {index} = action.payload;
            const newState = JSON.parse(JSON.stringify(state)); 
            newState.rules.splice(index, 1);
            newState.cursorPosition = newState.cursorPosition > newState.rules.length ? newState.rules.length : newState.cursorPosition;

            return newState;
        }
    }

    return state;
} 