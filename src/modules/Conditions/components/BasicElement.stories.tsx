import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, number, select } from "@storybook/addon-knobs";
import { BasicElement } from "./BasicElement";
import { RuleElement } from "../types";

export default {
  title: "ConditionComponents",
  decorators: [withKnobs],
};

export const BasicElementStory: React.FC<{}> = () => {
  const value: RuleElement = {
      type: select("Type", ['and', 'or', 'ne', 'right_bracket', 'left_bracket'], 'and'),
  };
  const index = number("Index", 0);

  return (
    <BasicElement index={index} element={value} onDelete={action("delete")}/>
  );
};