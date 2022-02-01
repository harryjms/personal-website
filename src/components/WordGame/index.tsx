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
  handleLetter: (letter: string) => void;
  handleBackspace: () => void;
}

const GameContext = createContext<IGameContext>({
  solution: "",
  board: [],
  evals: [],
  evaluate: () => {},
  handleLetter: () => {},
  handleBackspace: () => {},
});

export const useGameContext = () => useContext(GameContext);

const WordGameContainer: React.FC<IWordGameContainerProps> = ({ solution }) => {
  const [board, setBoard] = useState<string[]>([]);
  const [evals, setEval] = useState<EVALS[][]>([]);

  const guessIndex = useMemo(() => evals.length, [evals]);

  const evaluate = useCallback(() => {
    let result: EVALS[][] = [];
    if (board[guessIndex]?.length === solution.length) {
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
    }
  }, [board, guessIndex, solution]);

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

  const handleLetter = useCallback(
    (letter: string) => {
      if (/[A-Za-z]/.test(letter)) {
        setBoard((state) => {
          if (state[guessIndex] && state[guessIndex].length === solution.length)
            return state;
          let newBoard = [...state];
          let guess = newBoard[guessIndex] || "";
          newBoard[guessIndex] = guess + letter;
          return newBoard;
        });
      }
    },
    [solution, guessIndex]
  );

  const handleBackspace = useCallback(() => {
    setBoard((state) => {
      let newBoard = [...state];
      let guess = newBoard[guessIndex];
      newBoard[guessIndex] = guess.slice(0, -1);

      return newBoard;
    });
  }, [guessIndex]);

  return (
    <GameContext.Provider
      value={{
        solution,
        board,
        evals,
        evaluate,
        handleLetter,
        handleBackspace,
      }}
    >
      <div className="flex flex-col w-full max-w-[400px] mx-auto h-full">
        <div className="flex flex-col gap-2 mb-4 flex-1">{rows}</div>
        <Keyboard />
      </div>
    </GameContext.Provider>
  );
};

export default WordGameContainer;
