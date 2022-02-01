import React from "react";
import dynamic from "next/dynamic";
const WordGameContainer = dynamic(() => import("../components/WordGame"), {
  ssr: false,
});

const WordGame = ({ solution }) => {
  return (
    <main>
      <WordGameContainer solution={solution} />
    </main>
  );
};

export async function getServerSideProps() {
  return { props: { solution: "words" } };
}

export default WordGame;
