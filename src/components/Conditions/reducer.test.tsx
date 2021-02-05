import { conditionsControl } from "./reducer";
import { conditionAddElement, conditionClear, conditionRemovelement } from "./actions";
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

    describe("actions check", () => {
        it("conditionAddElement", () => {
            const expectedAction = {
                type: conditionAddElement.type,
                payload: ruleElemet,
            };
            expect(conditionAddElement(ruleElemet)).toEqual(expectedAction);
        });

        it("conditionAddElement", () => {
            const expectedAction = {
                type: conditionRemovelement.type,
                payload: 1,
            };
            expect(conditionRemovelement(1)).toEqual(expectedAction);
        });
    });

    describe("reducers", () => {

        it("elementsControl -> conditionAddElement", () => {
            const state = conditionsControl(rule, conditionAddElement(ruleElemet));
            expect(state.cursorPosition).toEqual(rule.cursorPosition + 1);
            expect(state.elements.length).toEqual(rule.elements.length + 1);
        });

        it("elementsControl -> conditionClear", () => {
            const state = conditionsControl(rule, conditionClear());
            expect(state.cursorPosition).toEqual(0);
            expect(state.elements.length).toEqual(0);
        });

        it("elementsControl -> conditionClear", () => {
            const state = conditionsControl(rule, conditionRemovelement(0));
            expect(state.cursorPosition).toEqual(rule.cursorPosition);
            expect(state.elements.length).toEqual(rule.elements.length - 1);
        });
    });
});