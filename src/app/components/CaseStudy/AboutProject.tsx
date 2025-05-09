import { SIXSENSE_BACKEND } from "@/constants";
import Image from "next/image";

interface IProps {
  title: string;
  paragraph: string;
  aboutProjectInfo: {
    id: number;
    subtitle: string;
    title: string;
    icon: string;
  }[];
}

const AboutProject = ({ title, paragraph, aboutProjectInfo }: IProps): JSX.Element => {
  return (
    <div className="bg-lightGray">
      <div className="max-w-7xl mx-auto py-14">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-center text-4xl md:text-5xl md:leading-tight font-bold capitalize text-primary">
            {title}
          </h1>
        </div>

        <div className="py-6 px-4 md:px-0 max-w-6xl mx-auto">
          <p>{paragraph}</p>
        </div>
        <div className="px-4 md:px-0 mt-10">
          <div className="flex">
            <div className="w-full max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-x-7 gap-y-5 md:gap-y-0 px-6 md:px-0">
              {aboutProjectInfo.map((info) => {return (
                <div key={info.id} className="max-w-[250px] w-full">
                  <Image
                    src={`${SIXSENSE_BACKEND}${info.icon}`}
                    alt={info.title}
                    width={36}
                    height={36}
                  />
                  <div className="mt-4 space-y-1">
                    <p className="font-plex-sans-thai text-lightGray3 capitalize">
                      {info.subtitle}
                    </p>
                    <h3 className="text-primary uppercase font-semibold">
                      {info.title}
                    </h3>
                  </div>
                </div>
              )})}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProject;
