import backlog1 from "@/assets/Clear Backlog Faster - Image 1.png";
import backlog2 from "@/assets/Clear Backlog Faster - Image 2.png";
import backlog3 from "@/assets/Clear Backlog Faster - Image 3.png";
import { DraftingCompass, Lightbulb, Rocket } from "lucide-react";
import Image from "next/image";

const backlogCards = [
  {
    icon: Rocket,
    image: backlog2,
    title: "Dedicated Team for the Cofounder CTO",
    description:
      "They work under your CTO, following scrum to clear your backlog quickly.",
    label: "Tech Leadership",
  },
  {
    icon: Lightbulb,
    image: backlog1,
    title: "Focus on Users",
    description:
      "Spend more time talking to real customers, refining your roadmap, and closing deals.",
    label: "Brainstorming",
  },
  {
    icon: DraftingCompass,
    image: backlog3,
    title: "With Control",
    description:
      "Your startup retains direct control over the team’s daily tasks without overhead or full-time-employee obligations.",
    label: "Strategic Planning",
  },
];

const Backlog = (): JSX.Element => {
  return (
    <div className="container">
      <h1 className="font-bold text-4xl lg:text-5xl leading-11 lg:leading-15 text-primary text-center py-6">
        Clear Backlog
        <span className="text-secondary"> Faster</span>
      </h1>

      <p className="my-5 leading-6 font-normal text-base lg:text-lg text-center">
        Scale quickly and safely without hiring full-time employees,
        significantly reducing risk <br /> and overhead. Significantly reducing
        risk and overhead
      </p>
      <div
        className={`max-w-[1200px] lg:mx-auto lg:rounded-2xl grid grid-cols-1 lg:grid-cols-3 lg:gap-16`}
      >
        {backlogCards.map((card, index) => {
          return (
            <div key={index} className="relative m-6 lg:m-0 lg:p-4">
              <Image
                src={card.image}
                alt="backlog"
                width={400}
                height={400}
                className=""
              />
              <h1 className="text-primary font-bold text-2xl mt-6 mb-2">
                {card.title}
              </h1>
              <p className="font-normal text-xs lg:text-base">
                {card.description}
              </p>
              <div className="absolute top-0 md:top-4 md:left-4 p-2 bg-[#faf6f1] md:w-[45%] rounded-tr-2xl rounded-bl-2xl rounded-tl rounded-br rounded-tl-xs rounded-br-xs text-primary lg:font-medium text-xs flex items-center gap-2 lg:mt-3 lg:ml-3">
                <card.icon />
                <p>{card.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Backlog;
