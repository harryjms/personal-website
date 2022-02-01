import { EVALS } from "..";

const LOCAL_STORAGE_KEY_STATS = "word-game-stats";

interface StatsObject {
  averageGuesses: number;
  currentStreak: number;
  gamesPlayed: number;
  gamesWon: number;
  guesses: { [K: number]: number } & { failed: number };
  maxStreak: number;
  lastSolution: string | null;
}

const initialStats: StatsObject = {
  averageGuesses: 0,
  currentStreak: 0,
  gamesPlayed: 0,
  gamesWon: 0,
  guesses: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, failed: 0 },
  maxStreak: 0,
  lastSolution: null,
};

export const loadStats = (): StatsObject => {
  if (!window.localStorage) return;
  const data = window.localStorage.getItem(LOCAL_STORAGE_KEY_STATS);
  if (data) return JSON.parse(data);
  return initialStats;
};

export const saveStats = (stats: StatsObject) => {
  if (!window.localStorage) return;

  window.localStorage.setItem(LOCAL_STORAGE_KEY_STATS, JSON.stringify(stats));
};

export const generateStats = (
  currentStats: StatsObject,
  solution: string,
  evals: EVALS[][],
  won: boolean
): StatsObject => {
  const stats = {
    ...currentStats,
  };

  stats.gamesPlayed += 1;
  stats.lastSolution = solution;
  const numberOfGuesses = evals.length;
  if (won) {
    stats.guesses[numberOfGuesses] += 1;
    stats.gamesWon += 1;
    stats.currentStreak += 1;

    if (stats.currentStreak > stats.maxStreak) {
      stats.maxStreak += 1;
    }
  } else {
    stats.guesses.failed += 1;
  }

  stats.averageGuesses =
    Object.keys(stats.guesses).reduce((count, guessNumber) => {
      if (guessNumber === "failed") return count;
      return count + stats.guesses[guessNumber] * parseInt(guessNumber);
    }, 0) / stats.gamesPlayed;

  return stats;
};
