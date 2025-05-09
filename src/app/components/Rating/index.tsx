// "use client";
import Link from "next/link";
import ClutchWidget from "../Clutchwidget";

interface IProps {
  ratingsInfo: {
    id: number;
    type: string;
    text: string;
    rating: string;
  }[];
  buttonText: string;
}

const Rating = ({ ratingsInfo, buttonText }: IProps): JSX.Element => {
  return (
    <div className="mt-6 px-5 lg:px-0 py-20 max-w-6xl mx-auto bg-slate-50">
      <div className="flex flex-col md:flex-row items-center gap-5 lg:gap-0 justify-around">
        <div className="space-y-5 max-w-[200px] w-full px-8 md:px-0">
          <div className="max-w-[200px] w-full text-center">
            <ClutchWidget />
          </div>
          <Link
            className="hidden md:block md:ml-2"
            href={"https://clutch.co/profile/6sensehq"}
            target="_blank"
          >
            <button className="px-4 py-2 border text-sm text-highlight border-highlight font-semibold">
              {buttonText}
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-2 ">
          {ratingsInfo.map((item, index) => {return (
            <div
              key={item.id}
              className={`flex flex-row md:flex-row ${
                index === 1 || index === 3 ? "text-left" : "text-right"
              } md:text-left md:items-center py-10 gap-3 ${
                index === 0 || index === 1
                  ? "border-b pb-4 md:border-0"
                  : "pt-4"
              } ${
                index === 0 || index === 2
                  ? "flex-row-reverse border-r pr-4 md:border-0"
                  : "pl-4"
              } border-highlight`}
            >
              <div className="flex items-center justify-center font-bold text-xs p-[10px] w-8 h-8 border rounded-full border-highlight">
                {item.rating}
              </div>
              <div className="space-y-1">
                <p className="text-[10px] text-lightGray2">{item.type}</p>
                <h4 className="text-xs text-[#002E48]">{item.text}</h4>
              </div>
            </div>
          )})}
        </div>

        <button className="md:hidden ml-2 px-4 py-2 border text-sm text-highlight border-highlight font-semibold">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Rating;
