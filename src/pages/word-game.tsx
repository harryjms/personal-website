import React from "react";
import dynamic from "next/dynamic";
const WordGameContainer = dynamic(() => import("../components/WordGame"), {
  ssr: false,
});

const WordGame = () => {
  return (
    <main>
      <WordGameContainer solution="words" />
    </main>
  );
};

export default WordGame;
