import { actions, reducer } from "./slice";
import { Rule, RuleElement } from "./types";

describe("elementsControl reducer test", () => {
  const rule: Rule = {
    cursorPosition: 1,
    elements: [
      {
        type: "device_model",
        value: "mi6",
      },
      {
        type: "and",
      },
      {
        type: "device_brand",
        value: "xiaomi",
      },
    ],
  };

  const ruleElemet: RuleElement = {
    type: "schedule",
  };

  describe("reducers", () => {
    it("condition add new Element", () => {
      const state = reducer({ rule }, actions.conditionAddElement(ruleElemet));
      expect(state.rule.cursorPosition).toEqual(rule.cursorPosition + 1);
      expect(state.rule.elements.length).toEqual(rule.elements.length + 1);
    });

    it("condition clear elements", () => {
      const state = reducer({ rule }, actions.conditionClear());
      expect(state.rule.cursorPosition).toEqual(0);
      expect(state.rule.elements.length).toEqual(0);
    });

    it("condition remove element before cursor", () => {
      const state = reducer({ rule }, actions.conditionRemoveElement(0));
      expect(state.rule.cursorPosition).toEqual(rule.cursorPosition - 1);
      expect(state.rule.elements.length).toEqual(rule.elements.length - 1);
    });

    it("condition remove element after cursor", () => {
      const state = reducer({ rule }, actions.conditionRemoveElement(1));
      expect(state.rule.cursorPosition).toEqual(rule.cursorPosition);
      expect(state.rule.elements.length).toEqual(rule.elements.length - 1);
    });
  });
});
