import React from "react";

interface IStatBoxProps {
  caption: string;
  number: number;
}

const StatBox: React.FC<IStatBoxProps> = ({ caption, number }) => (
  <div className="flex flex-col justify-center items-center">
    <div className="text-2xl font-bold">{number}</div>
    <div className="text-center text-sm">{caption}</div>
  </div>
);

export default StatBox;
