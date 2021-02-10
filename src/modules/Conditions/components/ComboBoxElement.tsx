import React, {FC, useState} from "react";
import { RuleElement, RuleElementNames } from '../types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons'

interface Prop {
  element: RuleElement;
  index: number;
  onDelete: (index: number) => void;
  onChange: (index: number, value: string) => void;
}

export const ComboBoxElement: FC<Prop> = ({element, index, onDelete, onChange}) => {
 
  const [mouseOver, onMouseOver] = useState(0);

  return (
    <div className={`editor-block editor-block-${element.type}`} onMouseEnter={() => onMouseOver(1)} onMouseLeave={() => onMouseOver(0)}>{RuleElementNames[element.type]}
      <select style={{marginInlineStart: 20}} value={element.value || ''} onChange={(event) => {onChange(index, event.target.value);}}/>
      <div className={`delete-block ${mouseOver === 1 ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faTimes} color="black" onClick={() => onDelete(index)}/>
      </div>
    </div>
  )
};