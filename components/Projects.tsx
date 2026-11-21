import { PROJECTS, type Project } from "@/data/projects";
import Reveal, { MaskLine } from "@/components/Reveal";

const STATUS_STYLES: Record<Project["status"], string> = {
  Live: "bg-green-500/15 text-green-400",
  Completed: "bg-paper/10 text-paper",
  "In development": "bg-brand/15 text-brand",
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col gap-5 rounded-xl border border-line bg-panel p-6 transition hover:border-brand md:p-8">
      {/* top row: number + status */}
      <div className="flex items-start justify-between gap-4">
        <span className="font-display text-5xl leading-none text-brand">{project.number}</span>
        <span className={`rounded-full px-3 py-1 font-mono text-xs ${STATUS_STYLES[project.status]}`}>
          {project.status}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="font-display text-3xl uppercase leading-tight md:text-4xl">{project.title}</h3>
        <p className="font-mono text-xs uppercase text-muted">
          {project.course} · {project.team}
        </p>
      </div>

      <p className="text-paper/90">{project.summary}</p>

      <ul className="flex flex-col gap-2 text-sm text-muted">
        {project.highlights.map((point) => (
          <li key={point} className="flex gap-3">
            <span className="mt-2 h-0.5 w-3 shrink-0 bg-brand" />
            {point}
          </li>
        ))}
      </ul>

      {/* stack chips + links pinned to the bottom */}
      <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
        <ul className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li key={tech} className="rounded border border-line px-2 py-1 font-mono text-xs text-muted">
              {tech}
            </li>
          ))}
        </ul>
        <div className="flex gap-4 font-mono text-xs uppercase">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-brand">
              GitHub ↗
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="hover:text-brand">
              Live ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="border-t border-line px-6 py-24 md:px-16 md:py-32">
      <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="mb-4 font-mono text-xs uppercase text-brand">/ Selected work</p>
          <h2 className="font-display text-6xl uppercase leading-[0.9] md:text-8xl">
            <MaskLine>Things I&apos;ve</MaskLine>
            <MaskLine delay={0.1} className="text-brand">built.</MaskLine>
          </h2>
        </div>
        <p className="max-w-sm text-muted">
          University projects covering architecture, databases and code, from the
          first commit to the final report.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.number} delay={i * 0.1} className={i === 0 ? "lg:col-span-2" : ""}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
