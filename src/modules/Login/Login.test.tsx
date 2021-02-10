import React from "react";

import { LoginComponent } from "./Login";
import { shallow } from "enzyme";
import { actions } from "./slice";


describe("LoginComponent", () => {
  it("login action", async () => {
    
    jest.spyOn(actions, "login"); 

    const name = "BobMarley";
    const screen = shallow(
       <LoginComponent username="" login={actions.login} /> 
    );

    screen.find("input").simulate("change", { target: { value: name } });
    await screen
      .find("form")
      .simulate("submit", { preventDefault: () => null });

      expect(actions.login).toHaveBeenCalledWith(name); 
  });
});
