"use client";

import { useState } from "react";
import logo1 from "@/assets/dev-partner/logo-1.png";
import logo2 from "@/assets/dev-partner/logo-2.svg";
import logo3 from "@/assets/dev-partner/logo-3.svg";
import logo4 from "@/assets/dev-partner/logo-4.svg";
import logo5 from "@/assets/dev-partner/logo-5.svg";
import logo6 from "@/assets/dev-partner/logo-6.svg";
import logo7 from "@/assets/dev-partner/logo-7.png";
import logo8 from "@/assets/dev-partner/logo-8.png";
import devFeature from "@/assets/dev-partner/dev-feature.png";
import Image from "next/image";
import playButton from "@/assets/play-button.png";

const DevelopmentPartner = (): JSX.Element => {
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = (): void => {
    setShowVideo(!showVideo);
  };

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

      {/* Clickable image that opens the modal */}
      <div className="mx-auto my-12 lg:my-4 px-4 relative">
        <Image
          src={devFeature}
          alt="Play Video"
          width={1000}
          height={1000}
          className="mx-auto"
        />
        <Image
          onClick={toggleVideo}
          src={playButton}
          alt="Play Video"
          width={100}
          height={100}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 lg:w-20 cursor-pointer"
        />
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={toggleVideo}
              className="absolute -top-10 right-0 text-white text-2xl"
            >
              ×
            </button>
            <div className="aspect-w-16 aspect-h-9 w-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/8guP6F56TPk?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px]"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DevelopmentPartner;
