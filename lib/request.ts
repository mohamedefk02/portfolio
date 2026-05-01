import type { ContactSubmission, Project } from "@/lib/types";

type FormSource = FormData | URLSearchParams;

function getRequiredField(source: FormSource, key: string) {
  const value = source.get(key);

  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`Missing required field: ${key}`);
  }

  return value.trim();
}

export function parseSkillForm(source: FormSource) {
  return {
    category: getRequiredField(source, "category"),
    skill: getRequiredField(source, "skill"),
    icon: typeof source.get("icon") === "string" ? String(source.get("icon")).trim() : "",
  };
}

export function parseContactForm(source: FormSource): ContactSubmission {
  return {
    name: getRequiredField(source, "name"),
    email: getRequiredField(source, "email"),
    message: getRequiredField(source, "message"),
  };
}

export function parseAddProjectForm(
  source: FormSource,
): Pick<Project, "title" | "description" | "image" | "githubUrl"> {
  const githubRaw = source.get("githubUrl");

  return {
    title: getRequiredField(source, "title"),
    description: getRequiredField(source, "description"),
    image: getRequiredField(source, "image"),
    githubUrl: typeof githubRaw === "string" && githubRaw.trim() ? githubRaw.trim() : null,
  };
}
