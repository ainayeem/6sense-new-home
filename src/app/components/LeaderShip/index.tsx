import Image from "next/image";
import { ReactNode } from "react";
import SectionTitle from "../SectionTitle";

const LeaderShip = ({
  title,
  paragraph,
}: {
  title: ReactNode;
  paragraph: string;
}): JSX.Element => {
  const text = (
    <>
      <p className="max-w-3xl mx-auto font-helvetica py-5 text-blackSecondary">
        {paragraph}
      </p>
    </>
  );

  return (
    <div className="bg-hero py-20">
      <div className="px-4 text-center">
        <SectionTitle title={title} paragraph={text} />
      </div>

      <div className="px-4 md:px-0 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-center items-center gap-0 md:gap-20">
          <div className="max-w-[363px] w-full my-12">
            <div>
              <Image
                src={"/images/team/ceo.png"}
                alt="CEO"
                width={363}
                height={325}
              />
            </div>
            <div className="text-center">
              <div className="space-y-2 mt-6 mb-4">
                <h2 className="capitalize font-bold text-primary text-2xl">
                  nasif siddiqui
                </h2>
                <p className="text-primary font-plex-sans-thai text-lg">
                  <span className="uppercase">cEO</span>-{" "}
                  <span className="capitalize">6sense Technologies</span>
                </p>
              </div>
              <p className="text-blackSecondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&appos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div className="max-w-[363px] w-full my-12">
            <div>
              <Image
                src={"/images/team/cto.png"}
                alt="CEO"
                width={363}
                height={325}
              />
            </div>
            <div className="text-center">
              <div className="space-y-2 mt-6 mb-4">
                <h2 className="capitalize font-bold text-primary text-2xl">
                  Ahsan Aasim
                </h2>
                <p className="text-primary font-plex-sans-thai text-lg">
                  <span className="uppercase">cto</span>-{" "}
                  <span className="capitalize">6sense Technologies</span>
                </p>
              </div>
              <p className="text-blackSecondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&appos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderShip;
