import React, { useMemo } from "react";
import { EVALS } from ".";
import Square from "./Square";

interface IRowProps {
  squares: number;
  value: string;
  evaluations: EVALS[] | null;
}

const Row: React.FC<IRowProps> = ({ squares, value, evaluations }) => {
  const renderRow = useMemo(() => {
    let result = [];
    for (let i = 0; i < squares; i++) {
      result.push(
        <Square
          key={`square-${i}`}
          letter={value[i]}
          evaluation={evaluations ? evaluations[i] : undefined}
        />
      );
    }
    return result;
  }, [squares]);
  return <div className="flex gap-2">{renderRow}</div>;
};

export default Row;
