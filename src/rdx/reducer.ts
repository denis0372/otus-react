import { conditionsControl } from "./conditionsControl";
import { elementsControl } from './elementsControl'
import * as actionTypes from '@/rdx/types';
import { combineReducers } from 'redux'; 

export const reducer = combineReducers({
    conditionsControl,
    elementsControl
  }) 
