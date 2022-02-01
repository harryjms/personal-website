import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import Stats from "./Stats";
import { loadProgress, saveProgress } from "./helpers/gameProgress";
import Keyboard from "./Keyboard";
import Row from "./Row";

export type EVALS = "absent" | "present" | "correct";

interface IWordGameContainerProps {
  solution: string;
}

export enum GAME_STATE {
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETE = "COMPLETE",
  LOST = "LOST",
}

interface IGameContext {
  solution: string;
  board: string[];
  evals: EVALS[][];
  evaluate: () => void;
  handleLetter: (letter: string) => void;
  handleBackspace: () => void;
  gameState: GAME_STATE;
}

const GameContext = createContext<IGameContext>({
  solution: "",
  board: [],
  evals: [],
  evaluate: () => {},
  handleLetter: () => {},
  handleBackspace: () => {},
  gameState: GAME_STATE.IN_PROGRESS,
});

export const useGameContext = () => useContext(GameContext);

const WordGameContainer: React.FC<IWordGameContainerProps> = ({ solution }) => {
  const [board, setBoard] = useState<string[]>([]);
  const [evals, setEval] = useState<EVALS[][]>([]);
  const [showStats, setShowStats] = useState(false);
  const [gameState, setGameState] = useState<GAME_STATE>(
    GAME_STATE.IN_PROGRESS
  );

  // Load from saved progress
  useEffect(() => {
    const data = loadProgress();
    if (data) {
      const { board, evaluations, gameState, solution: savedSolution } = data;
      if (savedSolution === solution) {
        setBoard(board);
        setEval(evaluations);
        setGameState(gameState);
      }
    }
  }, [solution]);

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

  // Check for game completion
  useEffect(() => {
    let isComplete = false;
    evals.forEach((row) => {
      if (!isComplete) {
        const rowLength = row.length;
        let correctLetters = 0;
        row.forEach((evaluation) => {
          if (evaluation === "correct") correctLetters++;
        });

        if (rowLength === correctLetters) isComplete = true;
      }
    });
    if (isComplete) setGameState(GAME_STATE.COMPLETE);
  }, [evals]);

  // Game completed
  useEffect(() => {
    if (gameState !== GAME_STATE.IN_PROGRESS) {
      setShowStats(true);
    }
  }, [gameState]);

  const rows = useMemo(() => {
    let result = [];
    for (let i = 0; i < 6; i++) {
      result.push(
        <Row
          key={solution}
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

  // Save progress
  useEffect(() => {
    saveProgress({ board, evaluations: evals, gameState, solution });
  }, [board, evals, gameState, solution]);

  return (
    <GameContext.Provider
      value={{
        solution,
        board,
        evals,
        evaluate,
        handleLetter,
        handleBackspace,
        gameState,
      }}
    >
      <div className="relative flex flex-col w-full max-w-[400px] mx-auto h-full">
        <div className="flex flex-col gap-2 mb-4 flex-1">{rows}</div>
        <Keyboard />
        <Stats show={showStats} />
      </div>
    </GameContext.Provider>
  );
};

export default WordGameContainer;
