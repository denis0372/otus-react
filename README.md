# otus-react
Otus react lessons

# Описание функционала приложения для проектной работы

Редактор правил для фильтрации траффика

Необходимо сделать визуальный редактор правил, где можно было бы редактировать правила хранящиеся в виде json строки. 
Правила представляют собой набор условий связанных между собой логическими операторами "И", "ИЛИ", "НЕ" с возможностью использования скобок.
Элементы правил:
1. Местоположения - конечный список, необходима возможность выбирать элемент из списка (хранится id)
2. RAT (Radio Access Technolgy) - конечный список, необходима возможность выбирать элемент из списка (хранится id)
3. APN (Access Point Name, имя точки доступа) - конечный список, необходима возможность выбирать элемент из списка (хранится id)
4. Тип устройства - конечный список, необходима возможность выбирать элемент из списка (хранится id)
5. Расписание (предопределенное) - конечный список, необходима возможность выбирать элемент из списка (хранится id)
6. Бренд - произвольное строковое значение, возможно маска (хранится значение)
7. Модель - произвольное строковое значение, возможно маска (хранится значение)


Описание структуры json:

{"type":"logic","terms":
[
    {"type":"element","field":"location","operation":"eq","value":"2"},
    {"type":"logic","terms":
        [
            {"type":"element","field":"device_type","operation":"eq","value":"not_exists"},
            {"type":"element","field":"device_brand","operation":"eq","value":"xiaomi"},
            {"type":"element","field":"device_model","operation":"eq","value":"mi6"}
        ],"function":"or"},
    {"type":"element","field":"schedule","operation":"eq","value":"3"},
    {"type":"element","field":"apn","operation":"ne","value":"1"}
],"function":"and"}

Варианты function:
1. and - логическое И
2. or - логическое ИЛИ

Варианты operation:
1. ne - not equals
2. eq - equals

Варианты field:
1. device_brand - бренд, значение название бренда
2. device_model - модель, значение название модели
3. location - местоположение, значение id местоположения
4. device_type - тип устройства, значение id типа устройства или not_exists
5. apn - APN, значение id APN
6. rat - RadioAccessType, значение id RAT
7. schedule - расписание, значение id расписания
