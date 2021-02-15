import { loginSlice, initialState, CheckState } from "./slice";

describe("Login reducer", () => {
  it("Attempt login with empty name", () => {
    expect(
      loginSlice.reducer(initialState, loginSlice.actions.login(""))
    ).toEqual({ username: "", status: CheckState.initiated });
  });
  it("Attempt login as Denis", () => {
    expect(
      loginSlice.reducer(initialState, loginSlice.actions.login("Denis"))
    ).toEqual({ username: "Denis", status: CheckState.succeed });
  });
  it("Logout action", () => {
    expect(
      loginSlice.reducer({ username: "Denis" }, loginSlice.actions.logout())
    ).toEqual({ username: "", status: CheckState.failed });
  });
});
