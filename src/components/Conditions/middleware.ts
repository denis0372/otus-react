import { Middleware } from "redux";
import { saveCondition, getCondition } from "@/api/conditions"
import { conditionEditSuccess } from "./actions";

export const conditionControlMiddleware: Middleware = ({dispatch, getState}) => (next) => (action) => {
  
    if (action.type === "conditionSave") {
        const {elementsControl} = getState();
        saveCondition(elementsControl).then(() => alert("Успешно сохранено!"));
    } else if (action.type === "conditionEdit") {

        (async () => {
            const result = await getCondition();
            dispatch(conditionEditSuccess(result));
        })();
    }

    return next(action);    
};