import React, {FC} from "react";

interface Prop {
  isChecked: boolean;
  index: number;
  onCaretChange: (index: number) => void;
}

export const CaretElement: FC<Prop> = ({isChecked, index, onCaretChange}) => 
    <label className="caret"><input type="radio" name="ruleEditorCaret" checked={isChecked} value={index} onChange={() => {onCaretChange(index)}}/><div></div></label>
  ;