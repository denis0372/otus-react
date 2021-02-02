import React, {FC} from "react";
import { ConditionElement } from '@/types/conditions'

interface Prop {
  element: ConditionElement;
  onClick: () => void;
}

export const ClickCounterButton: FC<Prop> = ({element, onClick}) => 
  <button onClick={onClick}>{element.field}</button>
  ;