import { actions, reducer } from "./slice";
import { Rule, RuleElement } from "./types";


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


    describe("reducers", () => {

        it("condition add new Element", () => {
            const state = reducer(rule, actions.conditionAddElement(ruleElemet));
            expect(state.cursorPosition).toEqual(rule.cursorPosition + 1);
            expect(state.elements.length).toEqual(rule.elements.length + 1);
        });

        it("condition clear elements", () => {
            const state = reducer(rule, actions.conditionClear());
            expect(state.cursorPosition).toEqual(0);
            expect(state.elements.length).toEqual(0);
        });

        it("condition remove element", () => {
            const state = reducer(rule, actions.conditionRemovElement(0));
            expect(state.cursorPosition).toEqual(rule.cursorPosition);
            expect(state.elements.length).toEqual(rule.elements.length - 1);
        });
    });
});