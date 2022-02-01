import React, { useLayoutEffect, useMemo, useRef } from "react";
import { EVALS } from ".";

interface ISquareProps {
  letter?: string;
  evaluation?: EVALS;
}

const Square: React.FC<ISquareProps> = ({ letter, evaluation }) => {
  const squareRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const setHeight = () => {
      if (squareRef.current) {
        squareRef.current.style.height = squareRef.current.clientWidth + "px";
      }
    };
    window.addEventListener("resize", setHeight);
    setHeight();

    return () => {
      window.removeEventListener("resize", setHeight);
    };
  }, []);

  const className = useMemo(() => {
    const base = [
      "flex items-center justify-center w-full border-2 border-gray-400 rounded-sm text-2xl font-bold transition transition-color",
    ];

    switch (evaluation) {
      case "correct":
        base.push("border-green-600 bg-green-500");
        break;
      case "absent":
        base.push("border-gray-400 bg-gray-700 text-gray-400");
        break;
      case "present":
        base.push("border-yellow-600 bg-yellow-500");
        break;
    }

    return base.filter((a) => a).join(" ");
  }, [evaluation]);

  return (
    <div className={className} ref={squareRef}>
      {letter?.toUpperCase()}
    </div>
  );
};

export default Square;
