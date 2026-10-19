import Image from "next/image";
import Link from "next/link";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact Us", href: "/contact#contact-form" },
];

const headingClass = "mb-6 text-xs uppercase tracking-widest";

export default function Footer() {
  return (
    <footer>
      <div className="bg-ink px-6 py-12 text-sm text-white md:px-45 md:py-14">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 md:grid-cols-[1fr_auto_auto] md:gap-24">
            <div>
              <Image
                src="/img/logo.png"
                alt="WT Timeless Photography"
                width={240}
                height={110}
              />
              <p className="mt-6 max-w-xs leading-relaxed md:mt-8">
                With a natural and artistic approach, we create photographs
                that reflect everything. Based in Melbourne, available wherever you&apos;d like to say yes.
              </p>
              <ul className="mt-6 flex items-center gap-3">
                <li>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="transition-opacity hover:opacity-70"
                  >
                    <Image src="/img/instagram.png" alt="" width={18} height={18} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="relative block h-[18px] w-[18px] transition-opacity hover:opacity-70"
                  >
                    <Image
                      src="/img/facebook.png"
                      alt=""
                      fill
                      sizes="18px"
                      className="object-contain"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-label="YouTube"
                    className="transition-opacity hover:opacity-70"
                  >
                    <Image src="/img/youtube.png" alt="" width={18} height={18} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="transition-opacity hover:opacity-70"
                  >
                    <Image src="/img/linkedin.png" alt="" width={18} height={18} />
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:pt-6">
              <h3 className={headingClass}>Links</h3>
              <ul className="space-y-2">
                {exploreLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:pt-6">
              <h3 className={headingClass}>Contact</h3>
              <address className="not-italic leading-relaxed">
                28 Banksia Street
                <br />
                Fitzroy VIC 3065
                <br />
                Australia
              </address>
              <div className="mt-6 flex flex-col gap-1 underline">
                <a href="tel:+61355500147">+61 3 5550 0147</a>
                <a href="tel:+61491570156">+61 491 570 156</a>
              </div>
              <a
                href="mailto:infowt@gmail.com"
                className="mt-6 block underline"
              >
                infowt@gmail.com
              </a>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-white/30 pt-6 text-xs md:flex-row md:items-center md:justify-between">
            <Link href="/privacy-policy-terms" className="transition-opacity hover:opacity-70">
              Privacy Policy &amp; Terms
            </Link>
            <a href="#" className="transition-opacity hover:opacity-70">
              Back to top &uarr;
            </a>
          </div>
        </div>
      </div>

      <div className="bg-neutral-200 px-6 py-5 text-xs text-ink md:px-25">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-2 md:flex-row md:justify-between">
          <p>
            Designed &amp; Developed by{" "}
            <a
              href="https://www.instagram.com/webstudio.em"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              EM Studio Web
            </a>
          </p>
          <p>© WT Timeless Wedding Photography 2026 - All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}