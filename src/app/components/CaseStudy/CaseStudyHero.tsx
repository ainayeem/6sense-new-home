import { SIXSENSE_BACKEND } from "@/constants";
import Image from "next/image";

interface IProps {
  coloredPartTitle: string;
  regularTitle: string;
  info: {
    id: number;
    icon: string;
    alt: string;
    title: string;
    subtitle: string;
  }[];
}

const CaseStudyHero = ({ coloredPartTitle, regularTitle, info }: IProps): JSX.Element => {
  return (
    <div className="px-4 md:px-0">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-center text-4xl md:text-5xl md:leading-tight font-bold capitalize">
          <span className="text-secondary">{coloredPartTitle} </span>{" "}
          <span className="text-primary">{regularTitle}</span>
        </h1>
      </div>

      <div className="px-4 md:px-0 max-w-5xl mx-auto mt-20">
        <div className="flex justify-center">
          <div className="w-full flex flex-col md:flex-row gap-7 md:justify-between">
            {info.map((item, index) => {return (
              <div key={index} className="max-w-[250px] w-full">
                <Image
                  src={`${SIXSENSE_BACKEND}${item.icon}`}
                  alt={item.alt}
                  width={36}
                  height={36}
                />
                <div className="mt-4 space-y-1">
                  <h3 className="text-primary uppercase font-semibold text-lg">
                    {item.title}
                  </h3>
                  <p className="font-plex-sans-thai text-lightGray3">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            )})}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyHero;
