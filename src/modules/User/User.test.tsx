import React from "react";

import { UserComponent } from "./User";
import { shallow } from "enzyme";
import { actions } from "@/modules/Login/slice";

describe("UserComponent", () => {
  it("logout action", async () => {
    jest.spyOn(actions, "logout");

    const screen = shallow(
      <UserComponent username="Denis" logout={actions.logout} />
    );

    const btn = screen.find("button");
    await btn.simulate("click");

    expect(actions.logout).toHaveBeenCalled();
  });
});
