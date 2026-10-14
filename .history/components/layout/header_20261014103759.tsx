"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About me", href: "/#about" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="flex items-start justify-between px-6 py-8 md:px-14">
        <ul className="flex items-center gap-3">
          <li>
            <a href="#" aria-label="Instagram" className="transition-opacity hover:opacity-70">
              <Image src="/img/instagram.png" alt="" width={18} height={18} />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Facebook" className="transition-opacity hover:opacity-70">
              <Image src="/img/facebook.svg" alt="" width={18} height={18} />
            </a>
          </li>
          <li>
            <a href="#" aria-label="YouTube" className="transition-opacity hover:opacity-70">
              <Image src="/img/youtube.svg" alt="" width={18} height={18} />
            </a>
          </li>
          <li>
            <a href="#" aria-label="LinkedIn" className="transition-opacity hover:opacity-70">
              <Image src="/img/linkedin.svg" alt="" width={18} height={18} />
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="flex flex-col gap-2"
        >
          <span className="block h-px w-9 bg-white" />
          <span className="block h-px w-7 self-end bg-white" />
          <span className="block h-px w-9 bg-white" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-ink/95">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="absolute right-6 top-8 text-3xl text-white md:right-14"
          >
            ✕
          </button>
          <nav>
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-heading text-2xl text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}