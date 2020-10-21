import React from "react";
import { withKnobs, number } from "@storybook/addon-knobs";

import { ClickCounter } from "./ClickCounter";

export default {
  title: "ClickCounter",
  decorators: [withKnobs],
};

export const ClickCounterStory: React.FC<{}> = () => {
  const count = number("Start value", 0);

  return (
    <ClickCounter start={count}/>
  );
};