import React from "react";

import { UserComponent } from "./UserComponent";
import { shallow } from "enzyme";
import { logout } from "@/api/auth";

import { createMemoryHistory, createLocation } from 'history';
import { match } from 'react-router'
import { actions } from "@/components/Login/slice";

const path = `/user/:name`;
const history = createMemoryHistory();

const matchObj: match<{ name: string }> = {
    isExact: false,
    path,
    url: path.replace(':name', 'Denis'),
    params: { name: "Denis" }
};

const location = createLocation(matchObj.url);

history.location = location;

jest.mock("@/api/auth", () => ({
  logout: jest.fn(),
}));

describe("UserComponent", () => {

  it("logout action", async () => {
    jest.spyOn(actions, "login"); 

    const screen = shallow(<UserComponent username="Denis" logout={actions.logout}/>);

    const btn = screen.find("button");
    await btn.simulate("click");
   
    expect(logout).toHaveBeenCalled();
    expect(history.location.pathname).toEqual(`/`);
  });
});