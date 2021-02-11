import { Rule, Option } from '@/modules/Conditions/types'


export const getCondition = async <Rule extends Object> () => {
    const condition = await localStorage.getItem("condition");
    return condition != null ? JSON.parse(condition) : null;
};

export const saveCondition = async (condition: Rule) => {
    await localStorage.setItem("condition", JSON.stringify(condition));
};

const locationsList: Option[] = [
    {id: 1, value: "Россия"},
    {id: 2, value:"Германия"},
    {id: 3, value:"Франция"},
    {id: 4, value:"Китай"},
];

export const getLocationsList = async () => {
    return locationsList;
}

const scheduleList: Option[] = [
    {id: 1, value:"Все дни"},
    {id: 2, value:"Будние дни"},
    {id: 3, value:"Праздники"},
    {id: 4, value:"Выходные"},
];

export const getScheduleList = async () => {
    return scheduleList;
}

const apnList: Option[] = [
    {id: 1, value:"APN 1"},
    {id: 2, value:"APN 2"},
    {id: 3, value:"APN 3"},
    {id: 4, value:"APN 4"},
    {id: 5, value:"APN 5"},
];

export const getAPNList = async () => {
    return apnList;
}

const ratList: Option[] = [
    {id: 1, value:"GSM"},
    {id: 2, value:"LTE"},
    {id: 3, value:"5G"},
];

export const getRATList = async () => {
    return ratList;
}

const deviceTypesList: Option[] = [
    {id: 0, value: "Не существует"},
    {id: 2, value: "Modem"},
    {id: 2, value: "Phone"},
    {id: 3, value: "Tablet"},
];

export const getDeviceTypesList = async () => {
    return deviceTypesList;
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