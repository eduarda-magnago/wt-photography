import Image from "next/image";
import Link from "next/link";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About me", href: "/#about" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer>
      <div className="bg-ink px-6 py-16 text-sm text-white md:px-14">
        <div className="mx-auto max-w-5xl">
          <div className="border-t border-white/30 pt-12">
            <div className="grid gap-12 md:grid-cols-[1fr_auto_auto] md:gap-20">
              <div>
                <Image
                  src="/img/logo.png"
                  alt="WT Timeless Photography"
                  width={240}
                  height={110}
                />
                <p className="mt-6 max-w-xs">
                  With a natural and artistic approach, we create photographs
                  that reflect everything.
                </p>
                <ul className="mt-6 flex items-center gap-3">
                  <li>
                    <a href="#" aria-label="Instagram" className="transition-opacity hover:opacity-70">
                      <Image src="/img/instagram.png" alt="" width={18} height={18} />
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="Facebook"
                      className="relative block h-[18px] w-[18px] transition-opacity hover:opacity-70"
                    >
                      <Image src="/img/facebook.png" alt="" fill sizes="18px" className="object-contain"/>
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="YouTube" className="transition-opacity hover:opacity-70">
                      <Image src="/img/youtube.png" alt="" width={18} height={18} />
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="LinkedIn" className="transition-opacity hover:opacity-70">
                      <Image src="/img/linkedin.png" alt="" width={18} height={18} />
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-6 text-xs uppercase tracking-widest">
                  Explore
                </h3>
                <ul className="space-y-2">
                  {exploreLinks.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-6 text-xs uppercase tracking-widest">
                  Enquiries
                </h3>
                <address className="not-italic leading-relaxed">
                  641 Route de Gibannaz
                  <br />
                  Les Gets
                  <br />
                  74260
                </address>
                <div className="mt-6 flex flex-col gap-1 underline">
                  <a href="tel:+33685204809">+33 (0)6 85 20 48 09</a>
                  <a href="tel:+447967728009">+44 (0)7967 728009</a>
                </div>
                <a
                  href="mailto:info@weddingphoto.com"
                  className="mt-6 block underline"
                >
                  info@weddingphoto.com
                </a>
              </div>
            </div>

            <div className="mt-16 flex flex-col gap-4 border-t border-white/30 pt-6 text-xs md:flex-row md:justify-between">
              <p>
                Designed &amp; developed by{" "}
                <a href="emstudioweb.com" className="underline">
                  EM Studio
                </a>
              </p>
              <div className="flex gap-6 underline">
                <a href="#">Terms &amp; Conditions</a>
                <a href="#">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="bg-neutral-200 px-6 py-5 text-center text-xs uppercase tracking-wide">
        © WT Timeless Photography 2026 - All the rights reserved.
      </p>
    </footer>
  );
}