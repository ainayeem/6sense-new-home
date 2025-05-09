import { ReactNode } from "react";
import SectionTitle from "../SectionTitle";
import TwoColumnLayout from "./TwoCoumnLayout";

interface IFeatureItem {
  title: string;
  items: {
    text: string;
  }[];
}

interface IFeature {
  item: IFeatureItem[];
  imageSrc: string;
  imageAlt: string;
}

interface IFeatures {
  pageName: string;
  title: ReactNode;
  paragraph: string;
  features: IFeature[];
}

const Features = ({ features, title, paragraph, pageName }: IFeatures): JSX.Element => {
  const text = (
    <>
      <p className="max-w-3xl mx-auto font-helvetica py-5 text-blackSecondary">
        {paragraph}
      </p>
    </>
  );

  return (
    <div className="mt-12">
      <div className="px-4 text-center">
        <SectionTitle title={title} paragraph={text} />
      </div>

      {features.map((feature, index) => {return (
        <div key={index} className={`${index === 2 ? "pb-16 gradient" : ""}`}>
          <div className="px-5">
            <TwoColumnLayout
              pageName={pageName}
              features={feature.item}
              imageSrc={feature.imageSrc}
              imageAlt={feature.imageAlt}
              imageOnLeft={index === 1 ? true : false}
            />
          </div>
        </div>
      )})}
    </div>
  );
};

export default Features;
