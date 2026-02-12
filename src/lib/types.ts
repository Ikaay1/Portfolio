export type ProjectTag = "fullstack" | "backend" | "ai" | "mobile";

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: ProjectTag[];
  stack: string[];
  links?: { label: string; href: string }[];
  highlights?: string[];
};
