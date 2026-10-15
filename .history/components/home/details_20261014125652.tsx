import Image from "next/image";
import Link from "next/link";

const photos = [
  { src: "/img/detail1.png", alt: "Bouquet resting on a golden ornament" },
  { src: "/img/detail2.png", alt: "Couple dancing by a large window" },
  { src: "/img/detail3.png", alt: "Bridesmaids laughing together" },
];

export default function Details() {
  return (
    <section id="gallery" className="bg-paper px-6 pb-24 md:px-14 md:pb-32">
      <div className="mx-auto max-w-[1000px]">
        <div className="flex items-baseline justify-between">
          <h2 className="font-heading text-xl">
            Always thinking of every detail
          </h2>
          <Link href="/#gallery" className="font-heading text-sm font-semibold">
            View full gallery &gt;
          </Link>
        </div>

        <div className="mt-10 space-y-6 text-sm leading-relaxed">
          <p>
            From the quiet tear before the ceremony to the golden light hitting
            your bouquet just right — I believe the beauty is in the details. I
            don’t just take pictures; I observe, anticipate, and capture the
            moments you didn’t even realize were happening.
          </p>
          <p>
            Whether it’s making sure your dress is perfectly fluffed, guiding
            you into the best lighting, or noticing when your grandma reaches
            for your hand — my job goes far beyond the shutter. I’m there to
            preserve every fleeting detail that makes your day uniquely yours.
            Because when it’s all over, it’s the little things that stay with
            you the longest.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {photos.map((photo) => (
            <div key={photo.src} className="relative aspect-[3/4]">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}