import { isEmpty } from "ramda";
import { take, call, put, fork } from "redux-saga/effects";
import { getUserSession, login, logout } from "@/api/auth";
import { actions } from "./slice";

export function* checkUserSession() {
  const userSession = yield call(getUserSession);
  if (userSession && !isEmpty(userSession)) {
    yield put(actions.login(userSession));
  } else {
    yield put(actions.logout());
    yield clearUserSession();
  }
}

export function* clearUserSession() {
  yield call(logout);
}

export function* saveUserSession({
  payload,
}: ReturnType<typeof actions.login>) {
  const username = String(payload);
  if (username && !isEmpty(username)) {
    yield call(login, username);
  }
}

export function* loginSaga() {
  yield fork(checkUserSession);
  while (true) {
    const action = yield take(actions.login.type);
    yield* saveUserSession(action);
    yield take(actions.logout.type);
    yield* clearUserSession();
  }
}
