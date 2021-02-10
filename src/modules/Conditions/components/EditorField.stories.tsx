import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, number, select } from "@storybook/addon-knobs";
import { EditorField } from "./EditorField";
import { Rule, RuleElement } from "../types";

export default {
  title: "ConditionComponents",
  decorators: [withKnobs],
};

export const EditorFieldStory: React.FC<{}> = () => {
  const value: Rule = {
      cursorPosition: 1,
      elements: [
        {type: 'device_brand', value: 'xiaomi'},
        {type: 'and'},
        {type: 'device_model', value: 'mi6'},
      ]
  };
  const index = number("Index", 0);

  return (
    <EditorField rule={value} onElementChange={action("elementChange")} onDelete={action("delete")} onCaretChange={action("caretChange")}/>
  );
};