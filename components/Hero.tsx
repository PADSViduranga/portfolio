import Image from "next/image";
import FloatingTags from "@/components/FloatingTags";

// Put your photo in public/me.png, then change this to true.
const HAS_PHOTO = false;

const STATS = [
  { value: "03", label: "Projects" },
  { value: "68", label: "Screens designed" },
  { value: "10", label: "Team members led" },
];

export default function Hero() {
  return (
    <section id="home" className="relative isolate min-h-svh overflow-hidden">
      {/* red glow behind everything */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-30 bg-[radial-gradient(ellipse_at_55%_35%,rgba(229,38,31,0.35),transparent_60%)]"
      />

      {/* giant PORTFOLIO word */}
      <p
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[14vh] -z-20 select-none bg-linear-to-b from-brand to-brand-dark bg-clip-text text-center font-display text-[23vw] uppercase leading-none tracking-tight text-transparent"
      >
        Portfolio
      </p>

      {/* photo (or placeholder) */}
      <div className="absolute bottom-0 left-1/2 -z-10 h-[72svh] w-[min(80vw,520px)] -translate-x-1/2 mask-[linear-gradient(to_bottom,black_70%,transparent)]">
        {HAS_PHOTO ? (
          <Image
            src="/me.png"
            alt="Portrait of Sachintha"
            fill
            priority
            className="object-cover object-top grayscale contrast-125"
          />
        ) : (
          <div className="flex h-full w-full items-end justify-center rounded-t-full bg-linear-to-b from-panel to-ink">
            <span className="mb-[30%] font-display text-[22vh] leading-none text-line">S</span>
          </div>
        )}
      </div>

      <FloatingTags />

      {/* text content */}
      <div className="relative z-10 flex min-h-svh flex-col justify-end gap-6 px-6 pb-16 md:px-16 md:pb-24">
        <p className="font-display text-2xl uppercase">Hello, I&apos;m</p>

        <h1 className="font-display text-7xl uppercase leading-[0.9] md:text-8xl">
          Sachintha<span className="text-brand">.</span>
        </h1>

        <p className="font-display text-2xl uppercase leading-tight text-brand md:text-3xl">
          Software engineer
          <br />& full-stack builder
        </p>

        <p className="max-w-sm text-base text-muted">
          I build full-stack web apps, mobile games and the databases behind them,
          using .NET, React, Flutter and MySQL.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#work"
            className="rounded-md bg-brand px-5 py-3 text-sm font-semibold uppercase tracking-wide transition hover:bg-brand-dark"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="rounded-md border border-line bg-panel/80 px-5 py-3 text-sm font-semibold uppercase tracking-wide transition hover:border-paper"
          >
            Contact me
          </a>
        </div>
      </div>

      {/* stats on the right (desktop only) */}
      <ul className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-8 text-right md:right-16 md:flex">
        {STATS.map((stat) => (
          <li key={stat.label}>
            <p className="font-display text-5xl text-brand">{stat.value}</p>
            <p className="font-mono text-xs uppercase text-muted">{stat.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
