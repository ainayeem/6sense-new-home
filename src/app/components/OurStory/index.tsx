import { ReactNode } from "react";
import SectionTitle from "../SectionTitle";

const OurStory = ({
  title,
  paragraph,
}: {
  title: ReactNode;
  paragraph: string;
}): JSX.Element => {
  const text = (
    <>
      <p className="max-w-3xl mx-auto font-helvetica py-5 text-blackSecondary">
        {paragraph}
      </p>
    </>
  );

  const storyInNumbersInfo = [
    { id: 1, count: "7", text: "Years in Business" },
    { id: 2, count: "50+", text: "SUCCESSFULL PROJECTS" },
    { id: 2, count: "120+", text: "Our satisfied customers" },
    // { id: 2, count: "1.2M", text: "SOCIAL FLOWERS" },
  ];
  return (
    <div className="my-12">
      <div className="px-4 text-center">
        <SectionTitle title={title} paragraph={text} />
      </div>

      <div className="px-4 md:px-0 my-10 max-w-6xl mx-auto">
        <div className="grid grid-cosl-1 md:grid-cols-3 place-items-center gap-y-10 md:gap-x-10">
          {storyInNumbersInfo.map((info) => {return (
            <div key={info.id} className="flex items-center gap-4">
              <h2 className="font-plex-sans-thai text-[64px] font-light text-primary">
                {info.count}
              </h2>
              <div className="w-[90px] h-[30px]">
                <p className="text-primary uppercase font-bold text-[11px]">
                  {info.text}
                </p>
              </div>
            </div>
          )})}
        </div>
      </div>
    </div>
  );
};

export default OurStory;
