export type ProjectType = "mobile" | "web" | "desktop" | "fullstack" | "other";

export interface TechItem {
  name: string;
  icon: string;
}

export interface SkillCategory {
  name: string;
  items: TechItem[];
}

export interface Project {
  title: string;
  description: string;
  impact: string;
  highlights: string[];
  techStack: string[];
  image: string;
  githubUrl?: string | null;
  isInDevelopment?: boolean;
  type: ProjectType;
}

export interface ContactSubmission {
  name: string;
  email: string;
  message: string;
}
