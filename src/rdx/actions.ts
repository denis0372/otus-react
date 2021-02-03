import { RuleElement } from "types/conditions";

export const CONDITION_EDIT = 'CONDITION_EDIT'; 
export const CONDITION_SAVE = 'CONDITION_SAVE'; 

export const ADD_ELEMENT = 'ADD_ELEMENT'; 
export const REMOVE_ELEMENT = 'REMOVE_ELEMENT'; 
export const CLEAR = 'CLEAR'; 


export function conditionAddElement(element: RuleElement) {
    return {
        type: ADD_ELEMENT,
        payload: element
      };
}

export function conditionRemovelement(index: number) {
    return {
        type: REMOVE_ELEMENT,
        payload: {index}  
    }
}

export function conditionSave() {
    return {
        type: CONDITION_SAVE  
    };
}

export function conditionClear() {
  return {
      type: CLEAR
    };  
  }