import {
  featureItemsForPartnership,
  partnersAchievements,
} from "@/data/propsData";
import CallToAction from "../components/CallToAction";
// import CaseStudyFeedback from "../components/CaseStudy/CaseStudyFeedback";
import Expertise from "../components/Expertise";
import Features from "../components/Features";
import Hero from "../components/Hero";
import SuccessStories from "../components/SuccessStories";

const Partners = (): JSX.Element => {
  return (
    <>
      <div>
        <Hero
          titlePrimary="Partner with"
          titleSecondary="6sense Technologies"
          breakBetweenTitle={true}
          subtitle="Your Gateway to Top Talent and Expertise"
          achievements={partnersAchievements}
          imageSrc="/images/partnership.jpg"
          imageWidth={500}
          imageHeight={400}
          imageAlt="6sense Team"
          justify="between"
          pageName="partners"
        />
      </div>

      <div>
        <Features
          pageName="partners"
          features={featureItemsForPartnership}
          title={
            <h1
              className="font-plex-sans-thai text-primary 
text-4xl md:text-5xl font-bold px-[17px]"
            >
              How the
              <span className="text-secondary"> Partnership </span>
              Works
            </h1>
          }
          paragraph="At 6sense Technologies, we offer flexible partnership models tailored to suit your needs and ensure a smooth collaboration. Whether you want us to work under your brand or prefer to collaborate with us on projects where we handle the client relationship, we’ve got you covered. Here’s how our partnership works:"
        />
      </div>

      <div>
        <Expertise
          title={
            <h1
              className="font-plex-sans-thai text-primary 
text-4xl md:text-5xl font-bold px-[17px]"
            >
              Our
              <span className="text-secondary"> Expertise</span>
            </h1>
          }
        />
      </div>

      <div>
        <CallToAction
          pageName="partners"
          regularTitle="Curious to Learn"
          coloredPartTitle="More?"
          subtitle="Get in touch with us to know more about the timeline & budget"
          imageSrc="/images/6senseImage.png"
          alt="6sense"
          hasBg={true}
        />
      </div>

      <div>
        <SuccessStories
          title={
            <h1
              className="font-plex-sans-thai text-primary 
text-4xl md:text-5xl font-bold px-[17px]"
            >
              <span className="text-secondary">Success </span>
              Stories
            </h1>
          }
          paragraph="At 6sense Technologies, we pride ourselves on building strong, successful partnerships with other software development companies."
        />
      </div>

      {/* Client Feedback */}
      {/* <div>
        <CaseStudyFeedback
          clientImage="/images/case-studies/man.png"
          feedback={`“Partnering with 6sense Technologies has allowed us to offer much more than just resource placement. Their ability to provide not only skilled developers but also in-depth technical consultancy and process oriented approach has made a real difference for our clients, especially startups looking to scale quickly and effectively.”`}
          nameWithDesignation="VP of Sales, 6pm Global"
        />
      </div> */}

      <div>
        <CallToAction
          pageName="partners"
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

export default Partners;
