import { site } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="grid gap-8 py-12 lg:grid-cols-2 lg:items-start"
    >
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80">
          <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_0_10px_rgba(34,211,238,.12)]" />
          Open to internships • SWE / AI / ML
        </div>

        <h1 className="mt-4 text-[clamp(34px,4.2vw,54px)] font-semibold leading-[1.02] tracking-tight">
          {site.tagline.split("fast").length > 1 ? (
            <>
              I build{" "}
              <span className="bg-gradient-to-br from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                fast
              </span>
              ,{" "}
              <span className="bg-gradient-to-br from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                reliable
              </span>{" "}
              software that are effortless.
            </>
          ) : (
            site.tagline
          )}
        </h1>

        <p className="mt-4 max-w-[60ch] text-white/70">{site.intro}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#portfolio"
            className="rounded-full border border-white/15 bg-gradient-to-br from-purple-300 to-cyan-300 px-5 py-3 font-semibold text-black"
          >
            View my works
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white/90"
          >
            Contact me
          </a>
        </div>
      </div>

      <div className="rounded-2xl border border-white/12 bg-white/6 p-5 shadow-[var(--shadow-glow)]">
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-3 py-2 rounded-xl">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          <span className="ml-2 text-xs text-white/60">about.ts</span>
        </div>

        <pre className="mt-4 overflow-auto text-[13px] text-white/80">
          {`export const me = {
  name: "${site.name}",
  role: "${site.role}",
  strengths: ["systems", "shipping", "results"],
  interests: ["full-stack", "backend", "ML", "AI", "frontend"]
};`}
        </pre>
      </div>
    </section>
  );
}
