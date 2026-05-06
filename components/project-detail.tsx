"use client";

import { useTranslation } from "./i18n/language-context";
import type { Project } from "@/lib/types";

export function ProjectDetail({ project }: { project: Project }) {
  const { t } = useTranslation();

  const title = t(`projects.items.${project.id}.title`) || project.title;
  const description = t(`projects.items.${project.id}.description`) || project.description;
  const impact = t(`projects.items.${project.id}.impact`) || project.impact;
  const highlights = t(`projects.items.${project.id}.highlights`) || project.highlights;

  return (
    <main className="project-detail-page">
      <section className="project-detail-hero show">
        <div className="project-detail-media">
          <img src={project.image} alt={title} />
        </div>

        <div className="project-detail-copy">
          <a href="/#projects" className="project-back-link">
            <i className="bx bx-arrow-back" />
            {t("projects.back_to_projects") || "Back to projects"}
          </a>
          <div className="project-badge-row">
            <span className="project-type-badge project-type-badge-detail">{project.type}</span>
            {project.isInDevelopment ? (
              <span className="project-status-badge project-status-badge-detail">
                {t("projects.in_development")}
              </span>
            ) : null}
          </div>
          <h1>{title}</h1>
          <p className="project-detail-description">{description}</p>
          
          {project.githubUrl ? (
            <a className="project-github-link" href={project.githubUrl} target="_blank" rel="noreferrer">
              <i className="bx bxl-github" />
              {t("projects.view_github")}
            </a>
          ) : project.isInDevelopment ? (
            <p className="project-status-note">
              {t("projects.dev_note") || "This project is currently in development, so the source repository is not public yet."}
            </p>
          ) : null}

          {impact ? (
            <div className="project-detail-panel">
              <h2>{t("projects.impact")}</h2>
              <p>{impact}</p>
            </div>
          ) : null}

          {highlights && highlights.length ? (
            <div className="project-detail-panel">
              <h2>{t("projects.highlights")}</h2>
              <ul className="project-detail-list">
                {highlights.map((highlight: string) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {project.techStack.length ? (
            <div className="project-detail-panel">
              <h2>Tech Stack</h2>
              <div className="project-tech-list">
                {project.techStack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
