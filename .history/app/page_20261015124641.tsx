import Hero from "@/components/hero";
import Intro from "@/components/home/intro";
import About from "@/components/home/about";
import Details from "@/components/home/details";
import Testimonials from "@/components/home/testimonials";

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Timeless Wedding Photography"
        title="Capturing the essence of your treasured moments"
        image="/img/hero-bg.jpg"
      />
      <Intro />
       <reveal>
      <About />
      <Details />
      <Testimonials />
    </>
  );
}