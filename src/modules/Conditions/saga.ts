import { getAPNList, getCondition, getDeviceTypesList, getLocationsList, getRATList, getScheduleList, saveCondition } from "@/api/conditions";
import { takeEvery, call, put, fork } from "redux-saga/effects";
import { actions } from './slice';

export function* conditionsSaga() {
    yield takeEvery(actions.conditionEdit.type, conditionEdit);
    yield takeEvery(actions.conditionSave.type, conditionSave);
    yield takeEvery(actions.conditionEditorInit.type, conditionEditorInit);
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

export function* conditionEditorInit() {
    const schedule = yield call(getScheduleList);
    const location = yield call(getLocationsList);
    const apn = yield call(getAPNList);
    const rat = yield call(getRATList);
    const device_type = yield call(getDeviceTypesList);

    yield put(actions.conditionEditorInitSuccess({schedule, location, apn, rat, device_type}));
}