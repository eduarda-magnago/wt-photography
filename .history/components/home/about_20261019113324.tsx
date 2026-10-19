import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-paper px-6 py-24 md:px-14 md:py-32">
      <div className="mx-auto grid max-w-[1000px] items-center gap-12 md:grid-cols-[435fr_500fr] md:gap-x-12 xl:gap-x-[140px]">
        <div>
          <h2 className="font-heading text-[20px]">Meet the photographer</h2>

          <div className="mt-6 space-y-7 text-justify text-base leading-6">
            <p>
              Hi, I’m Emily Rose. I’m a wedding photographer based in
              Australia, passionate about telling love stories through my
              lens. What began as a love for capturing small, quiet moments has
              grown into a career built on trust, emotion, and the art of
              honest storytelling.
            </p>
            <p>
              With over 6 years of experience, I specialize in natural,
              documentary-style photography that focuses on genuine connection, not stiff poses. I believe the best photos are the ones where
              you forget the camera is even there.
            </p>
            <p>
              Beyond photography, I’m a calm presence on a whirlwind day. From
              fixing veils to finding the best light, I’m there to make your
              experience effortless and enjoyable. My clients often say I felt
              like a friend with a camera, and that’s the greatest compliment
              I could ask for.
            </p>
            <p>
              Let’s create something timeless together — photos you’ll look at
              30 years from now and still feel everything.
            </p>
          </div>
        </div>

        <div className="relative aspect-[619/855] w-full md:aspect-[619/1000]">
          <Image
            src="/img/about.png"
            alt="Wedding photographer picture"
            fill
            sizes="(min-width: 1280px) 500px, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}