// Задание 1
export type Team = { name: string; score: number };

export const getTopName = (teams: Team[]): string => {
  return teams.reduce<Team>(
    (result, team) => (result.score < team.score ? team : result),
    teams[0]
  ).name;
};

// Задание 2
export type QsObj = Record<string, string | number | boolean | object>;

export const createQs = (qsObj: QsObj): string => {
  return Object.keys(qsObj).reduce(
    (result, key) =>
      (result += `${result.length > 0 ? "&" : "?"}${key}=${qsObj[key]}`),
    ""
  );
};

// Задание 3

export const parseQs = (qs: string): QsObj => {
  const result: QsObj = {};

  qs.substring(1)
    .split("&")
    .map(
      (pair) =>
        (result[pair.substring(0, pair.indexOf("="))] = pair.substring(
          pair.indexOf("=") + 1
        ))
    );

  return result;
};
