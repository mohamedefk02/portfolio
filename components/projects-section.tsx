"use client";

import Link from "next/link";
import { useState } from "react";

import type { Project } from "@/lib/types";
import { slugifyTitle } from "@/lib/utils";

const filters = ["all", "mobile", "web", "desktop", "fullstack"] as const;

export function ProjectsSection({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("all");

  const visibleProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.type === activeFilter);

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="project-filter-bar">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`project-filter${activeFilter === filter ? " is-active" : ""}`}
            type="button"
            data-filter={filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter === "all" ? "All" : filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      {visibleProjects.length === 0 ? (
        <p className="project-filter-empty">No projects in this category yet.</p>
      ) : null}

      <div className="projects-grid">
        {visibleProjects.map((project) => (
          <Link
            key={project.title}
            className="project-card show"
            href={`/projects/${slugifyTitle(project.title)}`}
            data-type={project.type}
          >
            <div className="project-media">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <div className="project-badge-row">
                <span className="project-type-badge">{project.type}</span>
                {project.isInDevelopment ? <span className="project-status-badge">In development</span> : null}
              </div>
              <div className="project-card-footer">
                <h3>{project.title}</h3>
                <span className="project-link-text">
                  Take a look
                  <i className="bx bx-right-arrow-alt" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
