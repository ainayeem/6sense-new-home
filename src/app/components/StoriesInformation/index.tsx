"use client";
import { ArrowCircleRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const StoriesInformation = (): JSX.Element => {
  return (
    <div className="my-20 px-4 md:px-0">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 place-items-center">
        <div className="bg-hero max-w-[354px] h-[202px] w-full py-7 px-14 md:px-20 flex justify-center items-center">
          <h2 className="text-primary text-3xl md:text-4xl text-center leading-snug">
            <span className="font-thin capitalize">Coming together is </span>
            <span className="font-bold uppercase">beginning</span>
          </h2>
        </div>
        <div className="bg-secondary max-w-[354px] h-[202px] w-full py-7 px-20 text-center flex justify-center items-center">
          <Link href={"/case-studies"}>
            <div className="flex flex-col justify-center items-center space-y-3">
              <h4 className="text-white text-center leading-snug max-w-[110px]">
                Checkout our Success Stories
              </h4>
              <ArrowCircleRight className="text-white" size={22} />
            </div>
          </Link>
        </div>
        <div className="bg-hero max-w-[354px] h-[202px] w-full py-7 px-14 md:px-20 flex justify-center items-center">
          <h2 className="text-primary text-3xl md:text-4xl text-center leading-snug">
            <span className="font-thin capitalize">Working together is </span>
            <span className="font-bold uppercase">success</span>
          </h2>
        </div>

        <div className="bg-primary max-w-[354px] h-[202px] w-full py-7 px-20 text-center flex justify-center items-center">
          <Link href={"/case-studies"}>
            <div className="flex flex-col justify-center items-center space-y-3">
              <h4 className="text-white text-center leading-snug max-w-[110px]">
                Checkout our Projects
              </h4>
              <ArrowCircleRight className="text-white" size={22} />
            </div>
          </Link>
        </div>

        <div className="bg-customSilver max-w-[354px] h-[202px] w-full py-7 px-14 md:px-20 flex justify-center items-center">
          <h2 className="text-primary text-3xl md:text-4xl text-center leading-snug">
            <span className="font-thin capitalize">Keeping together is </span>
            <span className="font-bold uppercase">Progress</span>
          </h2>
        </div>

        <div className="bg-primary max-w-[354px] h-[202px] w-full py-7 px-20 text-center flex justify-center items-center">
          <Link href={"/case-studies"}>
            <div className="flex flex-col justify-center items-center space-y-3">
              <h4 className="text-white text-center leading-snug max-w-[110px]">
                Checkout our Case Studies
              </h4>
              <ArrowCircleRight className="text-white" size={22} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StoriesInformation;
