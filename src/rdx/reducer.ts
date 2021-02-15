import { combineReducers } from "redux";
import { loginSlice, conditionsSlice } from "@/modules";

export const reducer = combineReducers({
  conditions: conditionsSlice.reducer,
  login: loginSlice.reducer,
});

export type AppState = ReturnType<typeof reducer>;
