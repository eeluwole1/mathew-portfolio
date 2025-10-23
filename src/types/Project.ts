export type Project = {
  id: string;
  title: string;
  tagline: string;
  status: "completed" | "in-progress";
  stack: string[];
  demo?: string;
  repo?: string;
  category: string;
  highlights?: string[];
};
