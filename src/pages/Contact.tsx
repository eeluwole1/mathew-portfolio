const channels = [
  {
    name: "Email",
    value: "elusiyan.m.eluwole@gmail.com",
    href: "mailto:elusiyan.m.eluwole@gmail.com",
    primary: true,
    icon: (
      <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1.4 2 7.1 6.2a1 1 0 0 0 1 0L19.6 7H4.4ZM4 8.4V17h16V8.4l-6.9 6a2 2 0 0 1-2.2 0L4 8.4Z" />
    )
  },
  {
    name: "GitHub",
    value: "eeluwole1",
    href: "https://github.com/eeluwole1",
    icon: (
      <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.4-1.1-1-1.4-1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.5-1.3.1-2.6 0 0 .8-.3 2.7 1a9 9 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .6 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .3.3.6.9.6 1.8V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
    )
  },
  {
    name: "LinkedIn",
    value: "mathew-eluwole",
    href: "https://www.linkedin.com/in/mathew-eluwole-59063721a/",
    icon: (
      <path d="M6.9 8.4H3.6V20h3.3V8.4ZM5.3 3.5a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8ZM20.4 20h-3.3v-6c0-1.4 0-3.3-2-3.3s-2.3 1.6-2.3 3.2V20H9.5V8.4h3.2v1.6h.1c.4-.8 1.6-1.7 3.2-1.7 3.4 0 4.4 2.2 4.4 5.2V20Z" />
    )
  }
];

export default function Contact() {
  return (
    <main className="relative min-h-[70vh] overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#4A90E2]/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-4 py-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#4A90E2]">Get in touch</p>
        <h1 className="text-4xl font-bold mt-1">Contact</h1>
        <p className="text-gray-600 mt-3 leading-relaxed max-w-lg">
          I’m open to full-stack roles, freelance work, and collaborations. The fastest way to reach me is by email.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {channels.map((c) => (
            <a
              key={c.name}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={[
                "group flex flex-col items-center text-center gap-3 rounded-2xl border p-6",
                "shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A90E2]",
                c.primary
                  ? "bg-[#4A90E2] border-[#4A90E2] text-white sm:col-span-1"
                  : "bg-[#f6faff] border-[#4A90E2]/15 text-[#0f2236]"
              ].join(" ")}
            >
              <span
                className={[
                  "flex h-11 w-11 items-center justify-center rounded-full",
                  c.primary ? "bg-white/15" : "bg-[#eaf2fe] text-[#4A90E2]"
                ].join(" ")}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  {c.icon}
                </svg>
              </span>
              <span>
                <span className="block text-sm font-semibold">{c.name}</span>
                <span className={c.primary ? "block text-xs text-white/80 break-all mt-0.5" : "block text-xs text-gray-500 mt-0.5"}>
                  {c.value}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
