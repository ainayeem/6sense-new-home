import plogo from "@/assets/p-50.png";
import partner from "@/assets/pattern50-founders.png";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Partnership = (): JSX.Element => {
  const features = [
    {
      boldtext: "50,000+",
      text: "Dev Hours delivered for Pattern50.",
    },
    {
      boldtext: "13",
      text: "Experts accelerating 3 startup backlogs.",
    },
    {
      boldtext: "$1.5M",
      text: "Saved on Pattern50 product costs.",
    },
  ];

  return (
    <div className="container">
      <div
        className={`bg-[#faf6f1] max-w-[1040px] 2xl:max-w-[1200px] lg:mx-auto lg:my-36 lg:pl-16 lg:rounded-2xl grid grid-cols-1 lg:grid-cols-2 lg:gap-16 relative justify-end`}
      >
        <Image
          src={plogo}
          alt="Pattern50"
          width={500}
          height={500}
          className="absolute hidden lg:block lg:-top-24 lg:-right-24 h-40 w-40"
        />
        <div className="lg:py-8 py-6 px-6 lg:px-0">
          <h2 className="font-bold text-2xl text-primary lg:mb-8 mb-4">
            Partnership
          </h2>
          <h1 className="font-bold text-4xl lg:hidden leading-11 text-primary">
            Pattern50 Solving
            <br />
            North Carolina Startup Problem
            <br />
            <span className="text-secondary">With 6sense</span>
          </h1>
          <h1 className="font-bold text-4xl hidden lg:block leading-11 text-primary">
            Pattern50 Solving
            <br />
            North Carolina Startup Problem
            <span className="text-secondary"> With 6sense</span>
          </h1>

          <p className="my-5 leading-6 font-normal text-base lg:text-lg">
            6sense works with Pattern50, an NC-based Software firm, led by
            serial investor and long-time CTO Jim Swain.
          </p>

          <div className="space-y-3 lg:space-y-4 leading-6 font-normal text-xs lg:text-lg">
            {features.map((value, index) => {
              return (
                <div
                  key={index}
                  className="flex gap-2 font-normal text-xs items-center"
                >
                  <BadgeCheck className="text-primary" />
                  <p>
                    <span className="font-semibold text-xs">
                      {value.boldtext}
                    </span>{" "}
                    <span className="font-normal text-xs">{value.text}</span>
                    {/* {value.text} */}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="flex gap-3.5 lg:mt-10 mt-4 mb-6 lg:mb-0">
            <Link href="/contact">
              <button className="shq-btn-primary">Book a demo</button>
            </Link>
          </div>
        </div>

        <div className="w-full">
          <Image
            src={partner}
            alt="Partnership"
            width={500}
            height={500}
            className="lg:rounded-r-md w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Partnership;

{
  /* <Image
        src={plogo}
        alt="Pattern50"
        width={500}
        height={500}
        className="h-38 w-34 absolute hidden lg:block lg:-top-20 lg:-right-20"
      /> */
}
