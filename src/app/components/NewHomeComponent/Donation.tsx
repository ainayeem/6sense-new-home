import donate1 from "@/assets/Donation Image - 1.png";
import donate2 from "@/assets/Donation Image - 2.png";
import Image from "next/image";

const Donation = (): JSX.Element => {
  return (
    <div className="container">
      <div
        className={`max-w-[1200px] lg:mx-auto lg:my-36 my-12 lg:pl-16 lg:rounded-2xl grid grid-cols-1 lg:grid-cols-2 lg:gap-8`}
      >
        <div className="w-full gap-4 hidden lg:flex">
          <Image
            src={donate1}
            alt="Partnership"
            width={500}
            height={500}
            className="w-[50%] h-full"
          />
          <Image
            src={donate2}
            alt="Partnership"
            width={500}
            height={500}
            className="w-[50%] h-[80%]"
          />
        </div>
        <div className="py-8 px-6 lg:p-8 bg-[#faf6f1]">
          <h1 className="font-bold text-4xl lg:text-4xl leading-10 lg:leading-15 text-primary">
            For every hire you do, we donate the first months 50% salary to a
            nonprofit.
          </h1>

          <p className="my-5 leading-6 font-normal text-base lg:text-lg">
            Which goes into making the lives of young Bangladeshi children
            better.
          </p>
        </div>

        <div className="w-full flex gap-4 lg:gap-4 lg:hidden p-4">
          <Image
            src={donate1}
            alt="Partnership"
            width={500}
            height={500}
            className="w-[50%] h-48"
          />
          <Image
            src={donate2}
            alt="Partnership"
            width={500}
            height={500}
            className="w-[50%] h-[80%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Donation;
