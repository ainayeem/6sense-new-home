"use client";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { useState } from "react";

interface IAccordionItem {
  title: string;
  content: string;
}

interface IAccordionProps {
  items: IAccordionItem[];
}

const Accordion = ({ items }: IAccordionProps): JSX.Element => {
  const [openIndex, setOpenIndex] = useState(0); // Default open first tab

  const toggleAccordion = (index: number): void => {
    setOpenIndex(index === openIndex ? -1 : index); // Close if same index, else open new
  };

  return (
    <div className="">
      {items.map((item, index) => {return (
        <div key={index} className="px-2 border-t border-black">
          <button
            className="font-plex-sans-thai text-left flex justify-between items-center w-full p-4 font-bold text-lg text-primary"
            onClick={() => { toggleAccordion(index); }}
          >
            {item.title}
            <div>
              {openIndex === index ? (
                <CaretUp color="black" weight="bold" />
              ) : (
                <CaretDown color="black" weight="bold" />
              )}
            </div>
          </button>
          <div
            className={`overflow-hidden ${
              openIndex === index ? "max-h-screen p-4 mb-3" : "max-h-0 p-0"
            }`}
          >
            <div className="font-helvetica text-textSecondary text-justify">
              {item.content}
            </div>
          </div>
        </div>
      )})}
    </div>
  );
};

export default Accordion;
