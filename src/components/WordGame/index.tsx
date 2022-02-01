import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import Keyboard from "./Keyboard";
import Row from "./Row";

export type EVALS = "absent" | "present" | "correct";

interface IWordGameContainerProps {
  solution: string;
}

interface IGameContext {
  solution: string;
  board: string[];
  evals: EVALS[][];
  evaluate: () => void;
}

const GameContext = createContext<IGameContext>({
  solution: "",
  board: [],
  evals: [],
  evaluate: () => {},
});

export const useGameContext = () => useContext(GameContext);

const WordGameContainer: React.FC<IWordGameContainerProps> = ({ solution }) => {
  const [board, setBoard] = useState<string[]>([]);
  const [evals, setEval] = useState<EVALS[][]>([]);

  const evaluate = useCallback(() => {
    let result: EVALS[][] = [];
    board.forEach((word) => {
      let wordResult = [];
      for (let i = 0; i < word.length; i++) {
        if (word[i] === solution[i]) {
          wordResult.push("correct");
        } else if (solution.includes(word[i])) {
          wordResult.push("present");
        } else {
          wordResult.push("absent");
        }
      }
      result.push(wordResult);
    });

    setEval(result);
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
    <GameContext.Provider value={{ solution, board, evals, evaluate }}>
      <div className="flex flex-col w-full max-w-[400px] mx-auto h-full">
        <div className="flex flex-col gap-2 mb-4 flex-1">{rows}</div>
        <Keyboard />
      </div>
    </GameContext.Provider>
  );
};

export default WordGameContainer;
