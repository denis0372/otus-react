import React, {FC} from "react";
import { RuleElement, RuleElementNames } from '../types'

interface Prop {
  element: RuleElement;
  index: number;
  onDelete: (index: number) => void;
  onChange: (index: number, value: string) => void;
}

export const ComboBoxElement: FC<Prop> = ({element, index, onDelete, onChange}) => 
  <div className={`editor-block editor-block-${element.type}`}>{RuleElementNames[element.type]}
    <select style={{marginInlineStart: 20}} value={element.value || ''} onChange={(event) => {onChange(index, event.target.value);}}/>
  </div>
;