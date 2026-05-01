import { createSeededProjects, createSeededSkillCategories } from "@/lib/data";
import type { Project, SkillCategory } from "@/lib/types";
import { normalizeImagePath, slugifyTitle } from "@/lib/utils";

interface PortfolioState {
  projects: Project[];
  skillCategories: SkillCategory[];
}

declare global {
  // eslint-disable-next-line no-var
  var __portfolioStore__: PortfolioState | undefined;
}

function defaultIconFor(name: string) {
  const key = name
    .toLowerCase()
    .replace(/\+/g, "p")
    .replace(/#/g, "sharp")
    .replace(/\s+/g, "");
  return `/icons/${key}.png`;
}

function getStore() {
  if (!globalThis.__portfolioStore__) {
    globalThis.__portfolioStore__ = {
      projects: createSeededProjects(),
      skillCategories: createSeededSkillCategories(),
    };
  }

  return globalThis.__portfolioStore__;
}

export function listProjects() {
  return getStore().projects;
}

export function listSkillCategories() {
  return getStore().skillCategories;
}

export function findProjectBySlug(slug: string) {
  return getStore().projects.find((project) => slugifyTitle(project.title) === slug);
}

export function addSkill(categoryName: string, skillName: string, icon?: string | null) {
  const store = getStore();
  const existing = store.skillCategories.find(
    (category) => category.name.toLowerCase() === categoryName.toLowerCase(),
  );

  const techItem = {
    name: skillName,
    icon: icon && icon.trim() ? normalizeImagePath(icon) : defaultIconFor(skillName),
  };

  if (existing) {
    existing.items.push(techItem);
    return;
  }

  store.skillCategories.push({
    name: categoryName,
    items: [techItem],
  });
}

export function removeSkill(categoryName: string, skillName: string) {
  const category = getStore().skillCategories.find(
    (item) => item.name.toLowerCase() === categoryName.toLowerCase(),
  );

  if (!category) {
    return false;
  }

  const initialLength = category.items.length;
  category.items = category.items.filter((item) => item.name.toLowerCase() !== skillName.toLowerCase());
  return category.items.length !== initialLength;
}

export function addProject(project: Omit<Project, "type"> & { type?: Project["type"] }) {
  getStore().projects.push({
    ...project,
    image: normalizeImagePath(project.image),
    githubUrl: project.githubUrl ?? null,
    type: project.type ?? "other",
  });
}

export function removeProjectByTitle(title: string) {
  const store = getStore();
  const index = store.projects.findIndex((project) => project.title.toLowerCase() === title.toLowerCase());

  if (index === -1) {
    return false;
  }

  store.projects.splice(index, 1);
  return true;
}
