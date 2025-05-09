"use client";
import { ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";
import Button from "../Button";

const JoinTeam = (): JSX.Element => {
  return (
    <div className="my-12">
      <div className="relative px-4 md:px-0 max-w-6xl mx-auto h-[120px] md:h-auto">
        <img
          className="hidden md:block"
          src={"/images/team/jointeam.png"}
          alt="Join Team"
        />
        <div className="flex justify-center items-center">
          <div className="absolute top-2 md:top-20 flex flex-col justify-center items-center space-y-3 md:space-y-5">
            <h1
              className="font-plex-sans-thai text-primary 
text-3xl md:text-5xl font-bold"
            >
              <span className="text-secondary">Join </span>
              Our Team
            </h1>
            <div>
              <Link
                href={"https://6sensehq.freshteam.com/jobs"}
                target="_blank"
              >
                <Button
                  icon={<ArrowRight size={20} />}
                  text="See Current Opening"
                  className="font-plex-sans-thai w-full md:w-[257px] bg-secondary text-white font-bold py-4 px-4 text-xs md:text-sm"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinTeam;
