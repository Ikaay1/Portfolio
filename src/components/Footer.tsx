import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-3 py-10 text-white/60">
      <div>
        © {new Date().getFullYear()} {site.name}
      </div>
      <div className="flex items-center gap-3">
        <a href="#top" className="hover:text-white/80">
          Back to top
        </a>
        <span className="opacity-50">•</span>
        <a href="#portfolio" className="hover:text-white/80">
          Projects
        </a>
        <span className="opacity-50">•</span>
        <a href="#contact" className="hover:text-white/80">
          Contact
        </a>
      </div>
    </footer>
  );
}
