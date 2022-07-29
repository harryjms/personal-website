import { PropsWithChildren } from "react";

type CVSectionProps = PropsWithChildren<{ title: string }>;

const CVSection: React.FC<CVSectionProps> = ({ children, title }) => {
  return (
    <section aria-labelledby={title + "-section"}>
      <h3 id={title + "-section"}>{title}</h3>
      {children}
    </section>
  );
};

export default CVSection;
