import React from "react";
import { Conditions } from "./Conditions";
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
        <Conditions />
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

  it("should generate action conditionSave on click save_btn", () => {
    
    const wrapper = mount(
      <Provider store={store}>
        <Conditions />
      </Provider>
    );

    wrapper.find("#save_btn").simulate("click");

    expect(store.getActions()).toMatchInlineSnapshot(`
      Array [
        Object {
          "payload": Object {
            "cursorPosition": 1,
            "elements": Array [
              Object {
                "type": "and",
              },
            ],
          },
          "type": "conditions/conditionSave",
        },
      ]
    `);
  });
});