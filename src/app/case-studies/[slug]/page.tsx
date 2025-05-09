"use client";

import CallToAction from "@/app/components/CallToAction";
import AboutProject from "@/app/components/CaseStudy/AboutProject";
import CaseStudyFeedback from "@/app/components/CaseStudy/CaseStudyFeedback";
import CaseStudyHero from "@/app/components/CaseStudy/CaseStudyHero";
import KeyFunctionalities from "@/app/components/CaseStudy/KeyFunctionalities";
import ProjectOverview from "@/app/components/CaseStudy/ProjectOverview";
import RelatedCases from "@/app/components/CaseStudy/RelatedCases";
import Result from "@/app/components/CaseStudy/Result";
import Solution from "@/app/components/CaseStudy/Solution";
import HeroSkeleton from "@/app/components/HeroSkeleton";
import { SIXSENSE_BACKEND } from "@/constants";
import { worksData } from "@/data/worksData";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { useParams } from "next/navigation";
import { ICaseStudyInfo } from "../../../../types/type";

const CaseStudyDetail = (): JSX.Element => {
  const { slug } = useParams();

  const { data: caseStudyDetail, isFetching: caseStudyLoading } = useQuery({
    queryKey: ["getCaseStudyDetails", slug],
    queryFn: async () => {
      const res: AxiosResponse<ICaseStudyInfo> = await axios.get(
        `https://6sense-backend-v2.vercel.app/case-studies/${slug}`
      );
      return res.data;
    },
    refetchOnWindowFocus: false,
    enabled: !!slug,
  });

  const caseStudyInformation = caseStudyDetail?.data?.details;
  const clientFeedback = caseStudyInformation?.clientFeedback;

  return (
    <div>
    {caseStudyLoading ? (
      <HeroSkeleton />
    ) : (
      <>
        {/* main content */}
        <div className="bg-hero py-28">
          <CaseStudyHero
            coloredPartTitle={caseStudyInformation?.coloredPartTitle ?? ""} 
            regularTitle={caseStudyInformation?.regularTitle ?? ""} 
            info={caseStudyInformation?.heroInfo ?? []} 
          />
        </div>

        <div>
          <ProjectOverview
            title="Project Overview"
            overviewParagraphs={caseStudyInformation?.overviewParagraphs ?? []} 
            overviewImage={`${SIXSENSE_BACKEND}${caseStudyInformation?.overviewImage ?? ""}`} 
          />
        </div>

        <div>
          <AboutProject
            aboutProjectInfo={caseStudyInformation?.aboutInfo ?? []} 
            title="About Project"
            paragraph={caseStudyInformation?.aboutParagraph ?? ""} 
          />
        </div>

        <div>
          <Solution
            solutionImage={`${SIXSENSE_BACKEND}${caseStudyInformation?.solution?.solutionImage ?? ""}`} 
            solutionPoints1={caseStudyInformation?.solution?.solutionsPoints1 ?? []} 
            solutionPoints2={caseStudyInformation?.solution?.solutionsPoints2 ?? []} 
            icon="/images/case-studies/keypointIcon.svg"
            title="Solution"
            subtitle={caseStudyInformation?.solution?.description ?? ""} 
          />
        </div>

        <div>
          <KeyFunctionalities
            keyPoints1={caseStudyInformation?.keyFeature?.keyFeaturesPoints1 ?? []} 
            keyPoints2={caseStudyInformation?.keyFeature?.keyFeaturesPoints2 ?? []} 
            icon="/images/case-studies/keypointIcon.svg"
            title="Key functionality"
            subtitle={caseStudyInformation?.keyFeature?.description ?? ""} 
            keyFunctionalityImage={`${SIXSENSE_BACKEND}${caseStudyInformation?.keyFeature?.keyFeaturesImage ?? ""}`} 
          />
        </div>

        <div>
          <Result
            resultPoints1={caseStudyInformation?.result?.resultsPoints1 ?? []} 
            resultPoints2={caseStudyInformation?.result?.resultsPoints2 ?? []} 
            icon="/images/case-studies/keypointIcon.svg"
            title="Project results"
            subtitle={caseStudyInformation?.result?.description ?? ""} 
          />
        </div>

        {clientFeedback &&
          clientFeedback?.feedback &&
          clientFeedback?.clientNameAndDesignation && (
            <div>
              <CaseStudyFeedback
                clientImage={
                  clientFeedback?.clientImage
                    ? clientFeedback?.clientImage
                    : "/images/case-studies/man.png"
                }
                feedback={`"${clientFeedback?.feedback ?? ""}"`} 
                nameWithDesignation={clientFeedback?.clientNameAndDesignation ?? ""} 
              />
            </div>
          )}

        <div>
          <RelatedCases title="Related cases" worksInfo={worksData ?? []} />
        </div>

        <div>
          <CallToAction
            pageName="case-study-detail"
            regularTitle="Curious to Learn"
            coloredPartTitle="More?"
            subtitle="Get in touch with us to know more about the timeline & budget"
          />
        </div>
      </>
    )}
</div>

  );
};

export default CaseStudyDetail;
