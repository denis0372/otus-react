import React, {FC} from "react";
import { RuleElement, RuleElementNames } from '@/types/conditions'

interface Prop {
  element: RuleElement;
  index: number;
  onDelete: (index: number) => void;
}

export const BasicElement: FC<Prop> = ({element, index, onDelete}) => 
  <div className={`editor-block editor-block-${element.type}`}>{RuleElementNames[element.type]}</div>
  ;