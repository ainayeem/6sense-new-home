import Image from "next/image";
import { useState } from "react";
import Button from "../Button";
import { CircleNotch } from "@phosphor-icons/react";

interface IProps {
  regularTitle: string;
  coloredPartTitle: string;
  icon: string;
  imageSrc: string;
  alt: string;
  mistakes: {
    id: number;
    text: string;
  }[];
  resourceUrl: string;
}

const Mistakes = ({
  regularTitle,
  coloredPartTitle,
  icon,
  imageSrc,
  alt,
  mistakes,
  resourceUrl,
}: IProps): JSX.Element => {

  const [loading, setLoading] = useState(false);

  const handleDownload = async (): Promise<void> => {
    try {
      setLoading(true);
      const response = await fetch(resourceUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch the file");
      }

      // Create a Blob from the response data
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      // Create an anchor element and trigger the download
      const a = document.createElement("a");
      a.href = url;
      a.download = resourceUrl.split("/").pop() || "download.pdf"; // Extract file name from the URL
      document.body.appendChild(a);
      a.click();

      // Clean up the anchor element after the download
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="my-20 px-5 md:px-20 max-w-6xl mx-auto md:gap-x-20 flex flex-col-reverse md:flex-row justify-center">
      <div className="w-full md:w-1/2">
        <div>
          <h1 className="font-bold text-primary text-4xl">
            <span className="text-secondary">{coloredPartTitle}</span>{" "}
            {regularTitle}
          </h1>

          {mistakes.map((guide) => {
            return (
              <div key={guide.id} className="space-y-2 mt-4">
                <div className="flex gap-2">
                  <img src={icon} alt={alt} className="w-6 h-6" />
                  <p>{guide.text}</p>
                </div>
              </div>
            )
          })}

          <div className="mt-5">
            <div onClick={handleDownload} className="mt-5">
              <Button
                loading={loading}
                icon={<CircleNotch color="#fff" weight="bold" size={22} className="animate-spin" />}
                position="center"
                text={"Download"}
                className="w-full md:w-[348px] bg-secondary text-white font-bold px-5 py-4"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Image src={imageSrc} alt="Buyer Guide" width={535} height={326} />
      </div>
    </div>
  );
};

export default Mistakes;
