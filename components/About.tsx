// Edit the content in these lists to change the About section.
const NUMBERS = [
  { value: "05", label: "Design patterns used in one backend" },
  { value: "07", label: "Feature branches managed in Git" },
  { value: "04", label: "User roles with JWT access control" },
  { value: "10", label: "Teammates led on one project" },
];

const EDUCATION = {
  degree: "Software Engineering undergraduate",
  school: "Your University", // change this to your university's name
  years: "20XX to present", // change this to your years
};

const PRINCIPLES = [
  { title: "Data first", text: "I design the schema before the screens, so features have something solid to stand on." },
  { title: "Clean layers", text: "Separate core, data, services and API, so each part can change without breaking the rest." },
  { title: "Ship in branches", text: "Small feature branches, pull requests and a develop branch that always runs." },
];

const SKILLS = [
  { group: "Languages", items: ["C#", "Dart", "TypeScript", "SQL"] },
  { group: "Frameworks", items: ["ASP.NET Core", "EF Core", "React", "Next.js", "Flutter"] },
  { group: "Data & cloud", items: ["MySQL", "Firebase", "JWT / Identity"] },
  { group: "Practice", items: ["Design patterns", "UML", "Git & GitHub", "Linux (Fedora)"] },
];

export default function About() {
  return (
    <section id="about" className="border-t border-line px-6 py-24 md:px-16 md:py-32">
      {/* big numbers band */}
      <ul className="mb-24 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
        {NUMBERS.map((n) => (
          <li key={n.label} className="border-l-2 border-brand pl-4">
            <p className="font-display text-7xl leading-none md:text-8xl">
              {n.value}
              <span className="text-brand">.</span>
            </p>
            <p className="mt-2 max-w-[18ch] text-sm text-muted">{n.label}</p>
          </li>
        ))}
      </ul>

      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_0.8fr]">
        {/* left: story */}
        <div className="flex flex-col gap-6">
          <p className="font-mono text-xs uppercase text-brand">/ About</p>
          <h2 className="font-display text-6xl uppercase leading-[0.9] md:text-7xl">
            From schema
            <br />
            <span className="text-brand">to screen.</span>
          </h2>
          <p className="max-w-prose text-paper/90">
            I&apos;m a software engineering student in Sri Lanka who likes owning a
            project end to end: the database, the API, the app and the interface
            people actually use.
          </p>
          <p className="max-w-prose text-muted">
            I&apos;ve led a ten-person team, built a Flutter game across seven feature
            branches and designed layered .NET backends around proven patterns. I&apos;m
            looking for an internship where I can ship real features with experienced
            engineers.
          </p>

          <div className="mt-2 rounded-xl border border-line bg-panel p-5">
            <p className="font-mono text-xs uppercase text-muted">Education</p>
            <p className="mt-2 font-display text-2xl uppercase">{EDUCATION.degree}</p>
            <p className="text-sm text-muted">
              {EDUCATION.school} · {EDUCATION.years}
            </p>
          </div>
        </div>

        {/* middle: how I work */}
        <div className="flex flex-col gap-6 lg:pt-10">
          <p className="font-mono text-xs uppercase text-muted">How I work</p>
          <ol className="flex flex-col gap-6">
            {PRINCIPLES.map((p, i) => (
              <li key={p.title} className="flex gap-4">
                <span className="font-mono text-sm text-brand">0{i + 1}</span>
                <div>
                  <p className="font-semibold">{p.title}</p>
                  <p className="text-sm text-muted">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* right: red sticky note */}
        <div className="flex items-start justify-center lg:pt-10">
          <div className="w-full max-w-xs rotate-2 bg-brand p-6 shadow-2xl shadow-brand/20 transition hover:rotate-0">
            <p className="font-display text-3xl uppercase leading-tight text-ink">
              Design the data first. The rest gets easier.
            </p>
            <p className="mt-6 font-mono text-xs uppercase text-ink/70">My rule for every project</p>
          </div>
        </div>
      </div>

      {/* skills */}
      <div className="mt-24">
        <p className="mb-6 font-mono text-xs uppercase text-muted">Toolkit</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((s) => (
            <div key={s.group} className="rounded-xl border border-line bg-panel p-5">
              <p className="mb-4 font-mono text-xs uppercase text-brand">{s.group}</p>
              <ul className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <li key={item} className="rounded border border-line px-2 py-1 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
