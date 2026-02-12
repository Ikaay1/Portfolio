"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";

const links = [
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070A12]/60 backdrop-blur">
      <div className="mx-auto flex w-[min(1120px,92vw)] items-center justify-between py-3">
        <a href="#top" className="flex items-center gap-2 font-semibold">
          <span className="h-3 w-3 rounded-full bg-gradient-to-br from-purple-300 to-cyan-300 shadow-[0_0_0_6px_rgba(167,139,250,.12)]" />
          {site.name.split(" ")[0]}
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-gradient-to-br from-purple-300 to-cyan-300 px-4 py-2 font-semibold text-black"
          >
            Let’s talk
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-xl border border-white/15 bg-white/5 px-3 py-2"
          aria-expanded={open}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="mx-auto w-[min(1120px,92vw)] pb-4 md:hidden">
          <div className="flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/85"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
