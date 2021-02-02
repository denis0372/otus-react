import React, {FC} from "react";
import { Rule, RuleElement } from '@/types/conditions'
import { BasicElement} from './BasicElement'

interface EditorFieldProp {
  onDelete: (index: number) => void;
  rule: Rule;
}



export const EditorField: FC<EditorFieldProp> = ({rule, onDelete}) => (
    <div className="editor-panel">
      {
        rule.elements?.map((element, index) => (
            <BasicElement element={element} index={index} onDelete={onDelete}/>
          ))
      }
    </div>
);
