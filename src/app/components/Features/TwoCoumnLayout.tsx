
interface IFeatureItem {
  text: string;
}

interface IFeature {
  title: string;
  items: IFeatureItem[];
}

interface IFeaturesProps {
  features: IFeature[];
  imageSrc: string;
  imageAlt: string;
  imageOnLeft?: boolean;
  pageName: string;
}

const TwoColumnLayout = ({
  features,
  imageSrc,
  imageAlt,
  imageOnLeft = false,
}: IFeaturesProps): JSX.Element => {
  return (
    <div
      className={`mt-4  max-w-7xl mx-auto flex flex-col-reverse lg:flex-row lg:items-center lg:gap-10 ${
        imageOnLeft ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className="lg:w-1/2">
        {features.map(({ title, items }, index) => {return (
          <div key={index} className={index > 0 ? "mt-8" : ""}>
            <h3 className="font-plex-sans-thai text-3xl text-primary font-bold">
              {title}
            </h3>
            <div className="mt-4 space-y-4">
              {items.map(({ text }, idx) => {return (
                <div key={idx} className="flex items-start gap-2">
                  <img
                    className="mt-[2px]"
                    src="/images/verified.webp"
                    alt="Verified"
                  />
                  <p className="font-helvetica text-justify">{text}</p>
                </div>
              )})}
            </div>
          </div>
        )})}
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <img src={imageSrc} alt={imageAlt} />
      </div>
    </div>
  );
};

export default TwoColumnLayout;
