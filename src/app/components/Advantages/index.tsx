import { ReactNode } from "react";
import Accordion from "../Accordion";
import SectionTitle from "../SectionTitle";

interface IProps {
  title: ReactNode;
  paragraph: string;
  accordionItems: {
    title: string;
    content: string;
  }[];
  imageSrc: string;
  alt: string;
  pageName: string;
}

const Advantages = ({
  accordionItems,
  imageSrc,
  alt,
  title,
  paragraph,
  pageName,
}: IProps): JSX.Element => {
  const textInfo = (
    <>
      <p className="max-w-3xl mx-auto font-helvetica md:py-1 py-4 text-blackSecondary">
        {paragraph}
      </p>
    </>
  );
  return (
    <div className="my-9">
      <div className="px-[17px] text-center">
        <SectionTitle title={title} paragraph={textInfo} />
      </div>
      <div className="my-10 px-4 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-10">
          <div className={`${pageName === "services" ? "mt-4" : ""}`}>
            <Accordion items={accordionItems} />
          </div>
          <div>
            <img src={imageSrc} alt={alt} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
