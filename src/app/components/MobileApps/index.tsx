import SectionTitle from "../SectionTitle";

interface IProps {
  pageName: string;
  subtitle: string;
  appsInfo: {
    id: number;
    title: string;
    imageSrc: string;
  }[];
}

const MobileApps = ({ appsInfo, subtitle, pageName }: IProps): JSX.Element => {
  const title = (
    <>
      {pageName === "home" && (
        <h1 className="text-primary text-4xl md:text-5xl font-bold">
          Mobile Apps
          <span className="text-secondary"> Success Stories</span>
        </h1>
      )}
      {pageName === "case-studies" && (
        <h1 className="text-primary text-4xl md:text-5xl font-bold">
          Some of our
          <span className="text-secondary"> Mobile App Works</span>
        </h1>
      )}
    </>
  );
  const paragraph = (
    <>
      <p className={`max-w-5xl mx-auto py-2 md:py-1 text-blackSecondary`}>
        {subtitle}
      </p>
    </>
  );

  return (
    <div className="mt-6 lg:my-14 px-5 lg:px-0">
      <div className="text-center">
        <SectionTitle title={title} paragraph={paragraph} />
      </div>
      <div className="mt-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-x-5 gap-y-5 place-items-center">
          {appsInfo.map((app) => {return (
            <div
              key={app.id}
              className="relative bg-lightGray min-w-[167px] min-h-[217px]"
            >
              <img className="px-16 pt-5" src={app.imageSrc} alt={app.title} />
              <div className="mt-2 border-t py-4 border-slate-300 p-0 text-center">
                <h3 className="text-primary font-semibold">{app.title}</h3>
              </div>

              {pageName === "case-studies" && (
                <span className="absolute top-0 right-0 font-plex-sans-thai font-bold text-white px-2 py-1 bg-secondary text-xs">
                  Mobile App
                </span>
              )}
            </div>
          )})}
        </div>
      </div>
    </div>
  );
};

export default MobileApps;
