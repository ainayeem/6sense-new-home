import SectionTitle from "../SectionTitle";

interface IProps {
  impactStats: {
    id: number;
    icon: string;
    count: string;
    alt: string;
    text: string;
  }[];
}

const Impact = ({ impactStats }: IProps): JSX.Element => {
  const title = (
    <>
      <h1 className="px-9 text-primary text-4xl md:text-5xl text-center font-bold">
        <span className="text-secondary">Impact </span>
        We&apos;ve Made
      </h1>
    </>
  );

  const paragraph = (
    <>
      <p className="py-4 px-4 text-blackSecondary text-center">
        Proven Success with Stats and Client Reviews
      </p>
    </>
  );

  return (
    <div className="bg-lightGray">
      <div className="py-16">
        <div className="text-center">
          <SectionTitle title={title} paragraph={paragraph} />
        </div>
        <div className="mt-6 flex flex-col md:flex-row gap-5 md:gap-10 items-center md:items-start md:justify-center">
          {impactStats.map((item) => {return (
            <div key={item.id}>
              <div className="flex justify-center items-center w-[302px] md:w-[230px] h-[204px] bg-white">
                <div className="flex justify-center items-center flex-col space-y-2">
                  <img src={item.icon} alt={item.alt} />
                  <h2 className="font-bold text-dark text-[40px]">
                    {item.count}
                  </h2>
                  <p className="text-dimmed font-bold">{item.text}</p>
                </div>
              </div>
            </div>
          )})}
        </div>
      </div>
    </div>
  );
};

export default Impact;
