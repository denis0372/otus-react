import React from "react";

import { LoginComponent } from "./LoginComponent";
import { shallow } from "enzyme";
import { loginSlice } from "@/rdx/login"; 


describe("LoginComponent", () => {
  it("login action", async () => {
    
    jest.spyOn(loginSlice.actions, "login"); 

    const name = "BobMarley";
    const screen = shallow(
       <LoginComponent username="" login={loginSlice.actions.login} /> 
    );

    screen.find("input").simulate("change", { target: { value: name } });
    await screen
      .find("form")
      .simulate("submit", { preventDefault: () => null });

      expect(loginSlice.actions.login).toHaveBeenCalledWith(name); 
  });
});
