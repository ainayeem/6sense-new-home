import Image from "next/image";
import { ReactNode } from "react";
import SectionTitle from "../SectionTitle";

const OurGoal = ({
  title,
  paragraph,
  goalInfo,
  imageSrc,
  pageName,
}: {
  title: ReactNode;
  paragraph: string;
  imageSrc: string;
  pageName?: string;
  goalInfo: {
    id: number;
    title: string;
    icon?: string;
    text: string;
  }[];
}): JSX.Element => {
  const text = (
    <>
      <p className="max-w-3xl mx-auto font-helvetica py-5 text-blackSecondary">
        {paragraph}
      </p>
    </>
  );

  return (
    <div
      className={`py-10 md:py-20 ${
        pageName === "values" ? "" : " bg-lightGray"
      }`}
    >
      <div className="px-4 text-center">
        <SectionTitle title={title} paragraph={text} />
      </div>

      <div className="px-4 md:px-0 my-10 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center ">
          <div className="flex-1 flex-grow">
            <Image src={imageSrc} alt="Team" width={400} height={400} />
          </div>
          <div className="flex-1 flex-grow">
            {goalInfo.map((goal) => {return (
              <div className="flex gap-2 space-y-4" key={goal.id}>
                <div className="flex-shrink-0">
                  {goal.icon && (
                    <div>
                      <Image
                        className={`${pageName === "values" ? "mt-5" : "mt-4"}`}
                        src={goal.icon}
                        alt="Goal"
                        width={pageName === "values" ? 24 : 36}
                        height={pageName === "values" ? 24 : 36}
                      />
                    </div>
                  )}
                </div>

                <div className="space-y-1">
                  <h3 className="text-primary font-bold text-2xl">
                    {goal.title}
                  </h3>
                  <p className="text-blackSecondary">{goal.text}</p>
                </div>
              </div>
            )})}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurGoal;
