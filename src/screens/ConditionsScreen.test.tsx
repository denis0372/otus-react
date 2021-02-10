import React from "react";
import { ConditionsScreen } from "./ConditionsScreen";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { mount, shallow } from "enzyme";

const mockStore = configureStore([]);

describe("ConditionsScreen", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      currentPosition: 0,
      elements: [],
    });
  });

  it("should generate action on click", () => {
    // const wrapper = mount(
    //   <Provider store={store}>
    //     <ConditionsScreen />
    //   </Provider>
    // );

  });
});