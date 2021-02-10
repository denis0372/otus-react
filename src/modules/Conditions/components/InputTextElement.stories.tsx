import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, number, select } from "@storybook/addon-knobs";
import { InputTextElement } from "./InputTextElement";
import { RuleElement } from "../types";

export default {
  title: "ConditionComponents",
  decorators: [withKnobs],
};

export const InputTextElementStory: React.FC<{}> = () => {
  const value: RuleElement = {
      type: select("Type", ['device_brand', 'device_model'], 'device_brand'),
      value: text("Initial value", '')
  };
  const index = number("Index", 0);

  return (
    <InputTextElement index={index} element={value} onChange={action("change")} onDelete={action("delete")}/>
  );
};