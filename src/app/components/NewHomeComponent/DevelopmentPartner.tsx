import devFeature from "@/assets/dev-partner/dev-feature.png";
import logo1 from "@/assets/dev-partner/logo-1.png";
import logo2 from "@/assets/dev-partner/logo-2.svg";
import logo3 from "@/assets/dev-partner/logo-3.svg";
import logo4 from "@/assets/dev-partner/logo-4.svg";
import logo5 from "@/assets/dev-partner/logo-5.svg";
import logo6 from "@/assets/dev-partner/logo-6.svg";
import logo7 from "@/assets/dev-partner/logo-7.png";
import logo8 from "@/assets/dev-partner/logo-8.png";
import Image from "next/image";

const DevelopmentPartner = (): JSX.Element => {
  return (
    <div className="lg:my-12">
      <h1 className="hidden lg:block font-bold text-2xl text-center text-primary lg:mt-16">
        A Development Partner For New Age Startups
      </h1>
      <h1 className="lg:hidden font-bold text-2xl text-center text-primary lg:mt-16 mb-6">
        A Development Partner For <br /> New Age Startups
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-8 lg:gap-4 lg:mt-8 md:px-52 justify-center items-center lg:mb-20">
        <Image
          src={logo1}
          alt="Development Partner"
          width={100}
          height={100}
          className="mx-auto my-4 w-16"
        />
        <Image
          src={logo2}
          alt="Development Partner"
          width={100}
          height={100}
          className="mx-auto my-4"
        />
        <Image
          src={logo3}
          alt="Development Partner"
          width={100}
          height={100}
          className="mx-auto my-4"
        />
        <Image
          src={logo4}
          alt="Development Partner"
          width={100}
          height={100}
          className="mx-auto my-4"
        />
        <Image
          src={logo5}
          alt="Development Partner"
          width={100}
          height={100}
          className="mx-auto my-4"
        />
        <Image
          src={logo6}
          alt="Development Partner"
          width={100}
          height={100}
          className="mx-auto my-4"
        />
        <Image
          src={logo7}
          alt="Development Partner"
          width={100}
          height={100}
          className="mx-auto my-4"
        />
        <Image
          src={logo8}
          alt="Development Partner"
          width={100}
          height={100}
          className="mx-auto my-4 w-14"
        />
      </div>
      <Image
        src={devFeature}
        alt="Development Partner"
        width={1000}
        height={1000}
        className="mx-auto my-12 lg:my-4 px-4"
      />
    </div>
  );
};

export default DevelopmentPartner;
