import { elementsControl } from "./elementsControl";
import { combineReducers } from "redux";

export const reducer = combineReducers({
  elementsControl,
});

export type ConditionState = ReturnType<typeof reducer>;
