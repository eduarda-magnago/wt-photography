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
          <h2 className="font-heading text-[20px]">
            Always thinking of every detail
          </h2>
          <Link href="/#gallery" className="font-heading text-sm font-semibold">
            View full gallery &gt;
          </Link>
        </div>

        <div className="mt-10 space-y-6 text-[16px] leading-relaxed text-justify">
          <p>
            From a deep breath before the ceremony to the golden light falling on your bouquet, I believe the beauty is in what’s easy to miss. I don’t just take pictures; I observe, anticipate, and capture what you didn’t even realize was happening.
          </p>
          <p>
            Whether it’s making sure your dress is perfectly fluffed, calming your nerves before the aisle, or catching the stolen glance between you and your partner, my job goes far beyond the shutter. I’m there to keep everything that makes your day uniquely yours. Because when it’s all over, it’s the little things that stay with you the longest.
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