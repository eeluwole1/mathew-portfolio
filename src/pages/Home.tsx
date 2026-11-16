import { Link } from "react-router-dom";
import { useTypewriter } from "../hooks/useTypewriter";
import Reveal from "../component/reveal/Reveal";

const skills = [
  "Java",
  "Spring Boot",
  "C#",
  "ASP.NET Core",
  "Salesforce",
  "Apex",
  "LWC",
  "Angular",
  "React",
  "TypeScript",
  "SQL",
  "Kafka",
  "Azure",
  "AWS",
  "Docker",
  "Kubernetes"
] as const;

const roles = ["Software Developer", "Full-Stack Engineer", "Salesforce Developer", "Royal WoleSax 🎷"] as const;

type Job = {
  company: string;
  role: string;
  team?: string;
  location: string;
  dates: string;
  summary: string;
  bullets: string[];
  stack: string[];
};

const experience: Job[] = [
  {
    company: "Canada Life",
    role: "Software Developer (Intern)",
    team: "Data Automation & Platform Engineering",
    location: "Winnipeg, MB",
    dates: "May 2026 – Aug 2026",
    summary:
      "Built and supported enterprise Java services that automate customer address changes for a national insurer.",
    bullets: [
      "Developed a Java/Spring Boot verification service for Straight Through Processing of customer address changes across 9 insurance product types, turning 5 business acceptance criteria into application logic validated by 7 JUnit/Mockito test scenarios",
      "Integrated Spring Boot microservices with the legacy CIS mainframe through Spring JDBC and stored procedures, with exception handling and fail-safe validation",
      "Enhanced Apache Kafka integrations and XML/XSD data contracts for asynchronous address updates and downstream OnBase processing",
      "Investigated and resolved defects across DEV, QA and FIT using Splunk, Kubernetes logs and SQL, documenting root causes in Confluence",
      "Optimized SQL Server queries with targeted indexing, and supported releases through GitLab, Jenkins, Maven, Docker and Kubernetes"
    ],
    stack: ["Java", "Spring Boot", "Kafka", "SQL Server", "JUnit", "Mockito", "Kubernetes", "Jenkins", "GitLab"]
  },
  {
    company: "Ready Made Solution Inc",
    role: "Full-Stack Software Developer",
    location: "Winnipeg, MB · Remote, contract",
    dates: "Apr 2025 – Dec 2025",
    summary: "Delivered front-end and back-end features for Ajo Pro 3.0, a contribution-savings platform.",
    bullets: [
      "Built responsive, reusable customer-facing components with React, Next.js, TypeScript and Tailwind CSS",
      "Designed admin dashboard features (data tables, modals, pagination) for internal platform operations",
      "Developed back-end handling for payment reversals and bounced contributions in contribution-plan processing",
      "Wrote and maintained authentication unit tests covering error handling, duplicate emails and external-service failures"
    ],
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Jest"]
  },
  {
    company: "Classic Systems Limited",
    role: "Software Engineer (Freelance)",
    location: "Nigeria",
    dates: "Sep 2018 – Nov 2021",
    summary: "Maintained and improved client software, with a focus on quality and security.",
    bullets: [
      "Investigated and resolved software defects through debugging and code analysis to improve reliability",
      "Took part in code reviews, HTML/CSS validation and vulnerability identification",
      "Supported deployment, testing and defect resolution with the development team on GitHub"
    ],
    stack: ["HTML", "CSS", "JavaScript", "GitHub"]
  }
];

const education = [
  {
    school: "Red River College Polytechnic",
    credential: "Application Development & Delivery Diploma",
    location: "Winnipeg, MB",
    dates: "Jan 2024 – Jun 2026"
  },
  {
    school: "Yaba College of Technology",
    credential: "Higher National Diploma (HND), Computer Science",
    location: "Lagos, Nigeria",
    dates: "Aug 2016 – Oct 2018"
  }
] as const;

const certifications = [
  { name: "Platform Engineering Foundations", date: "Nov 2026" },
  { name: "Building Angular and ASP.NET Web API Apps", date: "Sep 2026" },
  { name: "DevSecOps Pipeline in AWS", date: "Sep 2026" },
  { name: "Spring with GraphQL", date: "Aug 2026" },
  { name: "AWS Academy Graduate – Cloud Foundations", date: "Dec 2025" },
  { name: "Introduction to MongoDB", date: "Dec 2024" },
  { name: "Cyber Security and IT Support", date: "Mar 2024" }
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
          <div className="mt-2 min-h-7 text-xl font-semibold text-[#4A90E2]">
            <span aria-hidden="true">
              {typed}
              <span className="inline-block w-0.5 h-5 bg-[#4A90E2] ml-0.5 align-middle animate-pulse" />
            </span>
            <span className="sr-only">{roles.join(" · ")}</span>
          </div>

          {/* Summary */}
          <p className="mt-4 text-lg leading-relaxed text-gray-700 max-w-2xl">
            Software Developer with enterprise financial-services experience at{" "}
            <span className="font-semibold text-black">Canada Life</span>, building back-end services in{" "}
            <span className="font-semibold text-black">Java, Spring Boot and Kafka</span> and full-stack apps with{" "}
            <span className="font-semibold text-black">C#/.NET, Angular and React</span>. Most recently I built{" "}
            <span className="font-semibold text-black">AdvisorFlow</span>, a Salesforce-backed advisory CRM with Flows,
            Apex, Lightning Web Components and Microsoft sign-in. I also perform as{" "}
            <span className="font-semibold text-[#4A90E2]">Royal WoleSax</span>.
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
      <section className="px-6 pt-20 pb-6 max-w-3xl mx-auto" aria-labelledby="experience-heading">
        <Reveal className="text-center mb-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#4A90E2]">Work</p>
          <h2 id="experience-heading" className="text-3xl font-bold text-black mt-1">
            Experience
          </h2>
        </Reveal>
        <div className="flex flex-col gap-5">
          {experience.map((job, i) => (
            <Reveal
              key={job.company}
              delayMs={i * 100}
              className="bg-[#f9fbff] border border-gray-200 border-l-4 border-l-[#4A90E2] rounded-2xl p-6 shadow-sm"
            >
              <article>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="text-xl font-bold text-black">{job.role}</h3>
                  <span className="text-sm text-gray-500 shrink-0">{job.dates}</span>
                </div>
                <p className="text-base font-semibold text-[#1f3b5b] mt-0.5">
                  {job.company} <span className="font-normal text-gray-500">· {job.location}</span>
                </p>
                {job.team && (
                  <p className="text-xs font-medium uppercase tracking-wide text-[#4A90E2] mt-2">{job.team}</p>
                )}
                <p className="mt-3 text-sm font-medium text-gray-800">{job.summary}</p>
                <ul className="mt-2 text-sm text-gray-700 leading-relaxed space-y-1.5 list-disc pl-5">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5" aria-label={`Technologies used at ${job.company}`}>
                  {job.stack.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#eaf2fe] text-[#1f3b5b] border border-[#4A90E2]/25"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="px-6 pt-14 pb-6 max-w-3xl mx-auto" aria-labelledby="education-heading">
        <Reveal className="text-center mb-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#4A90E2]">Learning</p>
          <h2 id="education-heading" className="text-3xl font-bold text-black mt-1">
            Education &amp; Certifications
          </h2>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal className="bg-[#f9fbff] border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[#4A90E2]">Education</h3>
            <ul className="mt-3 space-y-4">
              {education.map((e) => (
                <li key={e.school}>
                  <p className="font-semibold text-black">{e.credential}</p>
                  <p className="text-sm text-[#1f3b5b]">{e.school}</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {e.location} · {e.dates}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delayMs={100} className="bg-[#f9fbff] border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[#4A90E2]">Certifications</h3>
            <ul className="mt-3 space-y-2">
              {certifications.map((c) => (
                <li key={c.name} className="flex items-baseline justify-between gap-3 text-sm">
                  <span className="text-gray-800">{c.name}</span>
                  <span className="text-xs text-gray-500 shrink-0">{c.date}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 pb-20 pt-16 max-w-3xl mx-auto" aria-labelledby="about-heading">
        <Reveal className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#4A90E2]">About</p>
          <h2 id="about-heading" className="text-3xl font-bold text-black mt-1">
            A bit about me
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            I like owning a feature end to end: understanding the business rule, building it cleanly, testing it
            properly and seeing it through to production. Working in financial services taught me to care about
            correctness, security and clear documentation as much as shipping. I use AI-assisted tools such as GitHub
            Copilot and Claude Code to move faster, and review and test every change before it merges.
          </p>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Outside of code I perform on saxophone as{" "}
            <span className="font-semibold text-[#4A90E2]">Royal WoleSax</span>.
          </p>
        </Reveal>
      </section>
    </main>
  );
}
