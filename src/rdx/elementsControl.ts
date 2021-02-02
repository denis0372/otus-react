import { Action } from "redux";
import { Rule } from '@/types/conditions'
import * as actionTypes from '@/rdx/types';

const defaultState: Rule = {
    cursorPosition: 0,
    elements: []
}

export function elementsControl(state: Rule = defaultState, action: Action & { payload?: any }): Rule {

    switch (action.type) {
        case actionTypes.ADD_ELEMENT: {

            const element = action.payload;

            const newState = JSON.parse(JSON.stringify(state)); 
            newState.elements.splice(newState.cursorPosition, 0, element);
            newState.cursorPosition = newState.cursorPosition + 1;

            return newState;
        }
        case actionTypes.REMOVE_ELEMENT: {

            const {index} = action.payload;
            const newState = JSON.parse(JSON.stringify(state)); 
            newState.elements.splice(index, 1);
            newState.cursorPosition = newState.cursorPosition > newState.elements.length ? newState.elements.length : newState.cursorPosition;

            return newState;
        }
        case actionTypes.CLEAR: {
            return {
                cursorPosition: 0,
                elements: []
            }
        }
    }

    return state;
} 