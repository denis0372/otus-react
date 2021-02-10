import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, number, select } from "@storybook/addon-knobs";
import { ComboBoxElement } from "./ComboBoxElement";
import { RuleElement } from "../types";

export default {
  title: "ConditionComponents",
  decorators: [withKnobs],
};

const locations = ['Russia', 'Germany', 'France', 'China'];

export const ComboBoxElementStory: React.FC<{}> = () => {
  const value: RuleElement = {
      type: select("Type", ['location', 'device_type', 'apn', 'rat'], 'location'),
      value: select("Initial value", locations, 'Russia')
  };
  const index = number("Index", 0);

  return (
    <ComboBoxElement index={index} element={value} onChange={action("change")} onDelete={action("delete")}/>
  );
};