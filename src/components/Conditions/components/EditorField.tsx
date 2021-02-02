import React, {FC} from "react";
import { Rule, RuleElement } from '@/types/conditions'

interface EditorFieldProp {
  onDelete: (element: RuleElement, index: number) => void;
  rule: Rule;
}



export const EditorField: FC<EditorFieldProp> = ({rule, onDelete}) => (
    <div className="editor-panel">
      


    </div>
);
