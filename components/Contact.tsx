import CopyButton from "@/components/CopyButton";

// Replace these with your real details.
const EMAIL = "your.email@example.com";
const LINKS = [
  { label: "GitHub", value: "github.com/your-username", href: "https://github.com/your-username" },
  { label: "LinkedIn", value: "linkedin.com/in/your-name", href: "https://www.linkedin.com/in/your-name" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line px-6 py-24 md:px-16 md:py-32">
      {/* red glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 -z-10 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-brand/20 blur-3xl"
      />

      <div className="grid gap-16 lg:grid-cols-[1.3fr_1fr] lg:items-end">
        <div className="flex flex-col gap-8">
          <p className="font-mono text-xs uppercase text-brand">/ Contact</p>
          <h2 className="font-display text-7xl uppercase leading-[0.88] md:text-9xl">
            Let&apos;s build
            <br />
            <span className="text-brand">something.</span>
          </h2>
          <p className="max-w-md text-muted">
            Open to internships, freelance work and university collaborations.
            The quickest way to reach me is email.
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="w-fit rounded-md bg-brand px-6 py-4 text-sm font-semibold uppercase tracking-wide transition hover:bg-brand-dark"
          >
            Email me
          </a>
        </div>

        <ul className="flex flex-col divide-y divide-line border-y border-line">
          <li className="flex items-center justify-between gap-4 py-5">
            <div>
              <p className="font-mono text-xs uppercase text-muted">Email</p>
              <p className="break-all text-lg">{EMAIL}</p>
            </div>
            <CopyButton text={EMAIL} />
          </li>
          {LINKS.map((link) => (
            <li key={link.label} className="py-5">
              <p className="font-mono text-xs uppercase text-muted">{link.label}</p>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="break-all text-lg transition hover:text-brand"
              >
                {link.value} ↗
              </a>
            </li>
          ))}
          <li className="py-5">
            <p className="font-mono text-xs uppercase text-muted">Based in</p>
            <p className="text-lg">Sri Lanka · UTC+5:30</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
