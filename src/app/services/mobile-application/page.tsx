"use client";
import Advantages from "@/app/components/Advantages";
import CallToAction from "@/app/components/CallToAction";
import Feedback from "@/app/components/Feedback";
import Hero from "@/app/components/Hero";
import ServiceFeatures from "@/app/components/ServiceFeatures";
import SectionKeyFeatures from "@/app/components/ServicesKeyFeatures";
import {
  achievements,
  feedbackProcess,
  servicesKeyFeatures,
  uiDesignAccordions,
  webApplicationFeatures,
} from "@/data/propsData";

const MobileApplication = (): JSX.Element => {
  return (
    <>
      <div className="">
        <Hero
          achievements={achievements}
          pageName="mobile-application"
          imageSrc="/images/services/development/mobileApplication.png"
          imageAlt="UI Design"
          imageWidth={640}
          imageHeight={427}
          justify="between"
          titlePrimary="Premier Custom"
          titleSecondary=" Software Development Services"
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
                {" "}
                Expert custom software
              </span>{" "}
              development services bring your idea to life.
            </h1>
          }
          features={webApplicationFeatures}
        />
      </div>

      <div>
        <SectionKeyFeatures
          title={
            <h1
              className="font-plex-sans-thai text-primary 
text-4xl md:text-5xl font-bold capitalize"
            >
              <span className="text-secondary"> Custom Software </span>
              Development Services
            </h1>
          }
          servicesKeyFeatures={servicesKeyFeatures}
        />
      </div>

      <div>
        <CallToAction
          pageName="mobile-application"
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
          pageName="mobile-application"
          title={
            <h1
              className="font-plex-sans-thai text-primary 
text-4xl md:text-5xl font-bold"
            >
              <span className="text-secondary">Benefits </span>
              of 6sense Managed Delivery
            </h1>
          }
          paragraph="6sense Managed Delivery framework will put your business in the right position to benefit from a range of important and far-reaching advantages."
          accordionItems={uiDesignAccordions}
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
          pageName="mobile-application"
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

export default MobileApplication;
