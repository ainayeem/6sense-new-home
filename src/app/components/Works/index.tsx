"use client";
import { SIXSENSE_BACKEND } from "@/constants";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";
import GridSkeleton from "../GridSkeleton";
import SectionTitle from "../SectionTitle";

interface IProps {
  subtitle: string;
  pageName: string;
}

const Works = ({ subtitle, pageName }: IProps): JSX.Element => {
  const title = (
    <h1 className="text-primary text-4xl md:text-5xl font-bold">
      Some of our
      <span className="text-secondary"> Partnership Works </span>
    </h1>
  );

  const paragraph = (
    <p
      className={`max-w-5xl mx-auto ${
        pageName === "home" ? "py-4 md:py-1" : "py-5"
      } text-blackSecondary`}
    >
      {subtitle}
    </p>
  );

  const { data, isFetchingNextPage, fetchNextPage, hasNextPage, isFetching } =
    useInfiniteQuery({
      queryKey: ["getCaseStudies"],
      queryFn: async ({ pageParam = 1 }) => {
        const res = await axios.get(
          `${SIXSENSE_BACKEND}/case-studies?page=${pageParam}`,
        );
        return res.data;
      },
      getNextPageParam: (lastPage) => {
        const nextPage = lastPage?.data.currentPage + 1;
        return nextPage <= lastPage?.data.totalPages ? nextPage : undefined;
      },
      refetchOnWindowFocus: false,
      initialPageParam: 1,
    });

  const observerRef = useRef<IntersectionObserver | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = useCallback(() => {
    if (isFetchingNextPage || !hasNextPage) return;

    if (
      triggerRef.current &&
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500
    ) {
      fetchNextPage();
    }
  }, [isFetchingNextPage, hasNextPage, fetchNextPage]);

  useEffect(() => {
    if (isFetchingNextPage || !hasNextPage) return;

    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchNextPage();
      }
    });

    const currentTriggerRef = triggerRef.current;

    if (currentTriggerRef) {
      observerRef.current.observe(currentTriggerRef);
    }

    window.addEventListener("scroll", handleScroll);

    return (): void => {
      if (currentTriggerRef) {
        observerRef.current?.unobserve(currentTriggerRef);
      }
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleScroll, isFetchingNextPage, hasNextPage]);

  return (
    <div className="bg-lightGray">
      <div
        className={`px-5 lg:px-0 ${pageName === "home" ? "py-20" : "py-14"}`}
      >
        <div className="text-center">
          <SectionTitle title={title} paragraph={paragraph} />
        </div>

        {isFetching && !data ? (
          <GridSkeleton />
        ) : (
          <div
            className={`${
              pageName === "home" ? "mt-6" : "mt-6 md:mt-8"
            } max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-x-8 gap-y-4`}
          >
            {data?.pages.map((page) =>
              {return page.data.projects.map((work: any) => {return (
                <Link href={`/case-studies/${work.slug}`} key={work.id}>
                  <div className="bg-white w-[304px] md:w-[362px] h-auto shadow-md">
                    <div className="md:h-[460px]">
                      <Image
                        src={`${SIXSENSE_BACKEND}${work.imageSrc}`}
                        className="w-full"
                        alt={work.slug}
                        width={362}
                        height={460}
                      />
                    </div>
                    <div className="md:h-[90px] p-5">
                      <div className="h-[26px]">
                        <img
                          src={`${SIXSENSE_BACKEND}${work.logo}`}
                          alt={work.appName}
                        />
                      </div>
                      <h3 className="text-primary font-semibold">
                        {work.appName}
                      </h3>
                    </div>
                  </div>
                </Link>
              )})},
            )}
          </div>
        )}

        {/* Trigger for IntersectionObserver */}
        <div ref={triggerRef} className="h-1"></div>

        {isFetchingNextPage && <GridSkeleton />}
      </div>
    </div>
  );
};

export default Works;
