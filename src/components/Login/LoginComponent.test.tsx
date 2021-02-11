import React from "react";
import { LoginComponent } from "./LoginComponent";
import { mount } from "enzyme";
import { actions } from "./slice";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore();

describe("LoginComponent", () => {

  let store: any;

  beforeEach(() => {
    store = mockStore({
      login: {
        username: '',
      }
    });
  });

  it("login action", async () => {
    
    jest.spyOn(actions, "login"); 

    const name = "BobMarley";
    const screen = mount(
      <Provider store={store}>
          <LoginComponent /> 
      </Provider>
    );

    screen.find("input").simulate("change", { target: { value: name } });
    await screen
      .find("form")
      .simulate("submit", { preventDefault: () => null });

      expect(actions.login).toHaveBeenCalledWith(name); 
  });
});
