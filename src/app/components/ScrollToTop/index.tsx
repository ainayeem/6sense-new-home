"use client";
import { CaretUp } from "@phosphor-icons/react";
import { useEffect, useRef } from "react";

const ScrollToTop = (): JSX.Element => {
  const goToTopRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 700) {
        goToTopRef.current?.classList.remove("hidden");
        goToTopRef.current?.classList.add("opacity-100");
      } else {
        goToTopRef.current?.classList.add("hidden");
        goToTopRef.current?.classList.remove("opacity-100");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return (): void => { window.removeEventListener("scroll", handleScroll); };
  }, []);

  const goToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      ref={goToTopRef}
      className="hidden fixed bottom-20 right-0 z-50 p-[5px] rounded-l-md bg-secondary text-white shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100"
      title="Go to top"
      onClick={goToTop}
    >
      <CaretUp size={24} weight="bold" />

      <span className="sr-only">Go to top</span>
    </button>
  );
};

export default ScrollToTop;
