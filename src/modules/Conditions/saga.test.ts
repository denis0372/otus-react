import { call } from "redux-saga/effects";

import { conditionEdit, conditionSave, conditionsSaga } from "./saga";
import { actions } from "./slice";
import { getCondition } from "@/api/conditions";
import { Rule } from "./types";

const rule : Rule = {
  cursorPosition: 1,
  elements: []
};

describe("Conditions saga", () => {
  it("conditionEdit", () => {
    const generator = conditionEdit();

    expect(generator.next().value).toEqual(call(getCondition));

    expect(generator.next(rule).value).toMatchInlineSnapshot(`
      Object {
        "@@redux-saga/IO": true,
        "combinator": false,
        "payload": Object {
          "action": Object {
            "payload": Object {
              "cursorPosition": 1,
              "elements": Array [],
            },
            "type": "conditions/conditionEditSuccess",
          },
          "channel": undefined,
        },
        "type": "PUT",
      }
    `);

    expect(generator.next().done).toBe(true);
  });
  it("conditionSave", () => {
    const generator = conditionSave({
      type: actions.conditionSave.type,
      payload: rule,
    });
    expect(generator.next().value).toMatchInlineSnapshot(`
      Object {
        "@@redux-saga/IO": true,
        "combinator": false,
        "payload": Object {
          "args": Array [
            Object {
              "cursorPosition": 1,
              "elements": Array [],
            },
          ],
          "context": null,
          "fn": [Function],
        },
        "type": "CALL",
      }
    `);
    expect(generator.next().done).toBe(true);
  });
});