"use client";
import { SIXSENSE_BACKEND } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import Image from "next/image";
import { ReactNode } from "react";
import { ITeamInfo } from "../../../../types/type";
import TeamSkeleton from "../GridSkeleton/TeamSkeleton";
import SectionTitle from "../SectionTitle";

const OurTeam = ({
  title,
  paragraph,
}: {
  title: ReactNode;
  paragraph: string;
}): JSX.Element => {
  const { data: teamData, isFetching } = useQuery({
    queryKey: ["getTeam"],
    queryFn: async () => {
      const res: AxiosResponse<{data: ITeamInfo[]}> = await axios.get(`${SIXSENSE_BACKEND}/team-gallery/all`);
      return res.data;
    },
    refetchOnWindowFocus: false,
  });

  const teamInfo = teamData?.data || [];

  const text = (
    <>
      <p className="max-w-3xl mx-auto font-helvetica py-5 text-blackSecondary">
        {paragraph}
      </p>
    </>
  );

  return (
    <div className="my-14">
      <div className="px-4 text-center">
        <SectionTitle title={title} paragraph={text} />
      </div>

      {isFetching && !teamData ? (
        <TeamSkeleton />
      ) : (
        <div
          className={`md:mt-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-x-8 gap-y-4`}
        >
          {teamInfo.map((info: any) => {return (
            <div
              key={info.id}
              className="bg-white space-y-2 shadow-custom-drop"
            >
              <Image
                src={`${SIXSENSE_BACKEND}${info.image}`}
                className="w-[304px] md:w-[362px] h-[382px] md:h-[454px] object-cover object-center"
                alt={info.title}
                width={362}
                height={454}
              />
              <h3 className=" text-blackSecondary font-semibold p-4">
                {info.title}
              </h3>
            </div>
          )})}
        </div>
      )}
    </div>
  );
};

export default OurTeam;
