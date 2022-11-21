import { useMemo } from "react";

interface ResumeTimelineItemProps {
  jobTitle: string;
  company: string;
  dates: string;
  first?: boolean;
  last?: boolean;
}

const ResumeTimelineItem: React.FC<
  React.PropsWithChildren<ResumeTimelineItemProps>
> = ({ jobTitle, company, dates, children, first, last }) => {
  const leftLine = useMemo(() => {
    if (first) {
      return "top-[10px] -bottom-[5px]";
    }
    if (last) {
      return "-top-[10px] bottom-[5px] rounded-sm";
    }
    return "-top-[10px] -bottom-[5px]";
  }, [first, last]);

  return (
    <li className="relative pl-2 print:pl-0">
      <div
        className={
          "print:hidden absolute -left-[4px] " +
          leftLine +
          " w-[4px] bg-slate-500 dark:bg-white"
        }
      />
      <div className="print:hidden absolute rounded-full top-[8px] -left-[7px] circle bg-blue-500 w-[10px] h-[10px] block" />
      <div>
        <div className="font-bold">
          {jobTitle}, {company}
        </div>
        <div className="text-sm">{dates}</div>
      </div>
      <p className="text-justify">{children}</p>
    </li>
  );
};

export default ResumeTimelineItem;
