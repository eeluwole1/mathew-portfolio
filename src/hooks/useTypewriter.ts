import { useEffect, useState } from "react";

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useTypewriter(words: readonly string[], typingSpeed = 80, deletingSpeed = 40, pauseMs = 1600) {
  const reduced = prefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState(reduced ? words[0] : "");

  useEffect(() => {
    if (reduced) return;

    const current = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      const next = deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1);
      timeout = setTimeout(() => setText(next), deleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typingSpeed, deletingSpeed, pauseMs, reduced]);

  return text;
}
