import Link from "next/link";
import { ReactNode } from "react";
import SectionTitle from "../SectionTitle";

const Expertise = ({ title }: { title: ReactNode }): JSX.Element => {
  const ourServices = [
    {
      id: 1,
      icon: "/images/verified.webp",
      serviceName: "UI Design",
      src: "/services/ui-design",
    },
    {
      id: 2,
      icon: "/images/verified.webp",
      serviceName: "UX Design",
      src: "/services/ux-design-research",
    },
    {
      id: 3,
      icon: "/images/verified.webp",
      serviceName: "Web Development",
      src: "/services/web-application",
    },
    {
      id: 4,
      icon: "/images/verified.webp",
      serviceName: "Mobile Development",
      src: "/services/mobile-application",
    },
    {
      id: 5,
      icon: "/images/verified.webp",
      serviceName: "Software Testing",
      src: "/services/software-testing",
    },
    {
      id: 6,
      icon: "/images/verified.webp",
      serviceName: "Project Management",
      src: "/services/software-project-management",
    },
    {
      id: 7,
      icon: "/images/verified.webp",
      serviceName: "Ecommerce",
      src: "/services/ecommerce",
    },
    {
      id: 8,
      icon: "/images/verified.webp",
      serviceName: "ML & AI",
      src: "/services/ai",
    },
    {
      id: 9,
      icon: "/images/verified.webp",
      serviceName: "OpenAI",
      src: "/services/openai",
    },
    {
      id: 10,
      icon: "/images/verified.webp",
      serviceName: "Facebook Meta",
      src: "/services/facebook-meta",
    },
    {
      id: 11,
      icon: "/images/verified.webp",
      serviceName: "Cloud Management",
      src: "/services/cloud-infrastructure",
    },
    {
      id: 12,
      icon: "/images/verified.webp",
      serviceName: "DevOps",
      src: "/services/devops",
    },
    {
      id: 13,
      icon: "/images/verified.webp",
      serviceName: "API Development",
      src: "/services/api-development",
    },
    {
      id: 14,
      icon: "/images/verified.webp",
      serviceName: "Custom Software",
      src: "/services/custom-software",
    },
    {
      id: 15,
      icon: "/images/verified.webp",
      serviceName: "IT Consulting",
      src: "/services/it-consulting",
    },
    {
      id: 16,
      icon: "/images/verified.webp",
      serviceName: "Cybersecurity",
      src: "/services/cybersecurity",
    },
    {
      id: 17,
      icon: "/images/verified.webp",
      serviceName: "Data Analytics",
      src: "/services/data-analytics",
    },
    {
      id: 18,
      icon: "/images/verified.webp",
      serviceName: "Blockchain",
      src: "/services/blockchain",
    },
    {
      id: 19,
      icon: "/images/verified.webp",
      serviceName: "IoT Solutions",
      src: "/services/iot",
    },
    {
      id: 20,
      icon: "/images/verified.webp",
      serviceName: "Digital Consulting",
      src: "/services/digital-transformation",
    },
    {
      id: 21,
      icon: "/images/verified.webp",
      serviceName: "CRM Solutions",
      src: "/services/crm-development",
    },
    {
      id: 22,
      icon: "/images/verified.webp",
      serviceName: "CMS Development",
      src: "/services/cms-development",
    },
    {
      id: 23,
      icon: "/images/verified.webp",
      serviceName: "AR Solutions",
      src: "/services/augmented-reality",
    },
    {
      id: 24,
      icon: "/images/verified.webp",
      serviceName: "VR Development",
      src: "/services/virtual-reality",
    },
    {
      id: 25,
      icon: "/images/verified.webp",
      serviceName: "RPA",
      src: "/services/rpa",
    },
    {
      id: 26,
      icon: "/images/verified.webp",
      serviceName: "Big Data",
      src: "/services/big-data",
    },
    {
      id: 27,
      icon: "/images/verified.webp",
      serviceName: "Legacy Modernization",
      src: "/services/legacy-modernization",
    },
    {
      id: 28,
      icon: "/images/verified.webp",
      serviceName: "ERP Solutions",
      src: "/services/erp-solutions",
    },
  ];

  return (
    <div className="my-16">
      <div className="px-4 text-center">
        <SectionTitle title={title} />
      </div>

      <div className="px-5 md:px-0 my-10 md:my-20 max-w-7xl mx-auto flex md:justify-center items-center">
        <div className="grid sm:grid-cols-4 gap-x-10 gap-y-4">
          {ourServices.map((service) => {return (
            <Link key={service.id} href={`${service.src}`}>
              <div className="flex gap-2">
                <img
                  className="w-[22px] h-[22px]"
                  src={service.icon}
                  alt="Verfified"
                />
                <p>{service.serviceName}</p>
              </div>
            </Link>
          )})}
        </div>
      </div>
    </div>
  );
};

export default Expertise;
