import ButtonWithCTA from "../ButtonWithCTA";

interface IProps {
  regularTitle: string;
  coloredPartTitle: string;
  subtitle: string;
  imageSrc?: string;
  alt?: string;
  pageName: string;
  hasBg?: boolean;
}

const CallToAction = ({
  regularTitle,
  coloredPartTitle,
  subtitle,
  imageSrc,
  alt,
  pageName,
  hasBg,
}: IProps): JSX.Element => {
  return (
    <div
      className={`${pageName === "home" ? "bg-hero" : ""} ${
        hasBg ? "bg-hero" : ""
      } relative overflow-hidden`}
    >
      <div className="py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-around gap-7 px-4 md:px-0 ">
          <div className="space-y-2">
            <h1 className="px-10 md:px-0 capitalize font-plex-sans-thai text-4xl md:text-5xl font-bold text-center md:text-left">
              <span className="text-primary">{regularTitle}</span>{" "}
              <span className="text-secondary">{coloredPartTitle}</span>
            </h1>
            <p className="font-helvetica text-center md:text-left text-blackSecondary font-normal">
              {subtitle}
            </p>
          </div>
          <div>
            <ButtonWithCTA source={pageName} section="call-to-action" />
          </div>
        </div>
      </div>

      {pageName === "home" && (
        <div className="hidden md:block absolute w-[124px] h-[206px] -bottom-11 right-0 lg:right-20">
          <img src={imageSrc} alt={alt} />
        </div>
      )}
    </div>
  );
};

export default CallToAction;
