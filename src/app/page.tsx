import { appsData } from "@/data/appsData";
import {
  achievements,
  advantagesAccordionInfo,
  faqAccordionItems,
  featureItems,
  impactStats,
  keyFactorIcons,
  organizations,
  ourProcess,
  ourServices,
  ratingsInfo,
  statsInfo,
} from "@/data/propsData";
import { IItemInfo } from "../../types/type";
import Advantages from "./components/Advantages";
import CallToAction from "./components/CallToAction";
import Companies from "./components/Companies";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Feedback from "./components/Feedback";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
import KeyFactors from "./components/KeyFactor";
import MobileApps from "./components/MobileApps";
import Rating from "./components/Rating";
import Services from "./components/Services";
import Technology from "./components/Technology";
import Works from "./components/Works";

const Home = (): JSX.Element => {
  const ourProcesses: IItemInfo[] = ourProcess ?? []
  return (
    <main className="">
      <Hero
        titlePrimary="Expert Custom"
        titleSecondary="Software Development"
        breakBetweenTitle={true}
        subtitle="By An Award Winning Agency"
        achievements={achievements}
        statsInfo={statsInfo}
        imageSrc="/images/6sensehero.png"
        imageWidth={640}
        imageHeight={427}
        imageAlt="6sense Team"
        justify="between"
        imageCaption="6sense engineering DEPT."
        pageName="home"
      />
      <Companies
        pageName="home"
        organizations={organizations}
        title="Trusted by 50+ Companies Worldwide"
        subtitle="Experience and Expertise You Can Count On. Our team has a proven track record of delivering top-quality solutions for businesses across a variety of industries."
      />
      <Services ourServices={ourServices} />
      <KeyFactors keyfactorIcons={keyFactorIcons} />
      <Technology image="/images/technologies.png" alt="Technology" />
      {/* <BuyerGuide
        coloredPartTitle="Buyers Guide"
        regularTitle="for Developing Custom Software"
        imageSrc="/images/buyersguide.png"
        icon="/images/tick.svg"
        alt="Tick"
        guides={buyerGuides}
      /> */}

      {/* <Mistakes
        coloredPartTitle="10 Mistakes"
        regularTitle=" You Should Avoid While Developing Custom Software"
        icon="/images/tick.svg"
        alt="Icon"
        imageSrc="/images/10mistakes.png"
        mistakes={mistakes}
      /> */}

      <Features
        pageName="home"
        features={featureItems}
        title={
          <h1
            className="font-plex-sans-thai text-primary 
text-4xl md:text-5xl font-bold px-[17px]"
          >
            Setting
            <span className="text-secondary"> 6sense </span>
            Apart From The Competition
          </h1>
        }
        paragraph="We go above and beyond to ensure your satisfaction and success. Don’t
        just take our word for it – check out our track record and see for
        yourself why we stand out from the competition."
      />
      <Impact impactStats={impactStats} />
      <Advantages
        pageName="home"
        title={
          <h1
            className="font-plex-sans-thai text-primary 
text-4xl md:text-5xl font-bold"
          >
            <span className="text-secondary">Advantages </span>
            Of Choosing 6sense
          </h1>
        }
        paragraph=""
        accordionItems={advantagesAccordionInfo}
        imageSrc="/images/Choosing-6sense.png"
        alt="Choosing 6sense"
      />
      <CallToAction
        pageName="home"
        regularTitle="Curious to Learn"
        coloredPartTitle="More?"
        subtitle="Get in touch with us to know more about the timeline & budget"
        imageSrc="/images/6senseImage.png"
        alt="6sense"
      />
      <Works
        pageName="home"
        subtitle="Experience the Cost-Effective Benefits of Partnering with Our Software
        Development Team"
      />

      <Feedback
        paragraph="The solution 6sense Technologies came up with to the problem was truly innovative and first in class. Their strong technical skills and speed of development are super impressive."
        logo="/images/impromek.svg"
        name="Gabriel Sotomayor"
        designation="CEO, Impromek Inc."
        ourProcess={ourProcesses}
        bgColor="bg-slate-50"
      />

      <Rating ratingsInfo={ratingsInfo} buttonText="Visit Clutch" />

      <div className="my-12">
        <CallToAction
          pageName="home"
          regularTitle="Curious to Learn"
          coloredPartTitle="More?"
          subtitle="Get in touch with us to know more about the timeline & budget"
          imageSrc="/images/6senseImage.png"
          alt="6sense"
        />
      </div>
      <MobileApps
        pageName="home"
        subtitle="Experience the Benefits of Partnering with Our Expert Software
        Development Team"
        appsInfo={appsData}
      />
      <FAQ
        faqAccordionItems={faqAccordionItems}
        regularTitle="Frequently Asked"
        coloredPartTitle="Question"
      />
    </main>
  );
}
export default Home;