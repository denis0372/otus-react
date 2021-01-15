import React from "react";
import { authorizedOnlyHoc } from "@/utils/authorizedOnlyHOC";

export const ConditionsScreen = authorizedOnlyHoc(() => (
  <div>in the future there will be a conditions editor here :)</div>
));
