import { Rule } from '@/components/Conditions/types'

export const getCondition = async <Rule extends Object> () => {
    const condition = await localStorage.getItem("condition");
    return condition != null ? JSON.parse(condition) : null;
};

export const saveCondition = async (condition: Rule) => {
    await localStorage.setItem("condition", JSON.stringify(condition));
};


/* Типы данных для хранения */

export type ConditionType = 'logic' | 'element';
export type ConditionFunction = 'and' | 'or';
export type ConditionOperation = 'eq' | 'ne';
export type ConditionField = 'device_brand' | 'device_model' | 'location' | 'device_type' | 'apn' | 'rat' | 'schedule';


export interface ConditionElement {
    type: ConditionType;
    function?: ConditionFunction;
    operation?: ConditionOperation;
    field?: ConditionField;
    terms?: ConditionElement[];
    value?: string;
}

export interface Condition  {
    rule: (ConditionElement | null);
}