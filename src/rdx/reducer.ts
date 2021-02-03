import { conditionsControl } from "./conditionsControl";
import { elementsControl } from './elementsControl'
import { combineReducers } from 'redux'; 

export const reducer = combineReducers({
    conditionsControl,
    elementsControl
  }) 

  export type ConditionState = ReturnType<typeof reducer>; 