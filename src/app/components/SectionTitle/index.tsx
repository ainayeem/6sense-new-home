import { ReactNode } from "react";

interface IProps {
  title: ReactNode;
  paragraph?: ReactNode;
}

const SectionTitle = ({ title, paragraph }: IProps): JSX.Element => {
  return (
    <>
      {title}
      {paragraph}
    </>
  );
};

export default SectionTitle;
