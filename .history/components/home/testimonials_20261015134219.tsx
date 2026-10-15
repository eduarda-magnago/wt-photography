"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Anna C.",
    image: "/img/testimonial.png",
    quote:
      "I had a very amazing contracting W for my wedding. They are super kind team and I always felt I could trust 100% in their work. When I received the pictures I was more surprised than I imagined, really good quality! No regrets.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  function next() {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }

  return (
    <section id="testimonials" className="bg-sand px-6 py-20 md:px-14">
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[auto_1fr] md:gap-16">
        <div className="relative h-48 w-48 overflow-hidden rounded-full md:h-56 md:w-56">
          <Image
            src={current.image}
            alt={current.name}
            fill
            sizes="224px"
            className="object-cover"
          />
        </div>

        <div>
          <h3 className="font-heading text-xl">{current.name}</h3>
          <blockquote className="mt-4 text-justify text-lg leading-relaxed">
            “{current.quote}”
          </blockquote>
          <button
            type="button"
            onClick={next}
            className="font-heading mt-8 ml-auto block text-sm font-semibold"
          >
            {index + 1}/{testimonials.length} &gt;
          </button>
        </div>
      </div>
    </section>
  );
}