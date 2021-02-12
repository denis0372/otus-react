import React, {FC, useState} from "react";
import { RuleElement, RuleElementNames } from '../types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons'

interface Prop {
  element: RuleElement;
  index: number;
  onDelete: (index: number) => void;
}

export const BasicElement: FC<Prop> = ({element, index, onDelete}) => {

  return (
    <div className={`editor-block editor-block-${element.type}`}>{RuleElementNames[element.type]}
        <div className="delete-block">
          <FontAwesomeIcon icon={faTimes} color="black" onClick={() => onDelete(index)}/>
        </div>
    </div>
  )
};