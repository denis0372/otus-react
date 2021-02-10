import { elementsControl } from "./elementsControl";
import { conditionAddElement, conditionClear, conditionRemovelement } from "./actions";
import { Rule, RuleElement } from "types/conditions";


describe("elementsControl reducer test", () => {

    const rule : Rule = {
        cursorPosition: 1,
        elements: [
            {
                type: "device_model",
                value: "mi6"
            },
            {
                type: "and"
            },
            {
                type: "device_brand",
                value: "xiaomi"
            }
        ]
    };

    const ruleElemet : RuleElement = {
        type: "schedule"
    };

  describe("actions check", () => {
    it("conditionAddElement action", () => {
      const expectedAction = {
        type: conditionAddElement.type,
        payload: ruleElemet,
      };
      expect(conditionAddElement(ruleElemet)).toEqual(expectedAction);
    });

    it("conditionAddElement action", () => {
      const expectedAction = {
        type: conditionRemovelement.type,
        payload: 1,
      };
      expect(conditionRemovelement(1)).toEqual(expectedAction);
    });
  });

  describe("reducers", () => {
    it("condition add new element", () => {
      const state = elementsControl(rule, conditionAddElement(ruleElemet));
      expect(state.cursorPosition).toEqual(rule.cursorPosition + 1);
      expect(state.elements.length).toEqual(rule.elements.length + 1);
    });

    it("condition clear", () => {
      const state = elementsControl(rule, conditionClear());
      expect(state.cursorPosition).toEqual(0);
      expect(state.elements.length).toEqual(0);
    });

    it("condition remove element", () => {
      const state = elementsControl(rule, conditionRemovelement(0));
      expect(state.cursorPosition).toEqual(rule.cursorPosition);
      expect(state.elements.length).toEqual(rule.elements.length - 1);
    });
  });
});
