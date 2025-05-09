"use client";
import Advantages from "@/app/components/Advantages";
import CallToAction from "@/app/components/CallToAction";
import Feedback from "@/app/components/Feedback";
import Hero from "@/app/components/Hero";
import ServiceFeatures from "@/app/components/ServiceFeatures";
import SectionKeyFeatures from "@/app/components/ServicesKeyFeatures";
import {
  feedbackProcess,
  tesingAchievements,
  testingAccordions,
  testingFeatures,
  testingServicesKeyFeatures,
} from "@/data/propsData";

const SoftwareTesting = (): JSX.Element => {
  return (
    <>
      <div>
        <Hero
          achievements={tesingAchievements}
          pageName="software-testing"
          imageSrc="/images/services/development/mobileApplication.png"
          imageAlt="UI Design"
          imageWidth={640}
          imageHeight={427}
          justify="between"
          titlePrimary="World-Class Software"
          titleSecondary=" Testing Services"
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
              <span className="text-secondary leading-tight">
                Expert Software Testing
              </span>{" "}
              Services to Ensure Quality at Every Stage
            </h1>
          }
          features={testingFeatures}
        />
      </div>

      <div>
        <SectionKeyFeatures
          title={
            <h1
              className="font-plex-sans-thai text-primary 
text-4xl md:text-5xl font-bold capitalize"
            >
              <span className="text-secondary">Software Testing </span>
              Services
            </h1>
          }
          servicesKeyFeatures={testingServicesKeyFeatures}
        />
      </div>

      <div>
        <CallToAction
          pageName="software-testing"
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
          pageName="software-testing"
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
          paragraph="The success of our testing services is driven by our rigorous, process-oriented approach."
          accordionItems={testingAccordions}
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
          pageName="software-testing"
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

export default SoftwareTesting;
