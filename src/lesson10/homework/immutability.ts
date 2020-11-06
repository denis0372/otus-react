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
  const {league} = originalTeam;
  return {name: "New York Badgers", league: league, roster: 25};
};

// Задание 2
export type SomeArray = Array<number | string>;

export const originalArrayToExpectedArray = (originalArray: Readonly<SomeArray>): SomeArray => {

  let result = originalArray.map((obj) => typeof obj === "number" ? obj + 1 : obj);
  result = result.map((obj) => obj === 2 ? "two" : obj);

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

  let result = JSON.parse(JSON.stringify(originalTeam));
  result.captain.age = 28;

  return result;
}