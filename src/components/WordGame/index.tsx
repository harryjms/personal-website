import React, { useMemo, useState } from "react";
import Keyboard from "./Keyboard";
import Row from "./Row";

export type EVALS = "absent" | "present" | "correct";

interface IWordGameContainerProps {
  solution: string;
}

const WordGameContainer: React.FC<IWordGameContainerProps> = ({ solution }) => {
  const [board, setBoard] = useState<string[]>([]);

  const evals = useMemo<EVALS[][]>(() => {
    let result = [];
    board.forEach((row, i) => {
      const rowResult = [];
      for (let i = 0; i < row.length; i++) {
        if (row[i] === solution[i]) {
          rowResult[i] = "correct";
        } else if (solution.includes(row[i])) {
          rowResult[i] = "present";
        } else {
          rowResult[i] = "abset";
        }
      }
      result[i] = rowResult;
    });
    return result;
  }, [board, solution]);

  const rows = useMemo(() => {
    let result = [];
    for (let i = 0; i < 6; i++) {
      result.push(
        <Row
          key={`row-${i + 1}`}
          squares={solution.length}
          value={board[i] || ""}
          evaluations={evals[i] || null}
        />
      );
    }
    return result;
  }, [solution, board, evals]);

  return (
    <div className="flex flex-col w-full max-w-[400px] mx-auto h-full">
      <div className="flex flex-col gap-2 mb-4 flex-1">{rows}</div>
      <Keyboard />
    </div>
  );
};

export default WordGameContainer;
