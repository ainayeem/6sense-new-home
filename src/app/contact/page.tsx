import GoogleRecaptchaProviderWrapper from "@/providers/GoogleRecaptchaProviderWrapper";
import ContactForm from "./ContactForm";

const Contact = (): JSX.Element => {
  return (
    <GoogleRecaptchaProviderWrapper>
      <ContactForm />
    </GoogleRecaptchaProviderWrapper>
  );
};

export default Contact;
