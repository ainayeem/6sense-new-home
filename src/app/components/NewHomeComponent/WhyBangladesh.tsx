import whyBD from "@/assets/Why Bangladesh_ - Sal Khan.png";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import styles from "./Hero.module.css";
import Link from "next/link";

const WhyBangladesh = (): JSX.Element => {
  const features = [
    "50% of the population under 26 (One of the youngest workforces)",
    "20K+ CS graduates entering the market yearly",
    "Top-tier universities producing high-IQ talent",
  ];

  return (
    <div className="container">
      <div
        className={`${styles.map} max-w-[1200px] lg:mx-auto lg:my-36 my-6 lg:pl-16 lg:rounded-2xl lg:grid lg:grid-cols-2 lg:gap-16 relative hidden`}
      >
        <div className="py-8 px-6 lg:px-0">
          <h1 className="font-bold text-4xl lg:text-5xl leading-11 lg:leading-15 text-primary">
            Why
            <span className="text-secondary"> Bangladesh?</span>
          </h1>
          <h2 className="font-bold text-2xl text-primary mb-8 mt-4">
            The Future of Tech Talent
          </h2>

          <p className="my-5 leading-6 font-normal text-base lg:text-lg">
            Growing South-east Asian country Bangladesh with more than 165
            million people, offers a young, skilled, and cost-effective tech
            workforce—perfect for scaling startups efficiently.
          </p>

          <div className="space-y-3 lg:space-y-4 leading-6 font-normal text-xs lg:text-lg">
            {features.map((text, index) => {
              return (
                <div key={index} className="flex gap-2 items-center">
                  <BadgeCheck />
                  <p>{text}</p>
                </div>
              );
            })}
          </div>

          <div className="flex gap-3.5 mt-10">
            <Link href="/book-demo">
              <button className="shq-btn-primary">Book a demo</button>
            </Link>
          </div>
        </div>

        <div className="w-full my-auto">
          <Image
            src={whyBD}
            alt="Partnership"
            width={500}
            height={500}
            className="object-cover px-6 lg:px-0 lg:w-[416px]"
          />
        </div>
      </div>

      {/* mobile */}
      <div
        className={` max-w-[1200px] lg:mx-auto lg:my-36 my-6 lg:pl-16 lg:rounded-2xl grid grid-cols-1 lg:grid-cols-2 lg:gap-16 relative lg:hidden`}
      >
        <div className="py-8 px-6 lg:px-0">
          <h1 className="font-bold text-4xl lg:text-5xl leading-11 lg:leading-15 text-primary">
            Why
            <span className="text-secondary"> Bangladesh?</span>
          </h1>
          <h2 className="font-bold text-2xl text-primary mb-8 mt-4">
            The Future of Tech Talent
          </h2>

          <p className="my-5 leading-6 font-normal text-base lg:text-lg">
            Growing South-east Asian country Bangladesh with more than 165
            million people, offers a young, skilled, and cost-effective tech
            workforce—perfect for scaling startups efficiently.
          </p>

          <div className="space-y-3 lg:space-y-4 leading-6 font-normal text-xs lg:text-lg">
            {features.map((text, index) => {
              return (
                <div key={index} className="flex gap-2 items-center">
                  <BadgeCheck />
                  <p>{text}</p>
                </div>
              );
            })}
          </div>

          <div className="flex gap-3.5 mt-10">
            <Link href="/book-demo">
              <button className="shq-btn-primary">Book a demo</button>
            </Link>
          </div>
        </div>

        <div className="w-full my-auto">
          <Image
            src={whyBD}
            alt="Partnership"
            width={500}
            height={500}
            className="object-cover px-6 lg:px-0 lg:w-[416px]"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyBangladesh;
