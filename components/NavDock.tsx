"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function NavDock() {
  const [active, setActive] = useState("home");

  // Highlight the last section whose top has passed the middle of the screen.
  // At the very bottom of the page, always highlight the last section.
  useEffect(() => {
    function update() {
      const middle = window.innerHeight / 2;
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;

      let current = SECTIONS[0].id;
      for (const { id } of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= middle) current = id;
      }
      if (atBottom) current = SECTIONS[SECTIONS.length - 1].id;
      setActive(current);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <nav
      aria-label="Main"
      className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full border border-line bg-panel/80 p-1.5 shadow-2xl backdrop-blur-md"
    >
      <ul className="flex items-center gap-1">
        <li>
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-brand font-display text-lg"
          >
            S
          </a>
        </li>
        {SECTIONS.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              aria-current={active === id ? "true" : undefined}
              className={`block rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-wide transition sm:px-4 ${
                active === id ? "bg-paper text-ink" : "text-muted hover:text-paper"
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
