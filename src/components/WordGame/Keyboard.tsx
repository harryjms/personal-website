import React, { useMemo } from "react";
import { EVALS, useGameContext } from ".";
import evaluatedLetters from "./helpers/evaluatedLetters";
import Key from "./Key";

const Keyboard = () => {
  const { solution, board, evals, evaluate } = useGameContext();
  const keys = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["↵", "z", "x", "c", "v", "b", "n", "m", "←"],
  ];

  const letterEvaluations = useMemo(
    () => evaluatedLetters(board, evals),
    [board, evals]
  );

  const keyStates: { key: string; state: EVALS | null }[][] = useMemo(() => {
    return keys.map((row) =>
      row.map<{ key: string; state: EVALS | null }>((key) => {
        return {
          key,
          state: letterEvaluations[key],
        };
      })
    );
  }, [solution, board, evals, keys]);

  const handleKeyPress = (letter: string) => {
    switch (letter) {
      case "↵":
        evaluate();
        break;
    }
  };

  return (
    <div className="flex flex-col gap-1">
      {keyStates.map((row, ri) => (
        <div key={`row-${ri}`} className="flex gap-1">
          {ri == 1 && <div className="flex-[0.5]" />}
          {row.map((key) => {
            const state = undefined;
            return (
              <Key
                letter={key.key}
                key={key.key}
                onClick={handleKeyPress}
                state={key.state}
              />
            );
          })}
          {ri == 1 && <div className="flex-[0.5]" />}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
