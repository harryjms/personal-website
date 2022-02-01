import React, { useEffect, useMemo, useState } from "react";
import { useGameContext } from ".";

const Share = () => {
  const { evals } = useGameContext();
  const [show, setShow] = useState(false);

  const sharetext = useMemo(() => {
    return evals
      .map((row) =>
        row
          .map((evald) => {
            switch (evald) {
              case "correct":
                return "🟩";
              case "present":
                return "🟨";
              case "absent":
                return "⬜️";
            }
          })
          .join(" ")
      )
      .join("\n");
  }, [evals]);

  const handleShare = () => {
    if (
      navigator.clipboard.writeText(
        `Word game ${evals.length}/6\n${sharetext}\n\n${window.location.href}`
      )
    ) {
      setShow(true);
    }
  };

  useEffect(() => {
    let timer;
    if (show) {
      timer = setTimeout(() => {
        setShow(false);
      }, 4000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [show]);

  return (
    <>
      {show ? (
        <div className="absolute bottom-10 left-10 right-10 bg-green-500 text-white p-4 rounded-md">
          Results copied to clipboard
        </div>
      ) : null}
      <button className="w-full bg-purple-500" onClick={handleShare}>
        Share
      </button>
    </>
  );
};

export default Share;
