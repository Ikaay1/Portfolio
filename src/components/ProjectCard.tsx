import type { Project } from "@/lib/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-white/15 transition">
      <div className="flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
          >
            {t}
          </span>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-1 text-sm text-white/65">{project.subtitle}</p>
      </div>

      <p className="text-white/75">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.stack.slice(0, 5).map((s) => (
          <span
            key={s}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
          >
            {s}
          </span>
        ))}
      </div>

      {project.links?.length ? (
        <div className="mt-1 flex flex-wrap gap-2">
          {project.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85"
            >
              {l.label}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}
