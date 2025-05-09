import { achievements, goalInfo, ourValues } from "@/data/propsData";
import CallToAction from "../components/CallToAction";
import Hero from "../components/Hero";
import { default as OurGoal, default as WhatWeValue } from "../components/OurGoal";

const Values = (): JSX.Element => {
  return (
    <div>
      <div>
        <Hero
          titlePrimary="We Add"
          titleSecondary=" Values"
          achievements={achievements}
          imageSrc="/images/values.png"
          imageWidth={500}
          imageHeight={400}
          imageAlt="6sense Team"
          justify="center"
          pageName="values"
        />
      </div>

      <div>
        <OurGoal
          pageName="values"
          imageSrc="/images/team/team2.png"
          goalInfo={goalInfo}
          title={
            <h1
              className="font-plex-sans-thai text-primary 
text-4xl md:text-5xl font-bold px-[17px]"
            >
              Our
              <span className="text-secondary"> Goal</span>
            </h1>
          }
          paragraph="We've always valued data's ability to tell a story, so here's ours."
        />
      </div>

      <div>
        <WhatWeValue
          pageName="values"
          imageSrc="/images/team/team3.png"
          goalInfo={ourValues}
          title={
            <h1
              className="font-plex-sans-thai text-primary 
text-4xl md:text-5xl font-bold px-[17px]"
            >
              What
              <span className="text-secondary"> We Value</span>
            </h1>
          }
          paragraph="At 6sense Technologies, we don’t just deliver custom software solutions—we do so with a team of exceptionally talented engineers who are handpicked and nurtured through our rigorous HR and training processes. Leveraging the latest technologies like Node.js, Express.js, Next.js, Nest.js, and React, our developers consistently outperform the market, delivering solutions that drive your business forward."
        />
      </div>

      <div>
        <CallToAction
          pageName="values"
          regularTitle="Curious to Learn"
          coloredPartTitle="More?"
          subtitle="Get in touch with us to know more about the timeline & budget"
          imageSrc="/images/6senseImage.png"
          alt="6sense"
        />
      </div>
    </div>
  );
};

export default Values;
