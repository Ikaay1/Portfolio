import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { site } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-[min(1120px,92vw)]">
        <Hero />
        <Section id="about" title="About">
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold">What I do</h3>
              <p className="mt-2 text-white/70">
                I build end-to-end software: backend APIs, data models, reliable
                services, and UI that feels smooth.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold">How I work</h3>
              <ul className="mt-3 space-y-2 text-white/75">
                <li>✓ Design for clarity, then optimize what matters.</li>
                <li>✓ Measure impact with metrics and logs.</li>
                <li>✓ Keep code readable and tests meaningful.</li>
                <li>✓ Communicate early: docs, updates, tradeoffs.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold">Quick links</h3>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={site.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 hover:border-white/25"
                >
                  GitHub
                </a>

                <a
                  href={site.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 hover:border-white/25"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </Section>

        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
