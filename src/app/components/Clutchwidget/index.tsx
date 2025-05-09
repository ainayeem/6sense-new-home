"use client";
import { useEffect } from "react";

const ClutchWidget = (): JSX.Element => {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.clutch.co/static/js/widget.js";
    script.async = true;

    script.onload = (): void => {
      if (window.CLUTCHCO) {
        window.CLUTCHCO.Init();
      }
    };

    document.body.appendChild(script);

    return (): void => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div
        className="hidden md:block clutch-widget"
        data-url="https://widget.clutch.co"
        data-widget-type="2"
        data-height="45"
        data-nofollow="true"
        data-expandifr="true"
        data-scale="100"
        data-clutchcompany-id="1731162"
      ></div>
      <div
        className="flex md:hidden clutch-widget"
        data-url="https://widget.clutch.co"
        data-widget-type="1"
        data-height="40"
        data-nofollow="true"
        data-expandifr="true"
        data-scale="100"
        data-clutchcompany-id="1731162"
      ></div>
    </>
  );
};

export default ClutchWidget;
