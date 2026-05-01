import { ClientShell } from "@/components/client-shell";

export default function NotFound() {
  return (
    <ClientShell>
      <main className="project-detail-page">
        <section className="project-detail-hero show">
          <div className="project-detail-copy">
            <a href="/#projects" className="project-back-link">
              <i className="bx bx-arrow-back" />
              Back to projects
            </a>
            <h1>Project not found</h1>
            <p className="project-detail-description">
              The requested project slug does not match any item currently available in the portfolio store.
            </p>
          </div>
        </section>
      </main>
    </ClientShell>
  );
}
