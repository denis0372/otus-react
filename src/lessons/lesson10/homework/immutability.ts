import { isNumber } from "../../lesson2/helpers";

// Задание 1
export type OriginalTeam = {
  size: number;
  name: string;
  league: string;
};

export type ExpectedTeam = {
  name: string;
  league: string;
  roster: number;
};

export const originalTeamToExpectedTeam = (
  originalTeam: OriginalTeam
): ExpectedTeam => {
  const { league } = originalTeam;
  return { name: "New York Badgers", league, roster: 25 };
};

// Задание 2
export type SomeArray = Array<number | string>;

export const originalArrayToExpectedArray = (
  originalArray: Readonly<SomeArray>
): SomeArray => {
  const result = originalArray.map((elt) =>
    typeof elt === "number" ? elt + 1 : elt
  );
  result[0] = "two";

  return result;
};

// Задание 3

export type Team = {
  name: string;
  captain: {
    name: string;
    age: number;
  };
};

export const originalTeamToExpectedTeam2 = (originalTeam: Team): Team => {
  const result = JSON.parse(JSON.stringify(originalTeam));
  result.captain.age = 28;

  return result;
};
