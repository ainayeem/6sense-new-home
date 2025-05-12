"use client";
import training from "@/assets/training.png";
import Image from "next/image";
import { useState } from "react";

const steps = [
  "Partnering with Bangladesh's top universities",
  "Intensive 4-month training",
  "Hands-on live projects before deployment",
];

const RetainTalent = (): JSX.Element => {
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = (): void => {
    setShowVideo(!showVideo);
  };

  return (
    <div className="container">
      <div className="max-w-[1200px] lg:mx-auto lg:my-36 my-16 lg:rounded-2xl grid grid-cols-1 lg:grid-cols-2 lg:gap-16">
        {/* Desktop Image - Clickable */}
        <div
          className="w-full hidden lg:block my-auto cursor-pointer"
          onClick={toggleVideo}
        >
          <Image
            src={training}
            alt="Training Process"
            width={500}
            height={500}
            className="lg:rounded-tl-4xl lg:rounded-tr-xl lg:rounded-br-4xl lg:rounded-bl-xl w-full object-cover"
          />
        </div>

        <div className="py-8 px-6 lg:px-0">
          <h1 className="font-bold text-4xl lg:text-5xl leading-11 lg:leading-15 text-primary">
            How We Source, Train, and
            <span className="text-secondary"> Retain Talent</span>
          </h1>

          <p className="my-5 leading-6 font-normal text-base lg:text-lg">
            We don&apos;t just hire developers; we create them in a structured,
            proven process:
          </p>

          <div className="flex flex-col space-y-2">
            {steps.map((text, index) => {
              return (
                <div key={index} className="flex items-center gap-2">
                  <h1
                    className="text-primary font-bold text-4xl mb-4
                  "
                  >
                    {index + 1}.
                  </h1>
                  <p className="text-base lg:text-lg mb-4">{text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Image - Clickable */}
        <div className="w-full lg:hidden px-4">
          <Image
            onClick={toggleVideo}
            src={training}
            alt="Training Process"
            width={500}
            height={500}
            className="w-full object-cover cursor-pointer rounded-xl"
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
    </div>
  );
};

export default RetainTalent;
