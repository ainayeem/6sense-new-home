"use client";
import { feedbackProcess } from "@/data/propsData";
import { IItemInfo } from "../../../../types/type";
import Feedback from "../Feedback";
import SectionTitle from "../SectionTitle";

interface IProps {
  keyfactorIcons: {
    id: number;
    icon: string;
    alt: string;
  }[];
}

const KeyFactors = ({ keyfactorIcons }: IProps): JSX.Element => {
  const ourFeedbackProcess: IItemInfo[] = feedbackProcess ?? []
  const title = (
    <>
      <h1
        className="font-plex-sans-thai text-primary 
text-4xl md:text-5xl font-bold"
      >
        <span className="text-secondary">Key Factors </span>
        In 6sense Process
      </h1>
    </>
  );

  const paragraph = (
    <>
      <p className="font-helvetica py-5 text-blackSecondary">
        Ensuring Success through Quality Assurance, Timely Delivery,
        Scalability, and Collaboration.
      </p>
    </>
  );
  return (
    <>
      <div className="mt-6 lg:my-28">
        <div className="px-4 text-center">
          <SectionTitle title={title} paragraph={paragraph} />
          <div className="flex flex-wrap items-center justify-center gap-4">
            {keyfactorIcons.map((ico) => {return (
              <div key={ico.id}>
                <img src={ico.icon} alt={ico.alt} />
              </div>
            )})}
          </div>
        </div>

        <Feedback
          paragraph="We interviewed different providers and selected 6sense
                        because of two main factors: their proven track record
                        of success developing businesses, and the leaderships
                        passion and commitment to building great products."
          quoteLogo="/images/quote.png"
          logo="/images/itcan1.png"
          name="MD Alayob"
          designation="CEO, Itcan Inc."
          ourProcess={ourFeedbackProcess}
          hasShadow={true}
        />
      </div>
    </>
  );
};

export default KeyFactors;
