import ContactCta from "@/components/sections/contact/ContactCta";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import ContactHero from "@/components/sections/contact/contactHero";
import ContactInfo from "@/components/sections/contact/ContactInfo";

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactCta />
    </>
  );
}
