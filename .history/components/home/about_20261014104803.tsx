import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-paper px-6 py-24 md:px-14 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 text-justify">
        <div className="max-w-sm space-y-6 text-sm leading-relaxed">
          <h2 className="font-heading text-xl">Meet the photographer</h2>
          <p>
            Hi, I’m Emily Rose. I’m a wedding photographer based in California,
            passionate about telling love stories through my lens. What began
            as a love for capturing small, quiet moments has grown into a
            career built on trust, emotion, and the art of honest storytelling.
          </p>
          <p>
            With over 6 years of experience, I specialize in natural,
            documentary-style photography that focuses on genuine connection —
            not stiff poses. I believe the best photos are the ones where you
            forget the camera is even there.
          </p>
          <p>
            Beyond photography, I’m a calm presence on a whirlwind day. From
            fixing veils to finding the best light, I’m there to make your
            experience effortless and enjoyable. My clients often say I felt
            like a friend with a camera — and that’s the greatest compliment I
            could ask for.
          </p>
          <p>
            Let’s create something timeless together — photos you’ll look at 30
            years from now and still feel everything.
          </p>
        </div>

        <div className="relative aspect-[3/4] w-full md:max-w-md md:justify-self-end">
          <Image
            src="/img/about.png"
            alt="Wedding photographer picture"
            fill
            sizes="(min-width: 768px) 28rem, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}