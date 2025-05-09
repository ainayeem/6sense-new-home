import Image from "next/image";
import { ReactNode } from "react";
import SectionTitle from "../SectionTitle";

interface IProps {
  title: ReactNode;
  servicesKeyFeatures: {
    id: number;
    title: string;
    paragraph: string;
    features?: string[];
  }[];
}

const SectionKeyFeatures = ({ servicesKeyFeatures, title }: IProps): JSX.Element => {
  return (
    <div className="py-9 md:py-16 bg-gradient-to-b from-[#F8FFE9] to-[#F8FFE980]/10">
      <div className="px-5 text-center">
        <SectionTitle title={title} />
      </div>

      <div className="px-4 md:px-0 mt-8 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-5">
          {servicesKeyFeatures.map((feature) => {return (
            <div
              key={feature.id}
              className="max-w-[410px] w-full shadow-custom pl-8 py-8 pr-5 bg-white"
            >
              <h2 className="text-textSecondary font-bold text-[22px] capitalize">
                {feature.title}
              </h2>
              <p className="text-textSecondary pt-3">{feature.paragraph}</p>
              {feature.features && (
                <div className="mt-2">
                  {feature.features.map((ft, index) => {return (
                    <ul key={index} className="flex items-center gap-1">
                      <div className="flex-shrink-0">
                        <div>
                          <Image
                            src="/images/verified.svg"
                            alt="Icon"
                            width={20}
                            height={20}
                          />
                        </div>
                      </div>
                      <li className="text-textSecondary font-plex-sans-thai">
                        {ft}
                      </li>
                    </ul>
                  )})}
                </div>
              )}
            </div>
          )})}
        </div>
      </div>
    </div>
  );
};

export default SectionKeyFeatures;
