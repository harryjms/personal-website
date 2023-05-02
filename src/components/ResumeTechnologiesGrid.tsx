import { PropsWithChildren } from "react";

const ResumeTechnologiesGrid: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    // <div className="grid grid-cols-2 lg:grid-cols-4 print:grid-cols-4 gap-2 print:gap-1 mb-2">
    <div className="flex flex-col">{children}</div>
  );
};

export default ResumeTechnologiesGrid;
