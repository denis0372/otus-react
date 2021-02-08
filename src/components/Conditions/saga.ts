import { getCondition, saveCondition } from "@/api/conditions";
import { takeEvery, call, put, fork } from "redux-saga/effects";
import { actions } from './slice';

export function* conditionsSaga() {
    yield takeEvery(actions.conditionEdit.type, conditionEdit);
    yield takeEvery(actions.conditionSave.type, conditionSave);
}

export function* conditionSave({
    payload,
  }: ReturnType<typeof actions.conditionSave>) {
    const rule = payload;
    yield call(saveCondition, rule);
}

export function* conditionEdit() {
    const rule = yield call(getCondition);
    yield put(actions.conditionEditSuccess(rule));
}