/* Типы для работы */

export interface Rule {
    cursorPosition: number;
    elements: RuleElement[];
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