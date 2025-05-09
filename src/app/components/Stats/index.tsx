import ClutchWidget from "../Clutchwidget";

export interface IStatInfo {
  id: number;
  stat: string;
  icon: string;
  alt: string;
  text: string;
}

interface IStatsProps {
  statsInfo: IStatInfo[];
}

const Stats = ({ statsInfo }: IStatsProps): JSX.Element => {
  return (
    <div className="max-w-5xl w-full mx-auto">
      <div className="flex justify-center">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:justify-items-center lg:justify-items-start">
          {statsInfo.map((info, index) => {return (
            <div className="w-full flex" key={info.id}>
              <div className="flex gap-3 w-auto md:w-full">
                <div className="">
                  <img
                    className={`${index !== 0 ? "w-7 md:w-full" : ""}`}
                    src={info.icon}
                    alt={info.alt}
                  />
                </div>
                <div>
                  <h2 className="font-bold text-dark text-2xl md:text-3xl">
                    {info.stat}
                  </h2>
                  <p className="text-sm md:text-base font-medium text-dimmed">
                    {info.text}
                  </p>
                </div>
              </div>
            </div>
          )})}
          {statsInfo.length > 0 && (
            <div className="w-full flex lg:justify-end">
              <ClutchWidget />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stats;
