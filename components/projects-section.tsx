"use client";

import Link from "next/link";
import { useState } from "react";

import type { Project } from "@/lib/types";
import { slugifyTitle } from "@/lib/utils";

import { useTranslation } from "./i18n/language-context";

const filters = ["all", "mobile", "fullstack" , "desktop", "AI/ML"] as const;
const PROJECTS_PER_PAGE = 4; // 2 rows with 2 columns

export function ProjectsSection({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const { t } = useTranslation();

  const visibleProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.type === activeFilter);

  const totalPages = Math.ceil(visibleProjects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;
  const currentProjects = visibleProjects.slice(startIndex, endIndex);

  const handleFilterChange = (filter: (typeof filters)[number]) => {
    setActiveFilter(filter);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section id="projects" className="section">
      <h2 className="section-title">{t("projects.title")}</h2>
      <div className="project-filter-bar">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`project-filter${activeFilter === filter ? " is-active" : ""}`}
            type="button"
            data-filter={filter}
            onClick={() => handleFilterChange(filter)}
          >
            {filter === "all" ? t("projects.all") || "All" : filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      {visibleProjects.length === 0 ? (
        <p className="project-filter-empty">{t("projects.empty") || "No projects in this category yet."}</p>
      ) : null}

      <div className="projects-grid">
        {currentProjects.map((project) => {
          const title = t(`projects.items.${project.id}.title`) || project.title;
          return (
            <Link
              key={project.id}
              className="project-card show"
              href={`/projects/${slugifyTitle(project.title)}`}
              data-type={project.type}
            >
              <div className="project-media">
                <img src={project.image} alt={title} />
              </div>
              <div className="project-info">
                <div className="project-badge-row">
                  <span className="project-type-badge">{project.type}</span>
                  {project.isInDevelopment ? <span className="project-status-badge">{t("projects.in_development")}</span> : null}
                </div>
                <div className="project-card-footer">
                  <h3>{title}</h3>
                  <span className="project-link-text">
                    {t("projects.view_details") || "Take a look"}
                    <i className="bx bx-right-arrow-alt" />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {totalPages > 1 && (
        <div className="pagination-controls">
          <button
            className="pagination-btn"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            type="button"
          >
            ‹ {t("projects.previous") || "Previous"}
          </button>

          <div className="pagination-pages">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`pagination-page${currentPage === page ? " is-active" : ""}`}
                onClick={() => handlePageChange(page)}
                type="button"
              >
                {page}
              </button>
            ))}
          </div>

          <button
            className="pagination-btn"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            type="button"
          >
            {t("projects.next") || "Next"} ›
          </button>
        </div>
      )}
    </section>
  );
}
