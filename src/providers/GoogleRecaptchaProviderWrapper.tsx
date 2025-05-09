"use client";
import { ReactNode } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const GoogleRecaptchaProviderWrapper = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={`${process.env.NEXT_PUBLIC_GOOGLE_SITE_KEY}`}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
};

export default GoogleRecaptchaProviderWrapper;
