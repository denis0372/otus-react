import { Action } from "redux";
import { Rule } from '@/types/conditions'
import * as actionTypes from '@/rdx/actions';

const defaultState: Rule = {
    cursorPosition: 0,
    elements: []
}

export function conditionsControl(state: Rule = defaultState, action: Action & { payload?: any }): Rule {

    switch (action.type) {
        case actionTypes.CONDITION_EDIT: {


            return state;
        }
        case actionTypes.CONDITION_SAVE: {


            return state;
        }
    }

    return state;
} 