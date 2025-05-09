import Accordion from "../Accordion";

interface IProps {
  regularTitle: string;
  coloredPartTitle: string;
  faqAccordionItems: {
    title: string;
    content: string;
  }[];
}
const FAQ = ({ faqAccordionItems, regularTitle, coloredPartTitle }: IProps): JSX.Element => {
  return (
    <div className="mt-12 upperGradient">
      <div className="max-w-5xl px-5 lg:px-0 mx-auto py-24">
        <h1 className="text-primary text-4xl md:text-5xl font-bold text-center">
          {regularTitle}
          <span className="text-secondary"> {coloredPartTitle}</span>
        </h1>
        <div className="mt-10">
          <Accordion items={faqAccordionItems} />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
