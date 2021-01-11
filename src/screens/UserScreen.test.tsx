import React from "react";

import { RawUserScreen } from "./UserScreen";
import { shallow } from "enzyme";
import { logout } from "@/api/auth";

import { createMemoryHistory, createLocation } from 'history';
import { match } from 'react-router'

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

describe("UserScreen", () => {
  it("logout action", async () => {
    const screen = shallow(<RawUserScreen history={history} location={location} match={matchObj}/>);

    const btn = screen.find("button");
    await btn.simulate("click");
   
    expect(logout).toHaveBeenCalled();
    expect(history.location.pathname).toEqual(`/`);
  });
});