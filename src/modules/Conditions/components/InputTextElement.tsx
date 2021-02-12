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

export const InputTextElement: FC<Prop> = ({element, index, onDelete, onChange}) => {

  return (
    <div className={`editor-block editor-block-${element.type}`} >{RuleElementNames[element.type]}
      <input type="text" style={{marginInlineStart: 20}} value={element.value || ''} onChange={(event) => {onChange(index, event.target.value);}}/>
      <div className="delete-block">
          <FontAwesomeIcon icon={faTimes} color="black" onClick={() => onDelete(index)}/>
      </div>
    </div>
  );
};