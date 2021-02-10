import { OriginalTeam, ExpectedTeam, originalTeamToExpectedTeam, originalArrayToExpectedArray, originalTeamToExpectedTeam2 } from "./immutability";

// Задание 1
test("team to team", () => {
  const originalTeam: OriginalTeam = Object.freeze({
    size: 15,
    name: "Tampa Bay Roosters",
    league: "Minor",
  });

  const expectedTeam: ExpectedTeam = {
    name: "New York Badgers",
    league: "Minor",
    roster: 25,
  };

  const expectedTeam2: OriginalTeam = {
    size: 15,
    name: "Tampa Bay Roosters",
    league: "Minor",
  };

  expect(originalTeamToExpectedTeam(originalTeam)).toEqual(expectedTeam);
  expect(originalTeam).toEqual(expectedTeam2);
});

// Задание 2
test("array to array", () => {
  const originalArray = Object.freeze([1, 2, 3, 4]);

  const expectedArray = ["two", 3, 4, 5];
  const expectedArray2 = [1, 2, 3, 4];

  expect(originalArrayToExpectedArray(originalArray)).toEqual(expectedArray);
  expect(originalArray).toEqual(expectedArray2);
});

// Задание 3
test("team to team deep", () => {
  const originalTeam = Object.freeze({
    name: "Tampa Bay Roosters",
    captain: {
      name: "Bryan Downey",
      age: 27,
    },
  });

  const expectedTeam = {
    name: "Tampa Bay Roosters",
    captain: {
      name: "Bryan Downey",
      age: 28,
    },
  };

  const expectedTeam2 = {
    name: "Tampa Bay Roosters",
    captain: {
      name: "Bryan Downey",
      age: 27,
    },
  };

  expect(originalTeamToExpectedTeam2(originalTeam)).toEqual(expectedTeam);
  expect(originalTeam).toEqual(expectedTeam2);
});
