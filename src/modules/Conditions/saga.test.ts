import { call } from "redux-saga/effects";
import {
  conditionEdit,
  conditionEditorInit,
  conditionSave,
  conditionsSaga,
} from "./saga";
import { actions, reducer } from "./slice";
import {
  getCondition,
  saveCondition,
  getDeviceTypesList,
  getRATList,
  getAPNList,
  getLocationsList,
  getScheduleList,
} from "@/api/conditions";
import { EditorEntityEnv, Option, Rule } from "./types";
import { expectSaga, testSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";

const rule: Rule = {
  cursorPosition: 1,
  elements: [
    {
      type: "device_brand",
      value: "xiaomi",
    },
    {
      type: "and",
    },
    {
      type: "device_model",
      value: "mi6",
    },
  ],
};

const locationsList: Option[] = [
  { id: 1, value: "Россия" },
  { id: 2, value: "Германия" },
];

const scheduleList: Option[] = [{ id: 1, value: "Все дни" }];

const apnList: Option[] = [
  { id: 1, value: "APN 1" },
  { id: 2, value: "APN 2" },
];

const ratList: Option[] = [{ id: 1, value: "GSM" }];

const deviceTypesList: Option[] = [
  { id: 0, value: "Не существует" },
  { id: 2, value: "Modem" },
];

const editorEntityEnv: EditorEntityEnv = {
  schedule: scheduleList,
  location: locationsList,
  apn: apnList,
  rat: ratList,
  device_type: deviceTypesList,
};

describe("Conditions saga", () => {
  it("conditionEdit", () => {
    return expectSaga(conditionEdit)
      .withReducer(reducer)
      .provide([[matchers.call.fn(getCondition), rule]])
      .put(actions.conditionEditSuccess(rule))
      .hasFinalState({
        rule,
      })
      .run();
  });

  it("conditionSave", () => {
    return expectSaga(conditionSave, actions.conditionSave(rule))
      .withReducer(reducer)
      .call(saveCondition, rule)
      .run();
  });

  it("conditionEditorInit", () => {
    return expectSaga(conditionEditorInit)
      .withReducer(reducer, { rule })
      .provide([
        [matchers.call.fn(getScheduleList), scheduleList],
        [matchers.call.fn(getLocationsList), locationsList],
        [matchers.call.fn(getAPNList), apnList],
        [matchers.call.fn(getRATList), ratList],
        [matchers.call.fn(getDeviceTypesList), deviceTypesList],
      ])
      .put(actions.conditionEditorInitSuccess(editorEntityEnv))
      .hasFinalState({ rule, editorEntityEnv })
      .run();
  });
});
