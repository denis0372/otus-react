import React from "react";

import { HeaderComponent } from "./Header";
import { shallow } from "enzyme";
import { actions } from "@/modules/Login/slice";

describe("UserComponent", () => {
  it("logout action", async () => {
    jest.spyOn(actions, "logout");

    const screen = shallow(
      <HeaderComponent username="Denis" logout={actions.logout} />
    );

    const btn = screen.find("button");
    await btn.simulate("click");

    expect(actions.logout).toHaveBeenCalled();
  });
});
