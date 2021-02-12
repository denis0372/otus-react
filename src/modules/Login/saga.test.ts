import { call } from "redux-saga/effects";
import { checkUserSession, saveUserSession } from "./saga";
import { actions } from "./slice";
import { getUserSession } from "@/api/auth";

describe("Login saga", () => {
  it("checkUserSession", () => {
    const generator = checkUserSession();

    expect(generator.next().value).toEqual(call(getUserSession));

    expect(generator.next("Username").value).toMatchInlineSnapshot(`
      Object {
        "@@redux-saga/IO": true,
        "combinator": false,
        "payload": Object {
          "action": Object {
            "payload": "Username",
            "type": "user/login",
          },
          "channel": undefined,
        },
        "type": "PUT",
      }
    `);

    expect(generator.next().done).toBe(true);
  });
  it("checkUserSession", () => {
    const generator = saveUserSession({
      type: actions.login.type,
      payload: "Username",
    });
    expect(generator.next().value).toMatchInlineSnapshot(`
      Object {
        "@@redux-saga/IO": true,
        "combinator": false,
        "payload": Object {
          "args": Array [
            "Username",
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
