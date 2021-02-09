import React, {FC} from "react";
import { Rule, RuleElement } from '../types'
import { BasicElement} from './BasicElement'
import { InputTextElement } from './InputTextElement'
import { ComboBoxElement } from './ComboBoxElement'
import { CaretElement } from './CaretElement'

interface EditorFieldProp {
  onDelete: (index: number) => void;
  onCaretChange: (index: number) => void;
  onElementChange: (index: number, value: string) => void;
  rule: Rule;
}

export const EditorField: FC<EditorFieldProp> = ({rule, onDelete, onCaretChange, onElementChange}) => (
    <div className="editor-panel">
      {
        rule.elements?.map((element, index) => (
            <span key={`stub_${index}`}>
              <CaretElement index={index} key={`carret_${index}`} isChecked={index === rule.cursorPosition} onCaretChange={onCaretChange} />
              
                {( () => {
                    switch (element.type) {
                      case 'device_brand':
                      case 'device_model':
                        return <InputTextElement element={element} index={index} key={index} onDelete={onDelete} onChange={onElementChange}/>   
                      
                      case 'device_type':
                      case 'location':
                      case 'schedule':
                      case 'rat':
                      case 'apn':
                        return <ComboBoxElement element={element} index={index} key={index} onDelete={onDelete} onChange={onElementChange}/>   

                      default:
                        return <BasicElement index={index} element={element} key={index} onDelete={onDelete}/>;
                    }
                  })()
                }
            </span>
          ))
      }
      <CaretElement index={rule.elements.length} key={`carret_${rule.elements.length}`} isChecked={rule.elements.length === rule.cursorPosition} onCaretChange={onCaretChange} />
    </div>
);
