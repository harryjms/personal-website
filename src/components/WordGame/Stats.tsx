import React, { useMemo } from "react";
import { GAME_STATE, useGameContext } from ".";
import { generateStats, loadStats, saveStats } from "./helpers/gameStats";

import Row from "./Row";
import StatBox from "./StatBox";

interface ICompleteProps {
  show: boolean;
}
const Stats: React.FC<ICompleteProps> = ({ show }) => {
  const { solution, evals, board, gameState } = useGameContext();

  const stats = useMemo(() => {
    if (show) {
      const loadedStats = loadStats();
      if (!loadedStats.lastSolution || loadedStats.lastSolution !== solution) {
        const data = generateStats(
          loadedStats,
          solution,
          evals,
          gameState === GAME_STATE.COMPLETE
        );
        saveStats(data);
        return data;
      }
      return loadedStats;
    }
  }, [show, evals, board, solution, gameState]);

  if (!show) return null;
  return (
    <div className="absolute z-50 p-4 rounded-sm bg-gray-200 dark:bg-gray-900 w-full h-full">
      <h2>Statistics</h2>
      <p>You have completed todays word game!</p>
      <div className="flex flex-col gap-2 mb-4 flex-1">
        <Row value={solution} squares={solution.length} allCorrect />
      </div>
      <hr className="my-4" />
      <div className="flex gap-4">
        <StatBox number={stats.gamesWon} caption="Games won" />
        <StatBox number={stats.gamesPlayed} caption="Games played" />
        <StatBox number={stats.currentStreak} caption="Current streak" />
        <StatBox number={stats.maxStreak} caption="Max streak" />
      </div>
    </div>
  );
};

export default Stats;
