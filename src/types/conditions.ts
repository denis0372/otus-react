/* Для хранения */

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


/* Для работы */

export interface Rule {
    cursorPosition: 0;
    rules: RuleElement[];
}

export interface RuleElement {
    type: RuleElementType;
    value?: string;
}

export type RuleElementType = 'and' | 'or' | 'ne' | 'right_bracket' | 'left_bracket' | 'device_brand' | 'device_model' | 'location' | 'device_type' | 'apn' | 'rat' | 'schedule'

export const RuleElementNames = {
    'device_brand': 'Бренд',
    'device_model': 'Модель',
    'location': 'Местоположение', 
    'device_type': 'Тип устройства',
    'apn': 'APN',
    'rat': 'RAT',
    'schedule': 'Расписание',
    'and': 'И',
    'or': 'ИЛИ',
    'ne': 'НЕ',
    'right_bracket': ')',
    'left_bracket': '('
}