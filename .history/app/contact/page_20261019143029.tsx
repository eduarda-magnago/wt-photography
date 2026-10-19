import Hero from "@/components/hero";
import ContactForm from "@/components/contact/contactForm";

export default function Contact() {
  return (
    <>
      <Hero
        eyebrow="Get in touch"
        title="Let’s create\nsomething\nbeautiful"
        image="/img/hero-bg.jpg"
      />
      <section
        id="contact-form"
        className="scroll-mt-20 bg-sand px-6 py-20 md:px-14 md:py-28"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="font-heading text-2xl font-semibold uppercase md:text-3xl">
            Send us a message
          </h2>
          <p className="mt-6 text-lg">
            Fill out the form below with a few details about your wedding or
            event, and I’ll get back to you as soon as possible.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}