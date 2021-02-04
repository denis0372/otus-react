import { Condition, Rule } from '@/types/conditions'

export const getCondition = async <Rule extends Object> () => {
    const condition = await localStorage.getItem("condition");
    return condition != null ? JSON.parse(condition) : null;
};

export const saveCondition = async (condition: Rule) => {
    await localStorage.setItem("condition", JSON.stringify(condition));
};