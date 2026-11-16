import ContactForm from "@/components/sections/contact/ContactForm";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactInfo from "@/components/sections/contact/ContactInfo";
import Container from "@/components/shared/Container";

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <div className="order-2 lg:order-1">
              <ContactForm />
            </div>
            <div className="order-1 lg:order-2">
              <ContactInfo />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
