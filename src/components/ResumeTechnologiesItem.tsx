import React, { useMemo } from "react";

import { ResumeGroups } from "../pages/resume";

interface ResumeTechnologiesItemProps {
  image?: string;
  name: string;
  group: ResumeGroups;
  time: string;
  doubleWidth?: boolean;
}

const ResumeTechnologiesItem: React.FC<ResumeTechnologiesItemProps> = ({
  image,
  name,
  group,
  time,
  doubleWidth,
}) => {
  const groupColor = useMemo(() => {
    switch (group) {
      case ResumeGroups.ui:
        return "bg-purple-400 dark:bg-purple-800 text-white";
      case ResumeGroups.api:
        return "bg-blue-400 dark:bg-blue-800 text-white";
      case ResumeGroups.devops:
        return "bg-orange-400 dark:bg-orange-800 text-white";
      case ResumeGroups.tooling:
        return "bg-red-400 dark:bg-red-800 text-white";
      default:
        return "bg-green-400 dark:bg-green-800 text-white";
    }
  }, [group]);

  return (
    <div
      className={
        "flex flex-col items-center print:items-start justify-center p-2 print:p-0 bg-gray-100 dark:bg-slate-800 print:bg-transparent rounded-md font-bold text-sm text-center print:text-left" +
        (doubleWidth ? " col-span-2" : "")
      }
    >
      {image ? (
        <img src={image} className="print:hidden h-[32px] my-1" />
      ) : null}
      {name}
      <div className="text-gray-400 font-normal text-xs print:mb-1">
        {time} experience
      </div>
      <div
        className={`hidden text-[0.7em] uppercase font-normal top-0 left-0 rounded-full px-[8px] py-[1px] ${groupColor}`}
      >
        {group}
      </div>
    </div>
  );
};

export default ResumeTechnologiesItem;
