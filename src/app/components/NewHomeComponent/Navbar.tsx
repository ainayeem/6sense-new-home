"use client";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import mainLogo from "@/assets/main-logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-white drop-shadow-md h-20 py-5 relative z-50 ">
        <div className="px-4 md:px-0 max-w-7xl mx-auto flex justify-between items-center h-full">
          {/* Logo Section */}
          <div>
            <Link href="/">
              <div>
                <Image
                  src={mainLogo}
                  alt="6sense Logo - Custom Software Development Company"
                  width={148}
                  height={40}
                />
              </div>
            </Link>
          </div>
          {/* Button & Menu Icon */}
          <div className="lg:hidden flex items-center">
            <Link
              href={"https://meet.brevo.com/6sense-technologies"}
              target="_blank"
            >
              <button className="text-nowrap font-plex-sans-thai bg-secondary text-white font-bold py-3 md:py-4 px-4 text-xs md:text-sm mx-2">
                Free Consultation
              </button>
            </Link>
            <div className="cursor-pointer" onClick={toggleMenu}>
              <Image
                src="/images/menu.svg"
                alt="Menu Icon"
                width={40}
                height={32}
              />
            </div>
          </div>
          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center font-plex-sans-thai text-blackSecondary font-normal text-lg lg:space-x-6">
            <Link className="hover:opacity-60 py-2" href={"/"}>
              Home
            </Link>

            <div className="group relative lg:py-2">
              <div className="flex justify-between items-center">
                <Link
                  className="hover:opacity-60 flex items-center justify-center gap-1 py-2"
                  href={"#"}
                >
                  Services <ChevronDown />
                </Link>
              </div>

              <ul className="transition-all duration-300 ease-in-out transform scale-y-0 lg:group-hover:scale-y-100 origin-top lg:group-hover:opacity-100 opacity-0 lg:absolute lg:bg-white lg:border-t-[3px] lg:border-primary lg:w-[300px]">
                <div className="flex flex-col px-4 lg:py-4 lg:space-y-3">
                  <Link href="/services/ui-design" className="hover:opacity-60">
                    UI/UX Design
                  </Link>
                  {/* <Link
                    href="/services/ux-design-research"
                    className="hover:opacity-60"
                  >
                    UX Design & Research
                  </Link> */}
                  <Link
                    href="/services/web-application"
                    className="hover:opacity-60"
                  >
                    Web Application Development
                  </Link>
                  <Link
                    href="/services/mobile-application"
                    className="hover:opacity-60"
                  >
                    Mobile Application Development
                  </Link>
                  <Link
                    href="/services/software-testing"
                    className="hover:opacity-60"
                  >
                    Software Testing as a Service
                  </Link>
                  <Link
                    href="/services/software-project-management"
                    className="hover:opacity-60"
                  >
                    Software Project Management as a Service
                  </Link>
                  {/* <Link href="/services/ecommerce" className="hover:opacity-60">
                    Ecommerce Solution
                  </Link>
                  <Link href="/services/ai" className="hover:opacity-60">
                    ML & AI
                  </Link>
                  <Link href="/services/openai" className="hover:opacity-60">
                    Open AI
                  </Link>
                  <Link
                    href="/services/facebook-meta"
                    className="hover:opacity-60"
                  >
                    Facebook Meta
                  </Link> */}
                </div>
              </ul>
            </div>

            <div className="group relative lg:py-2">
              <Link
                className="hover:opacity-60 flex items-center justify-center gap-1 py-2"
                href={"/case-studies"}
              >
                Case Studies
              </Link>
            </div>

            <div className="group relative lg:py-2">
              <Link
                className="hover:opacity-60 flex items-center justify-center gap-1 py-2"
                href={"#"}
              >
                About Us <ChevronDown />
              </Link>

              <ul className="transition-all duration-300 ease-in-out transform scale-y-0 lg:group-hover:scale-y-100 origin-top lg:group-hover:opacity-100 opacity-0 lg:absolute lg:bg-white lg:border-t-[3px] lg:border-primary lg:w-[240px]">
                <div className="px-4 lg:py-4 lg:space-y-2 flex flex-col">
                  <Link href="/values" className="hover:opacity-60">
                    Values
                  </Link>
                  <Link href="/team" className="hover:opacity-60">
                    Team
                  </Link>
                  {/* <Link href="/values" className="hover:opacity-60">
                  Clients
                </Link> */}
                  <Link href="/partners" className="hover:opacity-60">
                    Partners
                  </Link>
                </div>
              </ul>
            </div>

            <Link className="hover:opacity-60 py-2" href={"/blog"}>
              Blog
            </Link>
            <Link className="hover:opacity-60 py-2" href={"/contact"}>
              Contact
            </Link>
          </div>
          {/* Button on large screens */}
          <div className="hidden lg:block">
            <Link
              href={"https://meet.brevo.com/6sense-technologies"}
              target="_blank"
            >
              <button className="font-plex-sans-thai w-full lg:w-[300px] bg-secondary text-white font-bold py-[14px] px-4 text-sm">
                Schedule a Free Consultation
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        <div
          className={`${
            isOpen
              ? "translate-y-[85px] border-t-[3px] border-primary"
              : "-translate-y-full"
          } fixed -top-1 right-0 w-[300px] bg-white z-50 transition-transform duration-300 ease-in-out lg:hidden overflow-scroll h-[85vh]`}
        >
          <nav className="font-plex-sans-thai flex flex-col p-5 space-y-4">
            <Link href="/" className="hover:opacity-60">
              Home
            </Link>

            {/* parent */}
            <Link href="#" className="font-semibold hover:opacity-60">
              Services
            </Link>
            {/* Submenu of services */}
            <div className="pl-4 flex flex-col space-y-4">
              <Link href="/services/ui-design" className="hover:opacity-60">
                UI/UX Design
              </Link>
              {/* <Link
                href="/services/ux-design-research"
                className="hover:opacity-60"
              >
                UX Design & Research
              </Link> */}
              <Link
                href="/services/web-application"
                className="hover:opacity-60"
              >
                Web Application Development
              </Link>
              <Link
                href="/services/mobile-application"
                className="hover:opacity-60"
              >
                Mobile Application Development
              </Link>
              <Link
                href="/services/software-testing"
                className="hover:opacity-60"
              >
                Software Testing as a Service
              </Link>
              <Link
                href="/services/software-project-management"
                className="hover:opacity-60"
              >
                Software Project Management as a Service
              </Link>
              {/* <Link href="/services/ecommerce" className="hover:opacity-60">
                Ecommerce Solution
              </Link>
              <Link href="/services/ai" className="hover:opacity-60">
                ML & AI
              </Link>
              <Link href="/services/openai" className="hover:opacity-60">
                Open AI
              </Link>
              <Link href="/services/facebook-meta" className="hover:opacity-60">
                Facebook Meta
              </Link> */}
            </div>

            {/* Parent */}
            <Link
              href="/case-studies"
              className="font-semibold hover:opacity-60"
            >
              Case Studies
            </Link>
            {/* submenu
          <div className="pl-4 flex flex-col space-y-4">
            <Link href="/charge-onsite" className="hover:opacity-60">
              Charge Onsite
            </Link>
            <Link href="/pattern50" className="hover:opacity-60">
              Pattern50
            </Link>
            <Link href="/quran-touch" className="hover:opacity-60">
              Quran Touch
            </Link>
            <Link href="/impromek" className="hover:opacity-60">
              Impromek
            </Link>
            <Link href="/itcan" className="hover:opacity-60">
              Itcan
            </Link>
          </div> */}

            {/* Parent */}
            <Link href="#" className="font-semibold hover:opacity-60">
              About Us
            </Link>
            {/* submenus */}
            <div className="pl-4 flex flex-col space-y-4">
              <Link href="/values" className="hover:opacity-60">
                Values
              </Link>
              <Link href="/team" className="hover:opacity-60">
                Team
              </Link>
              {/* <Link href="/values" className="hover:opacity-60">
              Clients
            </Link> */}
              <Link href="/partners" className="hover:opacity-60">
                Partners
              </Link>
            </div>

            <Link href="/blog" className="hover:opacity-60">
              Blog
            </Link>
            <Link href="/contact" className="hover:opacity-60">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
