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
  servicesFeatures,
  servicesKeyFeatures,
  uiDesignAccordions,
} from "@/data/propsData";

const UIUXService = (): JSX.Element => {
  return (
    <>
      <div>
        <Hero
          achievements={achievements}
          pageName="ui-design"
          imageSrc="/images/services/ui-design/ui-design.png"
          imageAlt="UI Design"
          imageWidth={640}
          imageHeight={427}
          justify="between"
          titlePrimary="UI/UX Design"
          titleSecondary=" Services"
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
                Get productive solutions
              </span>{" "}
              from the diverse in-house UI/UX design team at 6sense.
            </h1>
          }
          features={servicesFeatures}
        />
      </div>

      <div>
        <SectionKeyFeatures
          title={
            <h1
              className="font-plex-sans-thai text-primary 
text-4xl md:text-5xl font-bold capitalize"
            >
              When to use the
              <span className="text-secondary"> Managed Delivery </span>
              model
            </h1>
          }
          servicesKeyFeatures={servicesKeyFeatures}
        />
      </div>

      <div>
        <CallToAction
          pageName="ui-design"
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
          pageName="ui-design"
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
          pageName="ui-design"
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

export default UIUXService;
