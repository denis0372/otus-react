import React, {FC, useState} from "react";
import { RuleElement, RuleElementNames } from '../types'

interface Prop {
  element: RuleElement;
  index: number;
  onDelete: (index: number) => void;
}

export const BasicElement: FC<Prop> = ({element, index, onDelete}) => {

  const [mouseOver, onMouseOver] = useState(0);

  return (
    <div className={`editor-block editor-block-${element.type}`} onMouseEnter={() => onMouseOver(1)} onMouseLeave={() => onMouseOver(0)}>{RuleElementNames[element.type]}
        <div className={`delete-block ${mouseOver === 1 ? 'active' : ''}`}><i className="fa fa-times"></i></div>
    </div>
  )
};