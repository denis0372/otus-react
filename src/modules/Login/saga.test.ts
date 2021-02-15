import { checkUserSession, loginSaga, saveUserSession } from "./saga";
import { actions, CheckState, reducer } from "./slice";
import { getUserSession, logout, login } from "@/api/auth";
import { expectSaga, testSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";

describe("Login saga", () => {
  it("checkUserSession success", () => {
    const user = "SomeName";
    return expectSaga(checkUserSession)
      .withReducer(reducer)
      .provide([[matchers.call.fn(getUserSession), user]])
      .put(actions.login(user))
      .hasFinalState({
        username: user,
        status: CheckState.succeed,
      })
      .run();
  });

  it("checkUserSession fail", () => {
    const user = "";
    return expectSaga(checkUserSession)
      .withReducer(reducer)
      .provide([[matchers.call.fn(getUserSession), user]])
      .put(actions.logout())
      .hasFinalState({
        username: user,
        status: CheckState.failed,
      })
      .run();
  });

  it("saveUserSession success", () => {
    const user = "SomeUser";
    return expectSaga(saveUserSession, {
      type: actions.login.type,
      payload: user,
    })
      .call(login, user)
      .run();
  });

  it("loginSaga login success", () => {
    const user = "SomeUser";
    const saga = testSaga(loginSaga);
    saga
      .next()
      .fork(checkUserSession)
      .next(user)
      .take(actions.login.type)
      .next(actions.login(user))
      .call(login, user)
      .finish();
  });

  it("loginSaga login fails", () => {
    const user = "";
    const saga = testSaga(loginSaga);
    saga
      .next()
      .fork(checkUserSession)
      .next(user)
      .take(actions.login.type)
      .next(actions.login(user))
      .take(actions.logout.type)
      .finish();
  });

  /*
    По сути покрывает одним тестом два предыдущих сценария,
    но их оставим для примера на память :)
  */
  it("loginSaga user login full flow", () => {
    const emptyUserSession = "";
    const user = "SomeUser";
    const saga = testSaga(loginSaga);
    saga
      .next()
      .fork(checkUserSession)
      .save("LoginSagaDefaultLoginFlow") // сохранили точку
      .next()
      .take(actions.login.type)
      .next(actions.login(emptyUserSession))
      .take(actions.logout.type)
      .restore("LoginSagaDefaultLoginFlow") // восстановили точку
      .next()
      .take(actions.login.type)
      .next(actions.login(user))
      .call(login, user)
      .next()
      .take(actions.logout.type)
      .next()
      .call(logout)
      .finish();
  });
});
