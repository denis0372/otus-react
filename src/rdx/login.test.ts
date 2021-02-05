import { loginSlice, initialState } from "./login";

describe("Login reducer", () => {
  it("Attempt login with empty name", () => {
    expect(
      loginSlice.reducer(initialState, loginSlice.actions.login(""))
    ).toEqual({ username: "" });
  });
  it("Attempt login as Denis", () => {
    expect(
      loginSlice.reducer(
        initialState,
        loginSlice.actions.login("Denis")
      )
    ).toEqual({ username: "Denis" });
  });
  it("Logout action", () => {
    expect(
      loginSlice.reducer({ username: "Denis" }, loginSlice.actions.logout())
    ).toEqual({ username: "" });
  });

});