/** A link on a project card: a live site, API docs, or source code. */
export type ProjectLink = {
  label: string;
  url: string;
  kind: "demo" | "code";
};

export type Project = {
  id: string;
  title: string;
  tagline: string;
  status: "completed" | "in-progress";
  stack: string[];
  /** Filter tabs this project appears under (lowercase): "salesforce", "web", "api", "school". */
  categories: string[];
  highlights?: string[];
  links: ProjectLink[];
};
