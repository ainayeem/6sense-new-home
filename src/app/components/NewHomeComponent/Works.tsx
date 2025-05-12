import { Wrench } from "lucide-react";
import styles from "./Hero.module.css";
import Link from "next/link";
import jiraIcon from "@/assets/jira-icon.svg";
import Image from "next/image";

const steps = [
  {
    step: 1,
    title: "Share The Backlog",
    description: "Collaborate with your Product Owner",
  },
  {
    step: 2,
    title: "Join Sprint Reviews",
    description: "Stay updated on each sprint’s progress",
  },
  {
    step: 3,
    title: "Check In Daily",
    description:
      "Attend brief scrums to review what’s been done and what’s next",
  },
];

const Works = (): JSX.Element => {
  return (
    <div className="container">
      <div
        className={`${styles.banner} max-w-[1200px] lg:mx-auto border border-[#BA8D4640] mx-4 lg:my-36 px-4 lg:px-16 py-4 lg:py-11 rounded-2xl`}
      >
        <h1 className="font-bold text-4xl lg:text-5xl leading-11 lg:leading-15 text-primary">
          How It
          <span className="text-secondary"> Works</span>
        </h1>
        <p className="mt-4 mb-8 leading-6 font-normal text-base lg:text-lg">
          You attend daily scrum and sprint review meetings. Your own Product
          Owner refines the backlog for you. The team works on sprint by sprint
          and shows you whats going on in each sprint
        </p>
        <div
          className={`max-w-[1200px] lg:mx-auto lg:rounded-2xl grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-16`}
        >
          {steps.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-[#faf6f1] p-4 gap-8 lg:my-8 rounded-lg"
              >
                <h1 className="font-bold text-5xl text-[#b7c3c0] mb-4">
                  {item.step}
                </h1>
                <h2 className="text-primary font-bold text-xl mb-4">
                  {item.title}
                </h2>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
        <div className="flex gap-3.5 mt-8 items-center">
          <Link href="/contact">
            <button className="shq-btn-primary">Book a demo</button>
          </Link>
          <Image
            src={jiraIcon}
            alt="jira"
            width={100}
            height={100}
            className="w-6 h-6"
          />
          <Wrench className="text-primary" />
        </div>
      </div>
    </div>
  );
};

export default Works;
