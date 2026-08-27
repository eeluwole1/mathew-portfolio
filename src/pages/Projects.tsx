import { useMemo, useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../component/projectCard/ProjectCard";
import Reveal from "../component/reveal/Reveal";

const TABS = ["All", "Web", "API", "School", "In Progress"] as const;

export default function Projects() {
  const [tab, setTab] = useState<typeof TABS[number]>("All");

  const filtered = useMemo(() => {
    if (tab === "All") return projects;
    if (tab === "In Progress") return projects.filter(p => p.status === "in-progress");
    return projects.filter(p => p.category.toLowerCase() === tab.toLowerCase());
  }, [tab]);

  return (
    <main className="min-h-screen bg-gray-50 text-black py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#4A90E2]">Work</p>
          <h1 className="text-4xl font-bold mt-1">My Projects</h1>
        </div>

        {/* Filter chips (Royal blue palette) */}
        <nav
          className="flex flex-wrap gap-2 justify-center mb-8"
          role="tablist"
          aria-label="Project category filter"
        >
          {TABS.map((t) => {
            const active = tab === t;
            return (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={active}
                aria-controls={`panel-${t.replace(/\s+/g, "").toLowerCase()}`}
                onClick={() => setTab(t)}
                className={[
                  "px-3 py-1 rounded-full text-sm transition-colors duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A90E2]",
                  active
                    ? "bg-[#4A90E2] text-white border border-[#4A90E2] shadow-[0_4px_12px_rgba(74,144,226,0.25)]"
                    : "bg-white text-[#1f3b5b] border border-[#4A90E2]/30 hover:bg-[#eaf2fe]"
                ].join(" ")}
              >
                {t}
              </button>
            );
          })}
        </nav>

        {/* Cards */}
        <div
          id={`panel-${tab.replace(/\s+/g, "").toLowerCase()}`}
          role="tabpanel"
          aria-live="polite"
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((p, i) => (
            <Reveal key={p.id} delayMs={(i % 6) * 80} className="h-full">
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
