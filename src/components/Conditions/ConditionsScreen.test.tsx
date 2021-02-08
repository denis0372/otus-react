import React from "react";
import { ConditionsScreen } from "./ConditionsScreen";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { mount } from "enzyme";

const mockStore = configureStore();

describe("ConditionsScreen", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({conditions: {
      cursorPosition: 1,
      elements: [
        {type: "and"},
      ],
    }});

    jest.spyOn(store, "dispatch");
  });

  it("should generate action conditionAddElement on click add_btn_and", () => {
    const wrapper = mount(
      <Provider store={store}>
        <ConditionsScreen />
      </Provider>
    );

    wrapper.find("#add_btn_and").simulate("click");

    expect(store.getActions()).toMatchInlineSnapshot(`
      Array [
        Object {
          "payload": Object {
            "type": "and",
          },
          "type": "conditions/conditionAddElement",
        },
      ]
    `);
  });

  it("should generate action conditionClear on click clear_btn", () => {
    const wrapper = mount(
      <Provider store={store}>
        <ConditionsScreen />
      </Provider>
    );

    wrapper.find("#clear_btn").simulate("click");

    expect(store.getActions()).toMatchInlineSnapshot(`
      Array [
        Object {
          "type": "conditions/conditionClear",
        },
      ]
    `);
  });
});