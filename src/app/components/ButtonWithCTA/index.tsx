"use client";
import Link from "next/link";
import Button from "../Button";

interface IProps {
  source: string;
  section: string;
}

const ButtonWithCTA = ({ source, section }: IProps): JSX.Element => {
  return (
    <>
      <Link href={`/contact?source=${source}&section=${section}`}>
        <Button
          text="Get In Touch"
          className="w-full lg:w-[348px] bg-secondary text-white font-bold px-5 py-4"
        />
      </Link>
      <div className="w-full mt-2 flex gap-2 justify-center lg:justify-normal items-center">
        <div className="flex gap-1 items-center justify-center ">
          <img src="/images/calendericon.png" alt="Calender" />
          <div className="flex gap-2 items-center">
            <h4 className="text-primary font-bold text-base md:text-lg text-center">
              <span className="font-normal">Or, </span>{" "}
              <Link
                href={"https://meet.brevo.com/6sense-technologies"}
                target="_blank"
              >
                <span className="underline">Schedule a Free Consultation</span>
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonWithCTA;
