import { Link } from "react-router-dom";
import { useTypewriter } from "../hooks/useTypewriter";
import Reveal from "../component/reveal/Reveal";

const skills = ["Java", "Spring Boot", "React", "TypeScript", "SQL", "Node.js", "Firebase", "TailwindCSS", "AWS"] as const;

const roles = ["Software Developer", "Full-Stack Engineer", "Royal WoleSax 🎷"] as const;

const experience = [
  {
    company: "Canada Life",
    role: "Software Developer",
    team: "Data Automation & Platform Engineering",
    location: "Winnipeg, MB",
    dates: "May 2026 – August 2026",
    bullets: [
      "Contributed to the development, testing, maintenance, and support of enterprise Java Spring Boot applications",
      "Built full-stack features spanning backend services (Java, Spring Boot, REST APIs, SQL) and frontend UI (React, TypeScript)",
      "Collaborated with developers, QA analysts, and business stakeholders in Agile sprints"
    ]
  },
  {
    company: "Ready Made Solution Inc",
    role: "Front-End Developer",
    team: "",
    location: "Winnipeg, MB",
    dates: "April 2025 – December 2025",
    bullets: [
      "Participated in the design, development, testing, and maintenance of client-facing software applications",
      "Developed reusable UI components using React and TypeScript",
      "Investigated software defects and implemented performance and usability improvements"
    ]
  }
] as const;

export default function Home() {
  const typed = useTypewriter(roles);

  return (
    <main className="bg-white text-gray-400">
      {/* Hero Section */}
      <section className="bg-[#f9fbff] text-gray-400 py-16 px-6 md:px-10 rounded-3xl shadow-sm border border-gray-200 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Avatar */}
          <img
            src={`${import.meta.env.BASE_URL}profile.jpeg`}
            alt="Elusiyan Mathew Eluwole"
            className="h-44 w-44 md:h-56 md:w-56 rounded-full object-cover shadow-[0_4px_16px_rgba(0,0,0,0.1)] ring-4 ring-[#4A90E2]/40 mb-6"
            loading="eager"
          />

          {/* Name */}
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-black">
            Elusiyan Mathew Eluwole
          </h1>

          {/* Typewriter role line */}
          <div className="mt-2 min-h-[1.75rem] text-xl font-semibold text-[#4A90E2]">
            <span aria-hidden="true">
              {typed}
              <span className="inline-block w-[2px] h-5 bg-[#4A90E2] ml-0.5 align-middle animate-pulse" />
            </span>
            <span className="sr-only">{roles.join(" · ")}</span>
          </div>

          {/* Summary */}
          <p className="mt-4 text-lg leading-relaxed text-gray-700 max-w-2xl">
            Software Developer with full-stack experience across{" "}
            <span className="font-semibold text-black">Java, Spring Boot</span>, and{" "}
            <span className="font-semibold text-black">React, TypeScript</span>, most recently building
            enterprise applications at{" "}
            <span className="font-semibold text-black">Canada Life</span>. I also perform as{" "}
            <span className="font-semibold text-[#4A90E2]">Royal WoleSax</span>, blending creativity and technology.
          </p>

          {/* Skills */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="text-[11px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full border border-[#4A90E2]/30 bg-white text-gray-700 hover:border-[#4A90E2]/50 transition"
              >
                {s}
              </span>
            ))}
          </div>

          {/* Buttons (consistent RoyalWoleSax blue theme) */}
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {/* Primary */}
            <Link
              to="/projects"
              className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold
                         bg-[#4A90E2] text-white hover:bg-[#357ABD] focus-visible:outline-none
                         focus-visible:ring-2 focus-visible:ring-[#4A90E2] shadow-[0_4px_14px_rgba(74,144,226,0.25)] transition"
            >
              View Projects
            </Link>

            {/* Secondary (Outline) */}
            <a
              href={`${import.meta.env.BASE_URL}Resume.pdf`}
              download="Elusiyan-Mathew-Eluwole-Resume.pdf"
              className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold
                        border border-[#4A90E2] text-[#1f3b5b] hover:bg-[#eaf2fe]
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A90E2] transition"
            >
              Download Résumé
            </a>
            {/* Tertiary (Soft Fill) */}
            <Link
              to="/contact"
              className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold
                         bg-[#eaf2fe] text-[#1f3b5b] hover:bg-[#d9e8fd]
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A90E2] transition"
            >
              Contact Me
            </Link>
          </div>

          {/* Social Links */}
          <div className="mt-4 flex gap-5 text-sm justify-center">
            <a
              href="https://github.com/eeluwole1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4A90E2] hover:underline underline-offset-4"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mathew-eluwole-59063721a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4A90E2] hover:underline underline-offset-4"
            >
              LinkedIn
            </a>
            <a
              href="https://royalwolesax.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4f729a] hover:underline underline-offset-4"
            >
              Royal WoleSax
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-6 pt-20 pb-6 max-w-2xl mx-auto">
        <Reveal className="text-center mb-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#4A90E2]">Work</p>
          <h2 className="text-3xl font-bold text-black mt-1">Experience</h2>
        </Reveal>
        <div className="flex flex-col gap-4">
          {experience.map((job, i) => (
            <Reveal
              key={job.company}
              delayMs={i * 100}
              className="bg-[#f9fbff] border border-gray-200 border-l-4 border-l-[#4A90E2] rounded-2xl p-6 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-xl font-bold text-black">{job.role}</h3>
                <span className="text-sm text-gray-500 shrink-0">{job.dates}</span>
              </div>
              <p className="text-base font-semibold text-[#1f3b5b] mt-0.5">
                {job.company} <span className="font-normal text-gray-500">· {job.location}</span>
              </p>
              {job.team && (
                <p className="text-xs font-medium uppercase tracking-wide text-[#4A90E2] mt-2">
                  {job.team}
                </p>
              )}
              <ul className="mt-3 text-sm text-gray-700 leading-relaxed space-y-1.5 list-disc list-inside">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 pb-20 pt-16 max-w-3xl mx-auto">
        <Reveal className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#4A90E2]">About</p>
          <h2 className="text-3xl font-bold text-black mt-1">A bit about me</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            I design and develop high-quality digital products with a passion for clean, accessible, and scalable code.
            My work combines creativity, logic, and excellence in both technology and music.
          </p>
        </Reveal>
      </section>
    </main>
  );
}
