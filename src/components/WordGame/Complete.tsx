import React from "react";
import { useGameContext } from ".";
import Row from "./Row";

interface ICompleteProps {
  show: boolean;
}
const Complete: React.FC<ICompleteProps> = ({ show }) => {
  const { solution } = useGameContext();
  if (!show) return null;
  return (
    <div className="absolute z-50 p-4 rounded-sm bg-gray-200 dark:bg-gray-900 w-full h-full">
      <h2>Game Completed</h2>
      <p>You have completed todays word game!</p>
      <p>The solution is</p>
      <div className="flex flex-col gap-2 mb-4 flex-1">
        <Row value={solution} squares={solution.length} allCorrect />
      </div>
    </div>
  );
};

export default Complete;
