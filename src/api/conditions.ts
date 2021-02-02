import { Condition } from '@/types/conditions'

export const getConditionsList = async <Condition extends Object> () => {
     const condition = await localStorage.getItem("condition");
     return condition != null ? JSON.parse(condition) : null;
  };

export const saveCondition = async (condition: Condition) => {
    await localStorage.setItem("condition", JSON.stringify(condition));
};