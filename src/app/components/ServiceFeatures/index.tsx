import { ReactNode } from "react";
import SectionTitle from "../SectionTitle";

interface IProps {
  title: ReactNode;
  features: {
    id: number;
    count: string;
    featureType: string;
    title: string;
    paragraph: string;
  }[];
}

const ServiceFeatures = ({ features, title }: IProps): JSX.Element => {
  return (
    <div className="py-20">
      <div className="px-5 text-center">
        <SectionTitle title={title} />
      </div>

      <div className="mt-[60px] max-w-7xl mx-auto px-4 md:px-0">
        <div className="grid sm:grid-cols-3 place-items-center gap-10 md:gap-14">
          {features.map((feature) => {return (
            <div
              key={feature.id}
              className="max-w-[415px] w-full border-l border-l-primary pl-6 h-[287px] flex items-center"
            >
              <div>
                <h2 className="font-plex-sans-thai text-4xl font-light text-primary">
                  {feature.count}
                </h2>
                <p className="text-textSecondary">{feature.featureType}</p>
                <div className="my-5 border-t border-t-lightBorder w-[262px]"></div>
                <h1 className="uppercase font-bold text-textSecondary text-[22px]">
                  {feature.title}
                </h1>
                <p className="max-w-[356px] w-full py-2">{feature.paragraph}</p>
              </div>
            </div>
          )})}
        </div>
      </div>
    </div>
  );
};

export default ServiceFeatures;
