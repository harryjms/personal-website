import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useMemo } from "react";
import { EVALS } from ".";
interface IKeyProps {
  letter: string;
  state?: EVALS;
  onClick: (letter: string) => void;
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
    <button onClick={() => onClick(letter)} className={className}>
      {renderLetter}
    </button>
  );
};
export default Key;
