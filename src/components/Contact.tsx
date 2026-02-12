"use client";

import Section from "./Section";
import { site } from "@/lib/content";

export default function Contact() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const email = String(fd.get("email") || "");
    const message = String(fd.get("message") || "");
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Send a message or drop a link and I’ll reply."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h3 className="text-lg font-semibold">Let’s build something</h3>

          <div className="mt-4 space-y-3 text-white/75">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs text-white/60">Email</div>
              <a
                className="mt-1 block font-semibold text-white/90"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs text-white/60">Location</div>
              <div className="mt-1 font-semibold text-white/90">
                {site.location}
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-white/10 bg-white/5 p-5"
        >
          <div className="grid gap-3 md:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="text-sm text-white/75">Name</span>
              <input
                required
                name="name"
                className="rounded-2xl border border-white/12 bg-white/5 px-4 py-3 outline-none focus:border-cyan-300/50"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm text-white/75">Email</span>
              <input
                required
                name="email"
                type="email"
                className="rounded-2xl border border-white/12 bg-white/5 px-4 py-3 outline-none focus:border-cyan-300/50"
              />
            </label>
          </div>

          <label className="mt-3 flex flex-col gap-2">
            <span className="text-sm text-white/75">Message</span>
            <textarea
              required
              name="message"
              rows={6}
              className="rounded-2xl border border-white/12 bg-white/5 px-4 py-3 outline-none focus:border-cyan-300/50"
            />
          </label>

          <button className="mt-4 rounded-full border border-white/15 bg-gradient-to-br from-purple-300 to-cyan-300 px-5 py-3 font-semibold text-black">
            Send message
          </button>
        </form>
      </div>
    </Section>
  );
}
