import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  eyebrow: string;
  title: string;
  image: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function Hero({
  eyebrow,
  title,
  image,
  ctaLabel = "Explore our gallery",
  ctaHref = "/#gallery",
}: HeroProps) {
  return (
    <section className="relative flex h-[70vh] min-h-[460px] items-center justify-center overflow-hidden">
      <Image
        src={im}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 flex max-w-3xl flex-col items-center px-6 text-center text-blush">
        <p className="mb-4 text-sm">{eyebrow}</p>
        <h1 className="font-hero text-5xl leading-[0.9] md:text-7xl">
          {title}
        </h1>
        <Link
          href={ctaHref}
          className="mt-8 border-b border-blush pb-1 text-xs uppercase tracking-wider"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}