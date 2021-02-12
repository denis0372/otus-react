import { ParsedLineType } from "./parser";
import { isNumber } from "./helpers";
import {
  mathOperators,
  mathPriorities,
  mathOperatorsPriorities,
} from "./mathOperators";

const [FIRST, SECOND, THIRD] = mathPriorities;

export const firstPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === FIRST) {
      if (!mathOperators[item]) {
        throw new TypeError("Unexpected stack!");
      }
      result = [
        ...result.slice(0, -2),
        mathOperators[item](Number(prevItem), Number(nextItem)),
      ];
    } else {
      result.push(nextItem);
    }
    return result;
  }, []);

export const secondPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === SECOND) {
      if (!mathOperators[item]) {
        throw new TypeError("Unexpected stack!");
      }
      result = [
        ...result.slice(0, -2),
        mathOperators[item](Number(prevItem), Number(nextItem)),
      ];
    } else {
      result.push(nextItem);
    }
    return result;
  }, []);

export const thirdPrioritiesCalc = (stack: ParsedLineType): number =>
  stack.reduce<number>((result, nextItem, key) => {
    const item = stack[key - 1];

    if (
      mathOperatorsPriorities[item] === FIRST ||
      mathOperatorsPriorities[item] === SECOND
    ) {
      throw new TypeError("Unexpected stack!");
    }

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === THIRD) {
      result = mathOperators[item](Number(result), Number(nextItem));
    }
    return result;
  }, Number(stack[0]));

export const simplifyExp = (line: string): string => {
  // squaring
  let newLine = line.replace(/\*\*/g, "^ 2");

  // factorial
  newLine = newLine.replace(/(\d+)( )?\!/g, (exp, numMatch) => {
    const num = parseInt(numMatch, 10);
    let count = 1;
    let result = "";
    while (count <= num) {
      result = `${result} ${count === 1 ? "" : "*"} ${count}`;
      count++;
    }
    return result.trim();
  });

  return newLine;
};
