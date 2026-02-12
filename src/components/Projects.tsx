"use client";

import { useMemo, useState } from "react";
import Section from "./Section";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/content";
import type { ProjectTag } from "@/lib/types";

const filters: { label: string; value: "all" | ProjectTag }[] = [
  { label: "All", value: "all" },
  { label: "Full-stack", value: "fullstack" },
  { label: "Backend", value: "backend" },
  { label: "AI", value: "ai" },
  { label: "Mobile", value: "mobile" },
];

export default function Projects() {
  const [filter, setFilter] = useState<"all" | ProjectTag>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.tags.includes(filter));
  }, [filter]);

  return (
    <Section id="portfolio" title="Portfolio">
      <div className="mb-4 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={[
              "rounded-full border px-4 py-2 text-sm font-semibold",
              filter === f.value
                ? "border-purple-300/40 bg-purple-300/15 text-white"
                : "border-white/12 bg-white/5 text-white/80",
            ].join(" ")}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </Section>
  );
}
