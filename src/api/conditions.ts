import { Rule } from '@/modules/Conditions/types'

export const getCondition = async <Rule extends Object> () => {
    const condition = await localStorage.getItem("condition");
    return condition != null ? JSON.parse(condition) : null;
};

export const saveCondition = async (condition: Rule) => {
    await localStorage.setItem("condition", JSON.stringify(condition));
};

export const getLocationsList = async <Array> () => {
    return {
        1: "Россия",
        2: "Германия",
        3: "Франция",
        4: "Китай",
    };
}

export const getScheduleList = async <Object> () => {
    return {
        1: "Все дни",
        2: "Будние дни",
        3: "Праздники",
        4: "Выходные",
    };
}

export const getAPNList = async <Object> () => {
    return {
        1: "APN 1",
        2: "APN 2",
        3: "APN 3",
        4: "APN 4",
        5: "APN 5",
    };
}

export const getRATList = async <Object> () => {
    return {
        1: "GSM",
        2: "LTE",
        3: "5G",
    };
}

export const getDeviceTypesList = async <Object> () => {
    return {
        0: "Не существует",
        1: "Modem",
        2: "Phone",
        3: "Tablet",
    };
}

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