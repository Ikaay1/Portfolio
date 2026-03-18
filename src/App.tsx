/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
  useInView,
} from "motion/react";
import { useEffect, useState, useRef } from "react";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Code,
  Terminal,
  Cpu,
  Globe,
  Database,
  Briefcase,
  Calendar,
  MapPin,
} from "lucide-react";

// --- Types ---
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
  github: string;
  tech: string[];
}

interface Experience {
  id: number;
  company: string;
  logo: string;
  role: string;
  period: string;
  location: string;
  description: string;
  tech: string[];
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Eventlify",
    category: "EduTech",
    image: "/images/eventlify.png",
    description:
      "A centralized event and room scheduling app for Fisk University student organizations.",
    link: "https://fiskevents.vercel.app",
    github: "https://github.com/Ikaay1/Fisk-Org-Room-Scheduler",
    tech: ["TypeScript", "Next.js", "Node.js", "PostgreSQL"],
  },
  {
    id: 2,
    title: "CollabNext",
    category: "Web Development",
    image: "/images/collabnext.png",
    description:
      "A discovery app that connects users to relevant researchers, organizations, and research domains.",
    link: "https://collabnext.io",
    github: "https://github.com/Ikaay1/CollabNext",
    tech: ["Java", "TypeScript", "React", "SQL"],
  },
  {
    id: 3,
    title: "AI Email Helper",
    category: "Machine Learning",
    image: "/images/email.png",
    description:
      "An AI-powered email editing tool that transforms messages into any desired tone and style.",
    link: "https://email-editing.streamlit.app/",
    github: "https://github.com/Ikaay1/Email-Editing-App",
    tech: ["Python", "Matplotlib", "Streamlit", "VertexAI"],
  },
  {
    id: 4,
    title: "Circo",
    category: "Web Development",
    image: "/images/circo.jpg",
    description:
      "A video-sharing platform for creating, uploading, and discovering user-generated content.",
    link: "https://circo.vercel.app/",
    github: "https://github.com/Ikaay1/Circo",
    tech: ["TypeScript", "Node.js", "React", "MongoDB"],
  },
  {
    id: 5,
    title: "Healthcare",
    category: "Mobile Development",
    image: "/images/healthcare.jpg",
    description:
      "A mobile healthcare app for booking appointments, scheduling lab tests, and buying medicines.",
    link: "#",
    github: "https://github.com/Ikaay1/Healthcare",
    tech: ["Java", "SQL", "Android"],
  },
  {
    id: 6,
    title: "Concilio",
    category: "Machine Learning",
    image: "/images/concilio.png",
    description:
      "A Machine Learning data-driven tool that helps Concilio, a non-profit, identify and support high-need households.",
    link: "#",
    github: "https://github.com/Ikaay1/JPMorgan-Chase-Data-for-Good",
    tech: ["Python", "TensorFlow", "Streamlit", "Matplotlib"],
  },
  {
    id: 7,
    title: "TikTik",
    category: "Web development",
    image: "/images/tiktik.png",
    description:
      "A short-form video social app for creating, sharing, and discovering engaging user-generated content.",
    link: "https://tiktik-ikm.vercel.app/",
    github: "https://github.com/Ikaay1/tiktik",
    tech: ["TypeScript", "Next.js", "Node.js", "MongoDB"],
  },
  {
    id: 8,
    title: "ShareMe",
    category: "Web development",
    image: "/images/shareme.png",
    description:
      "An image discovery and bookmarking app for saving, organizing, and sharing inspiration",
    link: "https://sharemeikm.netlify.app/",
    github: "https://github.com/Ikaay1/Shareme-social-media",
    tech: ["TypeScript", "Next.js", "Node.js", "MongoDB"],
  },
];

const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: "Amazon",
    logo: "/images/amazon.webp",
    role: "Software Engineer Intern",
    period: "May 2025 - August 2025",
    location: "Seattle, WA",
    description:
      "Designed and implemented a filtering system for a high-traffic transfers web application used by over 100,000 associates, enabling users to find relevant transfer opportunities easily. I migrated the filtering logic from the frontend to the backend and introduced caching, significantly improving performance and reducing client-side workload, which led to a 45% increase in efficiency and a smoother user experience. Additionally, I implemented a dynamic filter arrangement system that adapts to individual user behavior, increasing filter usage by 30%.",
    tech: ["Python", "TypeScript", "SQL", "React", "AWS"],
  },
  {
    id: 2,
    company: "Fisk University",
    logo: "/images/fisk.gif",
    role: "Teaching Assistant",
    period: "2024 — 2026",
    location: "Nashville, TN",
    description:
      "Tutored students in object-oriented programming and data structures and algorithm concepts. Taught through topics such as classes, recursion, complexity analysis, and data structure design. Also, I led structured sessions and provided one-on-one support to break down complex concepts to help students better understand.",
    tech: ["Python", "Java"],
  },
  {
    id: 3,
    company: "Georgia Institute of Information Technology",
    logo: "/images/georgiatech.png",
    role: "Student Software Developer",
    period: "March 2024 — April 2025",
    location: "Remote",
    description:
      "Designed and developed a research discovery platform that enables users to find researchers across institutions by searching via school and/or topic. Built interactive network graphs to visualize relationships between researchers, domains, and institutions, providing insight into research ecosystems. Implemented efficient querying and data-linking mechanisms to surface relevant connections, improving the user’s ability to discover academic collaborations.",
    tech: ["Java", "TypeScript", "React", "SQL"],
  },
];

const contact = {
  github: "ikaay1",
  email: "imgbemele@gmail.com",
  linkedin: "imgbemele",
};

// --- Components ---

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0)`;
        outlineRef.current.style.transform = `translate3d(${e.clientX - 20}px, ${e.clientY - 20}px, 0)`;
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={outlineRef} className="cursor-outline hidden md:block" />
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-bg/80 backdrop-blur-md py-4" : "py-8"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold tracking-tighter"
        >
          IKECHUKWU<span className="text-accent">.</span>
        </motion.div>

        <div className="hidden md:flex gap-12 items-center">
          {["About", "Experience", "Projects", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.05, color: "var(--color-accent)" }}
              className="text-sm uppercase tracking-widest font-medium opacity-70 hover:opacity-100 transition-opacity"
            >
              {item}
            </motion.a>
          ))}
        </div>

        <button
          className="md:hidden text-ink"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-bg border-b border-white/10 p-6 md:hidden flex flex-col gap-6"
          >
            {["About", "Experience", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-display font-bold"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const words = [
    "Software Engineer",
    "Research Scientist",
    "Mathematician",
    "System Architect",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20 lg:py-0">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center">
        <motion.div
          style={{ y, opacity }}
          className="z-10 lg:justify-self-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[1px] bg-accent" />
            <div className="h-6 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-accent font-mono text-sm uppercase tracking-[0.3em] block"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-[12vw] sm:text-[8vw] lg:text-[6vw] font-display font-bold leading-[0.9] tracking-tighter mb-4"
          >
            IKECHUKWU <br />
            <span className="italic font-serif font-normal text-accent">
              MGBEMELE
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col gap-2 mb-10"
          >
            <p className="text-ink/80 text-lg sm:text-xl font-display font-medium tracking-tight">
              Fisk University
            </p>
            <p className="text-accent font-mono text-xs sm:text-sm uppercase tracking-widest">
              Class of 2028
            </p>
            <p className="max-w-md text-ink/60 text-base sm:text-lg mt-4">
              I build scalable systems and immersive digital experiences.
              <br />
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 sm:gap-6"
          >
            <button
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-accent text-bg rounded-full font-bold uppercase tracking-widest text-xs sm:text-sm hover:scale-105 transition-transform cursor-pointer"
            >
              View Projects
            </button>
            {/* <button className="px-6 sm:px-8 py-3 sm:py-4 border border-white/20 rounded-full font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-white/10 transition-colors cursor-pointer">
              Read Blog
            </button> */}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative hidden lg:block justify-self-center"
        >
          <div className="relative z-10 w-full max-w-[340px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="/images/Ikechukwu Mgbemele.jpg"
              alt="Ikechukwu Mgbemele"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 border border-accent/30 rounded-full animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 text-[6rem] xl:text-[8rem] font-display font-bold opacity-5 select-none pointer-events-none">
            DEV
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => {
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer group"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-ink/40 group-hover:text-accent transition-colors">
          Scroll to explore
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/3 bg-accent"
          />
        </div>
      </motion.button>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1">
          <span className="text-accent font-mono text-sm uppercase tracking-widest mb-4 block">
            01 // About Me
          </span>
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8">
            ALL THINGS <br />{" "}
            <span className="italic font-serif font-normal text-accent">
              ENGINEERING
            </span>
          </h2>
          <div className="space-y-6 text-ink/70 text-lg leading-relaxed">
            <p>
              I'm Ikechukwu, a second-year Computer Science student currently
              navigating the intersection of theoretical computer science and
              practical systems design at{" "}
              <span className="text-ink font-bold">Fisk University</span>. I’m
              driven by a curiosity for how complex systems work and how they
              can be built to solve real-world problems.
            </p>
            <p>
              My interests span software engineering, machine learning and AI,
              data science, and tackling challenging, high-impact problems. I
              enjoy turning ideas into meaningful solutions that address
              pressing needs.
            </p>
            <p>
              Outside of tech, I like to read books, go to the gym, and play
              soccer.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <h4 className="text-accent font-display font-bold text-3xl mb-2">
                  2+
                </h4>
                <p className="text-sm uppercase tracking-widest opacity-50">
                  Years Academic CS
                </p>
              </div>
              <div>
                <h4 className="text-accent font-display font-bold text-3xl mb-2">
                  3
                </h4>
                <p className="text-sm uppercase tracking-widest opacity-50">
                  Industry & Research Experiences
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="aspect-[3/4] bg-white/5 rounded-2xl overflow-hidden relative group"
              >
                <img
                  src="/images/Ikechukwu.jpg"
                  className="w-full h-full object-cover object-top opacity-80 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </div>

            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center p-8 group hover:bg-accent transition-colors"
              >
                <Terminal className="w-12 h-12 text-accent group-hover:text-bg" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center p-8 group hover:bg-accent transition-colors"
              >
                <Cpu className="w-12 h-12 text-accent group-hover:text-bg" />
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm"
          >
            <p className="text-sm italic font-serif text-ink/60">
              "The best way to predict the future is to implement it."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ExperienceItem = ({ exp, index }: { exp: Experience; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative pl-16 pb-20 border-l border-white/10 last:pb-0"
    >
      <div className="absolute left-[-9px] top-0 w-4 h-4 bg-accent rounded-full shadow-[0_0_15px_rgba(242,125,38,0.5)]" />

      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/10 flex-shrink-0 border border-white/10">
          <img
            src={exp.logo}
            alt={exp.company}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
            <div>
              <h3 className="text-2xl font-display font-bold">{exp.role}</h3>
              <p className="text-accent font-medium">{exp.company}</p>
            </div>
            <div className="flex items-center gap-4 text-sm opacity-50 font-mono">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" /> {exp.period}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" /> {exp.location}
              </span>
            </div>
          </div>

          <p className="text-ink/70 leading-relaxed mb-6">{exp.description}</p>

          <div className="flex flex-wrap gap-2">
            {exp.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono uppercase tracking-widest text-ink/60"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-accent font-mono text-sm uppercase tracking-widest mb-4 block">
            02 // Experience
          </span>
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">
            PROFESSIONAL <br /> <span className="text-accent">JOURNEY</span>
          </h2>
        </div>

        <div className="max-w-4xl">
          {EXPERIENCES.map((exp, idx) => (
            <div key={exp.id}>
              <ExperienceItem exp={exp} index={idx} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-white/5 border border-white/10"
    >
      <img
        src={project.image}
        alt={project.title}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-60"
      />

      <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-bg via-bg/40 to-transparent">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 bg-accent/20 text-accent rounded-full text-[8px] font-mono uppercase tracking-widest"
            >
              {t}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-accent transition-colors leading-tight">
          {project.title}
        </h3>
        <p className="text-ink/60 text-xs mb-6 max-w-md line-clamp-2">
          {project.description}
        </p>
        <div className="flex gap-4">
          {project.link != "#" && (
            <a
              href={project.link}
              target="_blank"
              className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-accent"
            >
              Live <ExternalLink className="w-3 h-3" />
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-accent"
          >
            Code <Github className="w-3 h-3" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div>
          <span className="text-accent font-mono text-sm uppercase tracking-widest mb-4 block">
            03 // Portfolio
          </span>
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">
            FEATURED <br /> <span className="text-accent">PROJECTS</span>
          </h2>
        </div>
        <div className="text-right hidden md:block">
          <p className="text-ink/40 font-mono text-sm max-w-[200px]">
            A selection of my best work.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.id}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <a href={contact.github} target="_blank">
          <button className="px-10 py-5 border border-white/10 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-bg transition-all">
            View All Repositories
          </button>
        </a>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <span className="text-accent font-mono text-sm uppercase tracking-widest mb-8 block">
          04 // Contact
        </span>
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-[12vw] md:text-[10vw] font-display font-bold leading-none tracking-tighter mb-16"
        >
          LET'S TALK <br />{" "}
          <span className="italic font-serif font-normal text-accent">
            TECH
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-ink/60 text-lg md:text-xl mb-16 leading-relaxed"
        >
          I'm always open to conversations on engineering, research,
          internships, and tech in general. Feel free to reach out for a chat.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left max-w-4xl mx-auto">
          <a
            href={`mailto:${contact.email}`}
            target="_blank"
            className="text-ink/60 hover:text-accent transition-colors"
          >
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-accent transition-colors">
              <Mail className="w-8 h-8 text-accent mb-6" />
              <h4 className="text-lg font-display font-bold mb-2">Email</h4>
              {contact.email}
            </div>
          </a>
          <a
            href={`https://linkedin.com/in/${contact.linkedin}`}
            target="_blank"
            className="text-ink/60 hover:text-accent transition-colors"
          >
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-accent transition-colors">
              <Linkedin className="w-8 h-8 text-accent mb-6" />
              <h4 className="text-lg font-display font-bold mb-2">LinkedIn</h4>
              /in/{contact.linkedin}
            </div>
          </a>
          <a
            href={`https://github.com/${contact.github}`}
            target="_blank"
            className="text-ink/60 hover:text-accent transition-colors"
          >
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-accent transition-colors">
              <Github className="w-8 h-8 text-accent mb-6" />
              <h4 className="text-lg font-display font-bold mb-2">GitHub</h4>@
              {contact.github}
            </div>
          </a>
        </div>
      </div>

      {/* Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-display font-bold opacity-[0.02] select-none pointer-events-none whitespace-nowrap">
        HELLO WORLD
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-2xl font-display font-bold">
          IKECHUKWU<span className="text-accent">.</span>
        </div>
        <div className="text-sm opacity-50 font-mono">
          &copy; {new Date().getFullYear()} IKECHUKWU MGBEMELE.
        </div>
        <div className="flex gap-8 text-xs uppercase tracking-widest font-bold opacity-50">
          <a href="#" className="hover:opacity-100">
            Blog
          </a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen selection:bg-accent selection:text-bg">
      <CustomCursor />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
