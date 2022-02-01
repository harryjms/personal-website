import { EVALS } from "..";

const evaluatedLetters = (
  board: string[],
  evals: EVALS[][]
): { [K: string]: EVALS } => {
  let result = {};
  let letters = [];

  board.forEach((word, wordIndex) => {
    const wordEval = evals[wordIndex];
    if (wordEval) {
      for (let letterIndex = 0; letterIndex < word.length; letterIndex++) {
        const letter = word[letterIndex];
        const letterEval = wordEval[letterIndex];
        if (!letters.includes(letter)) {
          result[letter] = letterEval;
        }
      }
    }
  });

  return result;
};

export default evaluatedLetters;
