import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ClientShell } from "@/components/client-shell";
import { findProjectBySlug, listProjects } from "@/lib/portfolio-store";
import { slugifyTitle } from "@/lib/utils";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = findProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Mohamed El Fankari",
    };
  }

  return {
    title: `${project.title} | Mohamed El Fankari`,
  };
}

export async function generateStaticParams() {
  return listProjects().map((project) => ({
    slug: slugifyTitle(project.title),
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = findProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <ClientShell>
      <>
        <main className="project-detail-page">
          <section className="project-detail-hero show">
            <div className="project-detail-media">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-detail-copy">
              <a href="/#projects" className="project-back-link">
                <i className="bx bx-arrow-back" />
                Back to projects
              </a>
              <div className="project-badge-row">
                <span className="project-type-badge project-type-badge-detail">{project.type}</span>
                {project.isInDevelopment ? (
                  <span className="project-status-badge project-status-badge-detail">In development</span>
                ) : null}
              </div>
              <h1>{project.title}</h1>
              <p className="project-detail-description">{project.description}</p>
              {project.githubUrl ? (
                <a className="project-github-link" href={project.githubUrl} target="_blank" rel="noreferrer">
                  <i className="bx bxl-github" />
                  View source on GitHub
                </a>
              ) : project.isInDevelopment ? (
                <p className="project-status-note">
                  This project is currently in development, so the source repository is not public yet.
                </p>
              ) : null}

              {project.impact ? (
                <div className="project-detail-panel">
                  <h2>Impact</h2>
                  <p>{project.impact}</p>
                </div>
              ) : null}

              {project.highlights.length ? (
                <div className="project-detail-panel">
                  <h2>Highlights</h2>
                  <ul className="project-detail-list">
                    {project.highlights.map((highlight) => (
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
      </>
    </ClientShell>
  );
}
