import { Rule } from '@/types/conditions'
import * as actions from '@/rdx/actions';
import { createReducer } from "@reduxjs/toolkit"; 

const defaultState: Rule = {
    cursorPosition: 0,
    elements: []
}

export const conditionsControl = createReducer<Rule>(defaultState, {

    // if (actions.conditionEdit.match(action)) {


    //     return state;
    // }
    
    [actions.conditionSave.type]: (state, action) => {


        return state;
    }
});