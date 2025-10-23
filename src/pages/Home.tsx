import { Link } from "react-router-dom";

const skills = ["React", "TypeScript", "Node.js", "Firebase", "TailwindCSS", "AWS"] as const;

export default function Home() {
  return (
    <main className="bg-white text-black">
      {/* Hero Section */}
      <section className="bg-[#f9fbff] text-black py-16 px-6 md:px-10 rounded-3xl shadow-sm border border-gray-200 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Avatar */}
          <img
            src="/profile.jpeg"
            alt="Elusiyan Mathew Eluwole"
            className="h-44 w-44 md:h-56 md:w-56 rounded-full object-cover shadow-[0_4px_16px_rgba(0,0,0,0.1)] ring-4 ring-[#4A90E2]/40 mb-6"
            loading="eager"
          />

          {/* Name */}
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black">
            Elusiyan Mathew Eluwole
          </h1>

          {/* Summary */}
          <p className="mt-3 text-lg text-gray-700 max-w-2xl">
            Full-Stack Developer — building fast, scalable web apps and APIs with{" "}
            <span className="font-semibold text-black">React, TypeScript, Node.js</span>, and{" "}
            <span className="font-semibold text-black">Firebase</span>. I also perform as{" "}
            <span className="font-semibold text-[#4A90E2]">Royal WoleSax</span>, blending creativity and technology.
          </p>

          {/* Skills */}
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="text-xs px-2.5 py-1 rounded-full border border-[#4A90E2]/30 bg-white text-gray-700 hover:border-[#4A90E2]/50 transition"
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
              href="/Resume.pdf"
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

      {/* About Section */}
      <section className="px-6 pb-16 pt-10 max-w-3xl mx-auto text-center">
        <h2 className="text-xl font-semibold text-black">About</h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          I design and develop high-quality digital products with a passion for clean, accessible, and scalable code.
          My work combines creativity, logic, and excellence in both technology and music.
        </p>
      </section>
    </main>
  );
}
