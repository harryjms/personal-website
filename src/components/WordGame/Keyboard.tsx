import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useMemo } from "react";
import { EVALS } from ".";

interface IKeyProps {
  letter: string;
  state?: EVALS;
  onClick: () => void;
}
const Key: React.FC<IKeyProps> = ({ letter, state, onClick }) => {
  const renderLetter = useMemo(() => {
    switch (letter) {
      case "↵":
        return "ENTER";
      case "←":
        return <FontAwesomeIcon icon={faBackspace} />;
      default:
        return letter;
    }
  }, [letter]);

  const className = useMemo(() => {
    const base = [
      "h-[58px] flex items-center justify-center w-full bg-gray-500 capitalize font-bold rounded-sm",
    ];
    if (letter === "↵") {
      base.push("flex-[1.5] text-[12px]");
    }
    if (letter === "←") {
      base.push("flex-[1.5] px-4");
    }

    switch (state) {
      case "absent":
        base.push("opacity-50");
        break;
      case "correct":
        base.push("bg-green-500");
        break;
      case "present":
        base.push("bg-yellow-500");
        break;
    }
    return base.filter((a) => a).join(" ");
  }, [letter, state]);

  return (
    <button onClick={onClick} className={className}>
      {renderLetter}
    </button>
  );
};

const Keyboard = () => {
  const keys = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["↵", "z", "x", "c", "v", "b", "n", "m", "←"],
  ];
  return (
    <div className="flex flex-col gap-1">
      {keys.map((row, ri) => (
        <div key={`row-${ri}`} className="flex gap-1">
          {ri == 1 && <div className="flex-[0.5]" />}
          {row.map((key) => (
            <Key letter={key} key={key} onClick={console.log} />
          ))}
          {ri == 1 && <div className="flex-[0.5]" />}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
