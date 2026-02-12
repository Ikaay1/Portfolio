import type { Project } from "./types";

export const site = {
  name: "Ikechukwu Mgbemele",
  role: "Software Engineer",
  tagline: "I build fast, reliable software that feels effortless.",
  intro:
    "Computer Science @ Fisk University. I love building products with clean UX, solid systems, and measurable impact.",
  location: "Nashville TN, USA",
  email: "imgbemele@gmail.com",
  links: {
    github: "https://github.com/ikaay1",
    linkedin: "https://www.linkedin.com/in/imgbemele",
    // resume: "#",
  },
};

export const projects: Project[] = [
  {
    id: "fisk-events",
    title: "Fisk Events",
    subtitle: "Next.js • TypeScript",
    description:
      "Enables student organizations on Fisk Campus organize events and book rooms easily and effectively.",
    tags: ["fullstack", "backend"],
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Postgres",
      "TailwindCSS",
      "Prisma",
      "Redis",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Ikaay1/Fisk-Org-Room-Scheduler",
      },
      { label: "Live", href: "https://fiskevents.vercel.app/" },
    ],
  },
  {
    id: "collabnext",
    title: "CollabNext",
    subtitle: "Java • TypeScript",
    description:
      "Where to find answers to your research questions, from researchers, to organizations, to research topics",
    tags: ["fullstack", "backend"],
    stack: ["Java", "TypeScript", "React", "SQL", "TailwindCSS"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Ikaay1/CollabNext",
      },
      { label: "Live", href: "https://www.collabnext.io/" },
    ],
  },
  {
    id: "ai-email-editor",
    title: "AI Email Editor",
    subtitle: "Python • Streamlit",
    description:
      "Helps you modify your emails into any sound and form of choice.",
    tags: ["fullstack", "ai"],
    stack: ["Python", "Streamlit", "OpenAI API", "Matplotlib"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Ikaay1/Email-Editing-App",
      },
      { label: "Live", href: "https://email-editing.streamlit.app/" },
    ],
  },
  {
    id: "circo",
    title: "Circo",
    subtitle: "TypeScript • React",
    description: "Video creatives application",
    tags: ["fullstack", "backend"],
    stack: ["TypeScript", "Node.js", "React", "MongoDB"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Ikaay1/Circo",
      },
      { label: "Live", href: "https://circo.vercel.app/" },
    ],
  },
  {
    id: "buytoken",
    title: "BuyToken",
    subtitle: "Python • TypeScript",
    description:
      "An application to purchase utilities like airtime, electricity, and data",
    tags: ["fullstack", "backend"],
    stack: ["Python", "TypeScript", "React", "MongoDB"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Ikaay1/BuyToken",
      },
      { label: "Live", href: "https://buytoken.app" },
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare",
    subtitle: "Java • Android",
    description:
      "A mobile app to book appointments with medical professionals, schedule lab tests, and buy medicines",
    tags: ["mobile", "backend"],
    stack: ["Java", "SQL", "Android"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Ikaay1/Healthcare",
      },
    ],
  },
  {
    id: "concilio",
    title: "Concilio",
    subtitle: "Python • Scikit-learn",
    description:
      "A Machine Learning data-driven tool that helps Concilio, a non-profit, identify and support high-need households across Dallas zip codes.",
    tags: ["fullstack", "ai"],
    stack: ["Python", "Pandas", "Scikit-learn", "Streamlit", "Matplotlib"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Ikaay1/JPMorgan-Chase-Data-for-Good",
      },
      { label: "Live", href: "https://concilio.streamlit.app/" },
    ],
  },
  {
    id: "netcare",
    title: "Netcare Access",
    subtitle: "Python • TypeScript",
    description:
      "An application to empower Netcare Access, a medical non-profit, with streamlined access to comprehensive patient insights and reports.",
    tags: ["fullstack", "backend"],
    stack: ["Python", "TypeScript", "React", "SQL"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Ikaay1/JPMorgan-Code-For-Good-24",
      },
    ],
  },
];
