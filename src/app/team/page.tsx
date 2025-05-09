import { achievements, goalInfo } from "@/data/propsData";
import Hero from "../components/Hero";
import JoinTeam from "../components/JoinTeam";
import OurGoal from "../components/OurGoal";
import OurTeam from "../components/OurTeam";
import StoriesInformation from "../components/StoriesInformation";

const Team = (): JSX.Element => {
  return (
    <>
      <div>
        <Hero
          titlePrimary="About"
          titleSecondary=" Us"
          achievements={achievements}
          imageSrc="/images/team/team-6sensehq-about-us.png"
          imageWidth={500}
          imageHeight={400}
          imageAlt="6sense Team"
          justify="center"
          pageName="team"
        />
      </div>

      {/* <div>
        <OurStory
          title={
            <h1
              className="font-plex-sans-thai text-primary 
text-4xl md:text-5xl font-bold px-[17px]"
            >
              Our Story
              <span className="text-secondary"> In Numbers</span>
            </h1>
          }
          paragraph="We've always valued data's ability to tell a story, so here's ours."
        />
      </div> */}

      <div>
        <OurGoal
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
        <StoriesInformation />
      </div>

      <div>
        <OurTeam
          title={
            <h1
              className="font-plex-sans-thai text-primary 
text-4xl md:text-5xl font-bold px-[17px]"
            >
              Our
              <span className="text-secondary"> Team</span>
            </h1>
          }
          paragraph="We've always values our team, so here's ours."
        />
      </div>

      {/* <div>
        <LeaderShip
          title={
            <h1
              className="font-plex-sans-thai text-primary 
text-4xl md:text-5xl font-bold px-[17px]"
            >
              Our
              <span className="text-secondary"> Leadership </span>
              Speech
            </h1>
          }
          paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the"
        />
      </div> */}

      <div>
        <JoinTeam />
      </div>
    </>
  );
};

export default Team;
