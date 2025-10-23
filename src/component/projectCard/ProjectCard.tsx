import type { Project } from "../../types/Project";

type Props = { p: Project };

export default function ProjectCard({ p }: Props) {
  return (
    <article
      className="
        bg-[#f6faff] border border-[#4A90E2]/15 rounded-2xl
        shadow-sm hover:shadow-md transition
        hover:-translate-y-0.5 will-change-transform p-5 flex flex-col justify-between
      "
    >
      <div>
        {/* Title + status */}
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-[#0f2236]">{p.title}</h3>

          <span
            className={[
              "text-xs px-3 py-1 rounded-full border",
              p.status === "completed"
                ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                : "bg-amber-50 text-amber-800 border-amber-200"
            ].join(" ")}
          >
            {p.status === "completed" ? "Completed" : "In Progress"}
          </span>
        </div>

        <p className="text-sm text-[#334155] mb-3">{p.tagline}</p>

        {/* tech chips */}
        <div className="flex flex-wrap gap-2 mb-4">
          {p.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-full
                         bg-[#eaf2fe] text-[#1f3b5b] border border-[#4A90E2]/25"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* highlights */}
        {p.highlights && (
          <ul className="text-sm text-[#334155] space-y-1 list-disc list-inside">
            {p.highlights.slice(0, 3).map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        )}
      </div>

      {/* actions */}
      <div className="flex gap-4 mt-5">
        {p.demo && (
          <a
            href={p.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-full text-center rounded-xl text-sm font-medium
              border border-[#4A90E2] text-[#1f3b5b]
              hover:bg-[#eaf2fe] focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-[#4A90E2] py-2 transition
            "
          >
            Live Demo
          </a>
        )}
        {p.repo && (
          <a
            href={p.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-full text-center rounded-xl text-sm font-medium
              bg-[#4A90E2] text-white hover:bg-[#357ABD]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A90E2]
              shadow-[0_3px_10px_rgba(74,144,226,0.25)] py-2 transition
            "
          >
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}
