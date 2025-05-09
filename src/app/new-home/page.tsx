import React from "react";
import Hero from "../components/NewHomeComponent/Hero";
import DevelopmentPartner from "../components/NewHomeComponent/DevelopmentPartner";
import Partnership from "../components/NewHomeComponent/Partnership";
import RealTeams from "../components/NewHomeComponent/RealTeams";
import StartupStory from "../components/NewHomeComponent/StartupStory";
import Backlog from "../components/NewHomeComponent/Backlog";
import GetResults from "../components/NewHomeComponent/GetResults";
import GetStarted from "../components/NewHomeComponent/GetStarted";
import Works from "../components/NewHomeComponent/Works";
import RetainTalent from "../components/NewHomeComponent/RetainTalent";
import WhyBangladesh from "../components/NewHomeComponent/WhyBangladesh";
import Donation from "../components/NewHomeComponent/Donation";

const NewHomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <DevelopmentPartner />
      <Partnership />
      <RealTeams />
      <StartupStory />
      <Backlog />
      <GetResults />
      <GetStarted />
      <Works />
      <RetainTalent />
      <WhyBangladesh />
      <Donation />
    </div>
  );
};

export default NewHomePage;
