import React, {FC} from "react";
import { Rule, RuleElement } from '@/types/conditions'
import { BasicElement} from './BasicElement'
import { CaretElement } from './CaretElement'

interface EditorFieldProp {
  onDelete: (index: number) => void;
  onCaretChange: (index: number) => void;
  rule: Rule;
}



export const EditorField: FC<EditorFieldProp> = ({rule, onDelete, onCaretChange}) => (
    <div className="editor-panel">
      {
        rule.elements?.map((element, index) => (
            <span key={`stub_${index}`}>
              <CaretElement index={index} key={`carret_${index}`} isChecked={index === rule.cursorPosition} onCaretChange={onCaretChange} />
              <BasicElement element={element} index={index} key={index} onDelete={onDelete}/>
            </span>
          ))
      }
      <CaretElement index={rule.elements.length} key={`carret_${rule.elements.length}`} isChecked={rule.elements.length === rule.cursorPosition} onCaretChange={onCaretChange} />
    </div>
);
