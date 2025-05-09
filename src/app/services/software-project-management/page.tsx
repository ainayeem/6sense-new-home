"use client";
import Advantages from "@/app/components/Advantages";
import CallToAction from "@/app/components/CallToAction";
import Feedback from "@/app/components/Feedback";
import Hero from "@/app/components/Hero";
import ServiceFeatures from "@/app/components/ServiceFeatures";
import SectionKeyFeatures from "@/app/components/ServicesKeyFeatures";
import {
  feedbackProcess,
  managementAccordions,
  managementAchievements,
  managementFeatures,
  managementServicesKeyFeatures,
} from "@/data/propsData";

const SoftwareProjectManagement = (): JSX.Element => {
  return (
    <>
      <div>
        <Hero
          achievements={managementAchievements}
          pageName="software-project-management"
          imageSrc="/images/services/development/mobileApplication.png"
          imageAlt="Sotware Project Management"
          imageWidth={640}
          imageHeight={427}
          justify="between"
          titlePrimary="Expert Software "
          titleSecondary=" Project Management Services"
          breakBetweenTitle={true}
        />
      </div>

      <div>
        <ServiceFeatures
          title={
            <h1
              className="max-w-5xl mx-auto font-plex-sans-thai text-primary 
text-4xl md:text-5xl font-bold capitalize leading-tight"
            >
              Expert{" "}
              <span className="text-secondary leading-tight">
                Software Testing{" "}
              </span>
              Services to Ensure Quality at Every Stage
            </h1>
          }
          features={managementFeatures}
        />
      </div>

      <div>
        <SectionKeyFeatures
          title={
            <h1
              className="font-plex-sans-thai text-primary 
text-4xl md:text-5xl font-bold capitalize"
            >
              Software
              <span className="text-secondary"> Project Management </span>
              Services
            </h1>
          }
          servicesKeyFeatures={managementServicesKeyFeatures}
        />
      </div>

      <div>
        <CallToAction
          pageName="software-project-management"
          regularTitle="Curious to Learn"
          coloredPartTitle="More?"
          subtitle="Get in touch with us to know more about the timeline & budget"
          imageSrc="/images/6senseImage.png"
          alt="6sense"
          hasBg={true}
        />
      </div>

      <div className="mt-20">
        <Advantages
          pageName="software-project-management"
          title={
            <h1
              className="font-plex-sans-thai text-primary 
text-4xl md:text-5xl font-bold"
            >
              Our
              <span className="text-secondary"> Proven </span>
              Process
            </h1>
          }
          paragraph="The success of our project management services is driven by our disciplined, process-oriented approach, ensuring that every project is executed with precision and excellence."
          accordionItems={managementAccordions}
          imageSrc="/images/services/ui-design/uiuxAdvantage.png"
          alt="Benifit of Choosing"
        />
      </div>

      <div>
        <Feedback
          paragraph="We interviewed different providers and selected 6sense
                        because of two main factors: their proven track record
                        of success developing businesses, and the leaderships
                        passion and commitment to building great products."
          quoteLogo="/images/quote.png"
          logo="/images/itcan1.png"
          name="AL"
          designation="CEO, Itcan Inc."
          ourProcess={feedbackProcess}
          hasShadow={true}
        />
      </div>

      <div>
        <CallToAction
          pageName="software-project-management"
          regularTitle="Curious to Learn"
          coloredPartTitle="More?"
          subtitle="Get in touch with us to know more about the timeline & budget"
          imageSrc="/images/6senseImage.png"
          alt="6sense"
        />
      </div>
    </>
  );
};

export default SoftwareProjectManagement;
