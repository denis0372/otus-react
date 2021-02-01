import { Action } from "redux";

type ConditionType = 'logic' | 'element';
type ConditionFunction = 'and' | 'or';
type ConditionOperation = 'eq' | 'ne';
type ConditionField = 'device_brand' | 'device_model' | 'location' | 'device_type' | 'apn' | 'rat' | 'schedule';


interface ConditionElement {
    type: ConditionType;
    function?: ConditionFunction;
    operation?: ConditionOperation;
    field?: ConditionField;
    terms?: ConditionElement[];
}

export interface Condition  {
    id: number | null;
    name: string | null;
    rule: (ConditionElement | null);
}

const defaultState: Condition = {
    id: null,
    name: null,
    rule: null
}

export function reducer(state: Condition = defaultState, action: Action): Condition {

  return state;
} 