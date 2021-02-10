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
    const scheduleListOptions = yield call(getScheduleList);
    const locationsListOptions = yield call(getLocationsList);
    const apnListOptions = yield call(getAPNList);
    const ratListOptions = yield call(getRATList);
    const deviceTypesListOptions = yield call(getDeviceTypesList);

    yield put(actions.conditionEditorInitSuccess({scheduleListOptions, locationsListOptions, apnListOptions, ratListOptions, deviceTypesListOptions}));
}