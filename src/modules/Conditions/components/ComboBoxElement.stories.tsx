import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, number, select } from "@storybook/addon-knobs";
import { ComboBoxElement } from "./ComboBoxElement";
import { RuleElement } from "../types";

export default {
  title: "ConditionComponents",
  decorators: [withKnobs],
};

const locations = ["Russia", "Germany", "France", "China"];

export const ComboBoxElementStory: React.FC<{}> = () => {
  const value: RuleElement = {
    type: select("Type", ["location", "device_type", "apn", "rat"], "location"),
    value: select("Initial value", locations, "Russia"),
  };
  const index = number("Index", 0);

  return (
    <ComboBoxElement
      index={index}
      element={value}
      onChange={action("change")}
      onDelete={action("delete")}
      options={[
        { id: 1, value: "Пункт 1" },
        { id: 2, value: "Пункт 2" },
        { id: 3, value: "Пункт 3" },
      ]}
    />
  );
};
