import { combineReducers } from "redux";
import { loginSlice, undoableReducer } from "@/modules";

export const reducer = combineReducers({
  conditions: undoableReducer,
  login: loginSlice.reducer,
});

export type AppState = ReturnType<typeof reducer>;
