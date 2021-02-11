import React, {FC} from "react";
import { EditorEntityEnv, Rule, RuleElement } from '../types'
import { BasicElement} from './BasicElement'
import { InputTextElement } from './InputTextElement'
import { ComboBoxElement } from './ComboBoxElement'
import { CaretElement } from './CaretElement'

interface EditorFieldProp {
  onDelete: (index: number) => void;
  onCaretChange: (index: number) => void;
  onElementChange: (index: number, value: string) => void;
  rule: Rule;
  editorEntityEnv?: EditorEntityEnv;
}

export const EditorField: FC<EditorFieldProp> = ({rule, onDelete, onCaretChange, onElementChange, editorEntityEnv}) => {

  const createControlElement = (element: RuleElement, index: number) => {
    switch (element.type) {
      case 'device_brand':
      case 'device_model':
        return <InputTextElement element={element} index={index} key={index} onDelete={onDelete} onChange={onElementChange}/>   
      
      case 'device_type':
        return <ComboBoxElement element={element} index={index} key={index} onDelete={onDelete} onChange={onElementChange} options={editorEntityEnv?.deviceTypesListOptions}/>   
      case 'location':
        return <ComboBoxElement element={element} index={index} key={index} onDelete={onDelete} onChange={onElementChange} options={editorEntityEnv?.locationsListOptions}/>   
      case 'schedule':
        return <ComboBoxElement element={element} index={index} key={index} onDelete={onDelete} onChange={onElementChange} options={editorEntityEnv?.scheduleListOptions}/>   
      case 'rat':
        return <ComboBoxElement element={element} index={index} key={index} onDelete={onDelete} onChange={onElementChange} options={editorEntityEnv?.ratListOptions}/>   
      case 'apn':
        return <ComboBoxElement element={element} index={index} key={index} onDelete={onDelete} onChange={onElementChange} options={editorEntityEnv?.apnListOptions}/>   

      default:
        return <BasicElement index={index} element={element} key={index} onDelete={onDelete}/>;
    }
  }

  return (
    <div className="editor-panel">
      {
        rule.elements?.map((element, index) => (
            <span key={`stub_${index}`}>
              <CaretElement index={index} key={`carret_${index}`} isChecked={index === rule.cursorPosition} onCaretChange={onCaretChange} />
                {createControlElement(element, index)}
            </span>
          ))
      }
      <CaretElement index={rule.elements.length} key={`carret_${rule.elements.length}`} isChecked={rule.elements.length === rule.cursorPosition} onCaretChange={onCaretChange} />
    </div>
  )
};