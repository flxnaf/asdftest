import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#cases", label: "Cases" },
  { href: "#team", label: "Clinical team" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-ink-100"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2" aria-label="A Line Technologies home">
          <Logo />
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13.5px] text-ink-600 hover:text-ink-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="#/login"
            className="text-[13.5px] font-medium text-ink-600 hover:text-ink-900 transition-colors"
          >
            Partner login
          </a>
          <a
            href="#contact"
            className="text-[13.5px] font-medium px-4 py-2 rounded-md bg-ink-900 text-white hover:bg-ink-800 transition-colors"
          >
            Submit a test case
          </a>
        </div>
        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 rounded-md hover:bg-ink-50"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d={open ? "M6 6l12 12M6 18L18 6" : "M3 6h18M3 12h18M3 18h18"}
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-ink-100 bg-white">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-ink-700 py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 text-center text-sm font-medium px-4 py-2.5 rounded-md bg-ink-900 text-white"
            >
              Submit a test case
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
