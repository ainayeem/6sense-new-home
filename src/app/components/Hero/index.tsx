import Image from "next/image";
import ButtonWithCTA from "../ButtonWithCTA";
import Stats, { IStatInfo } from "../Stats";

interface IAchievement {
  id: number;
  image: string;
  alt: string;
  contentStart: string;
  contentHighlight: string;
  contentEnd: string;
}

interface IHeroProps {
  titlePrimary: string;
  titleSecondary: string;
  breakBetweenTitle?: boolean;
  subtitle?: string;
  achievements: IAchievement[];
  statsInfo?: IStatInfo[];
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  imageCaption?: string;
  classNames?: string;
  justify: string;
  pageName: string;
}

const Hero = ({
  titlePrimary,
  titleSecondary,
  breakBetweenTitle,
  subtitle,
  achievements,
  statsInfo,
  imageSrc,
  imageWidth,
  imageHeight,
  imageAlt,
  imageCaption,
  classNames,
  justify,
  pageName,
}: IHeroProps): JSX.Element => {
  return (
    <div className="bg-hero px-3">
      <div
        className={`max-w-7xl mx-auto ${
          pageName === "home" ? "py-16" : "py-16 md:py-28"
        } px-5 md:px-0 ${classNames}`}
      >
        <div
          className={`flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 items-center justify-${justify}`}
        >
          {/* Content Section */}
          <div>
            <h1 className="font-plex-sans-thai text-center lg:text-left font-bold text-4xl md:text-5xl leading-tight">
              <span className="text-primary">{titlePrimary}</span>
              {breakBetweenTitle && <br />}
              <span className="text-secondary">{titleSecondary}</span>
            </h1>
            <h3 className="text-center lg:text-left text-primary text-[26px] md:text-[28px] mt-6 md:mt-0 font-bold">
              {subtitle}
            </h3>

            <div className="mt-5 flex justify-center md:justify-start">
              <div className="space-y-1">
                {achievements.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="flex gap-1 md:gap-2 font-helvetica"
                    >
                      <div className="flex-shrink-0">
                        <Image
                          loading="eager"
                          src={item.image}
                          alt={item.alt}
                          width={22}
                          height={22}
                          className={` w-[22px] h-[22px] flex-shrink-0 ${
                            pageName === "home" ? "" : ""
                          }`}
                        />
                      </div>
                      <p>
                        {item.contentStart}{" "}
                        <span className="text-[#252B42] font-bold">
                          {item.contentHighlight}
                        </span>{" "}
                        {item.contentEnd}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              className={`block md:hidden my-5 md:my-0 w-full ${
                pageName === "case-studies" && "custombgImage"
              } ${pageName === "values" && "custombgImage"} ${pageName === "partners" && "custombgImage"} ${pageName === "team" && "custombgImage"}`}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
              />
              <p className="text-textSecondary uppercase text-center text-sm md:text-base font-medium">
                {imageCaption}
              </p>
            </div>

            <div className={`text-center lg:text-left py-5`}>
              {/* Button With CTA */}
              <ButtonWithCTA source={pageName} section="hero" />
            </div>
          </div>

          {/* Image Section */}
          <div
            className={`hidden md:block ${
              pageName === "case-studies" && "custombgImage"
            } ${pageName === "partners" && "custombgImage"} ${pageName === "values" && "custombgImage"} ${pageName === "team" && "custombgImage"}
            `}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
            />
            <p className="text-textSecondary uppercase text-center text-sm md:text-base font-medium">
              {imageCaption}
            </p>
          </div>
        </div>

        <div className={`${pageName === "home" && "pt-12"}`}>
          <Stats statsInfo={statsInfo ? statsInfo : []} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
