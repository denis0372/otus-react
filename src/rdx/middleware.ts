import { Middleware } from "redux";
import { saveCondition, getCondition } from "@/api/conditions";
import { conditionEditSuccess, conditionEdit, conditionSave } from "./actions";

export const conditionControlMiddleware: Middleware = ({
  dispatch,
  getState,
}) => (next) => (action) => {
  if (conditionSave.match(action)) {
    const { elementsControl } = getState();
    saveCondition(elementsControl);
  } else if (conditionEdit.match(action)) {
    (async () => {
      const result = await getCondition();
      dispatch(conditionEditSuccess(result));
    })();
  }

  return next(action);
};
