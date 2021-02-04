import { Rule, RuleElement } from "types/conditions";
import { createAction } from "@reduxjs/toolkit"; 

export const conditionAddElement = createAction<RuleElement>("conditionAddElement"); 
export const conditionRemovelement = createAction<number>("conditionRemovelement"); 
export const conditionCaretControl = createAction<number>("conditionCaretControl"); 
export const conditionClear = createAction("conditionClear"); 

export const conditionEdit = createAction("conditionEdit"); 
export const conditionEditSuccess = createAction<Rule>("conditionEditSuccess");
export const conditionSave = createAction("conditionSave"); 

