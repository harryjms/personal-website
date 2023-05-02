import { PropsWithChildren } from "react";

const ResumeTechnologiesGroup: React.FC<
  PropsWithChildren<{ name: string }>
> = ({ name, children }) => {
  return (
    <div className="p-2 mb-2 rounded-md print:mb-0 print:p-0">
      <div className="font-bold mb-1 print:hidden">{name}</div>
      <div className="grid grid-cols-2 lg:grid-cols-4 print:grid-cols-4 gap-2 print:gap-1 mb-2">
        {children}
      </div>
    </div>
  );
};

export default ResumeTechnologiesGroup;
