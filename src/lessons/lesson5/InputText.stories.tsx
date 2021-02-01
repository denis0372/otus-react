import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";

import { InputText } from "./InputText";

export default {
  title: "InputText",
  decorators: [withKnobs],
};

export const InputTextStory: React.FC<{}> = () => {
  const value = text("Initial value", '');
  const placeHolder = text("PlaceHolder", '');

  return (
    <InputText value={value} placeHolder={placeHolder} onChangeAction={action("change")}/>
  );
};