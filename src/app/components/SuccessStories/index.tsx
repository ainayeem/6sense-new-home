import Image from "next/image";
import { ReactNode } from "react";
import SectionTitle from "../SectionTitle";

const SuccessStories = ({
  title,
  paragraph,
}: {
  title: ReactNode;
  paragraph: string;
}): JSX.Element => {
  const text = (
    <>
      <p className="max-w-3xl mx-auto font-helvetica py-5 text-blackSecondary">
        {paragraph}
      </p>
    </>
  );
  return (
    <div className="my-12">
      <div className="px-4 text-center">
        <SectionTitle title={title} paragraph={text} />
      </div>

      <div className="px-4 md:px-0 max-w-7xl mx-auto my-10">
        <div className="flex flex-col-reverse gap-10 md:flex-row items-center md:gap-20">
          <div className="flex-1 flex-grow">
            <h2 className="text-primary font-bold text-3xl md:text-4xl">
              Our Partnership with{" "}
              <span className="text-secondary">Pattern50</span>
            </h2>
            <div className="space-y-4 mt-6">
              <div className="space-y-2">
                <h3 className="font-bold text-2xl text-primary">
                  The Challenge
                </h3>
                <p>
                  Pattern50, a software development service agency in the US,
                  was looking for a reliable partner to expand their service
                  offerings without increasing internal resources. They needed a
                  team that could seamlessly integrate with their operations,
                  provide top-tier development expertise, and deliver results
                  that met their high standards.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-2xl text-primary">
                  Our Approach
                </h3>
                <p>
                  We collaborated closely with Pattern50, working under their
                  brand to ensure a unified experience for their clients. By
                  aligning our proven software development process, which
                  includes SCRUM and other technical frameworks, with their
                  existing workflows, we were able to integrate smoothly without
                  disrupting their operations.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <img
                      className="mt-[2px]"
                      src="/images/verified.webp"
                      alt="Verified"
                    />
                    <p className="font-helvetica text-justify">
                      <span className="font-bold">Seamless Integration:</span>{" "}
                      Our team of developers worked directly with Pattern50 and
                      their clients, maintaining consistent communication and
                      adapting to their specific needs and timelines.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <img
                      className="mt-[2px]"
                      src="/images/verified.webp"
                      alt="Verified"
                    />
                    <p className="font-helvetica text-justify">
                      <span className="font-bold">Technical Expertise:</span>
                      Leveraging our expertise in technologies like Node.js,
                      React, and AI, we delivered high-quality software
                      solutions that exceeded client expectations.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <img
                      className="mt-[2px]"
                      src="/images/verified.webp"
                      alt="Verified"
                    />
                    <p className="font-helvetica text-justify">
                      <span className="font-bold">Client Satisfaction:</span>
                      Pattern50&apos;s clients benefited from the collaboration,
                      receiving top-notch software without knowing that a
                      partner agency was involved. This allowed Pattern50 to
                      maintain strong client relationships while expanding their
                      service capabilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 mt-6">
              <div className="space-y-2">
                <h3 className="font-bold text-2xl text-primary">The Result</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <img
                      className="mt-[2px]"
                      src="/images/verified.webp"
                      alt="Verified"
                    />
                    <p className="font-helvetica text-justify">
                      <span className="font-bold">
                        Increased Service Offerings:{" "}
                      </span>
                      Pattern50 was able to offer a broader range of services to
                      their clients without increasing their internal headcount.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <img
                      className="mt-[2px]"
                      src="/images/verified.webp"
                      alt="Verified"
                    />
                    <p className="font-helvetica text-justify">
                      <span className="font-bold">Client Satisfaction: </span>
                      The seamless collaboration led to high client
                      satisfaction, with Pattern50&apos;s clients praising the
                      quality of the software delivered.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <img
                      className="mt-[2px]"
                      src="/images/verified.webp"
                      alt="Verified"
                    />
                    <p className="font-helvetica text-justify">
                      <span className="font-bold">Ongoing Partnership: </span>
                      Due to the success of our initial projects, Pattern50
                      continues to partner with us, trusting 6sense Technologies
                      to help them meet their growing client demands.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex-grow">
            <Image
              src="/images/Scalable-Team-Options.webp"
              alt="Success Stories"
              width={500}
              height={500}
              className="w-full"
            />
          </div>
        </div>
        {/* <div className="mt-20 flex flex-col gap-10 md:flex-row items-center md:gap-20">
          <div className="flex-1 flex-grow">
            <Image
              src="/images/Transparency-Communication.webp"
              alt="Success Stories"
              width={500}
              height={500}
              className="w-full"
            />
          </div>
          <div className="flex-1 flex-grow">
            <h2 className="text-primary font-bold text-3xl md:text-4xl">
              Our Partnership with{" "}
              <span className="text-secondary">6pm Global</span>
            </h2>
            <div className="space-y-4 mt-6">
              <div className="space-y-2">
                <h3 className="font-bold text-2xl text-primary">
                  The Challenge
                </h3>
                <p>
                  6pm Global, a renowned placement consultancy, was looking to
                  enhance the value they provide to their clients by offering
                  not only resource placement but also technical consultancy and
                  development services. They needed a partner who could supply
                  highly skilled developers and provide expert technical
                  guidance to help their clients, especially startups, succeed
                  in their software projects.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-2xl text-primary">
                  Our Approach
                </h3>
                <p>
                  We entered into a strategic partnership with 6pm Global, where
                  6sense Technologies became their trusted partner for supplying
                  development resources and technical consultancy services to
                  their referred clients. Here’s how we worked together:
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <img
                      className="mt-[2px]"
                      src="/images/verified.webp"
                      alt="Verified"
                    />
                    <p className="font-helvetica text-justify">
                      <span className="font-bold">Resource Provision: </span> We
                      supplied 6pm Global with top-tier developers who were
                      matched to the specific needs of their clients, ensuring a
                      perfect fit for each project.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <img
                      className="mt-[2px]"
                      src="/images/verified.webp"
                      alt="Verified"
                    />
                    <p className="font-helvetica text-justify">
                      <span className="font-bold">Technical Consultancy: </span>
                      Beyond just providing developers, we offered comprehensive
                      technical consultancy services, guiding 6pm Global’s
                      clients through the complexities of software development,
                      from architecture design to implementation strategies.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <img
                      className="mt-[2px]"
                      src="/images/verified.webp"
                      alt="Verified"
                    />
                    <p className="font-helvetica text-justify">
                      <span className="font-bold">
                        Flexibility and Scalability:{" "}
                      </span>
                      We offered flexible engagement models, allowing 6pm Global
                      to scale their offerings based on client demand, without
                      the need for permanent hires.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 mt-6">
              <div className="space-y-2">
                <h3 className="font-bold text-2xl text-primary">The Result</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <img
                      className="mt-[2px]"
                      src="/images/verified.webp"
                      alt="Verified"
                    />
                    <p className="font-helvetica text-justify">
                      <span className="font-bold">
                        Enhanced Service Offerings:{" "}
                      </span>
                      6pm Global was able to significantly expand their service
                      portfolio, moving beyond simple resource placement to
                      offer full-fledged software development and consultancy
                      services.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <img
                      className="mt-[2px]"
                      src="/images/verified.webp"
                      alt="Verified"
                    />
                    <p className="font-helvetica text-justify">
                      <span className="font-bold">Client Satisfaction: </span>
                      The clients referred by 6pm Global received high-quality
                      development support and expert consultancy, leading to
                      successful project outcomes and long-term client
                      satisfaction.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <img
                      className="mt-[2px]"
                      src="/images/verified.webp"
                      alt="Verified"
                    />
                    <p className="font-helvetica text-justify">
                      <span className="font-bold">Ongoing Collaboration: </span>
                      The partnership has flourished, with 6pm Global continuing
                      to rely on 6sense Technologies as their go-to partner for
                      development resources and technical consultancy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SuccessStories;
