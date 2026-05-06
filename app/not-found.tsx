"use client";

import { ClientShell } from "@/components/client-shell";
import { useTranslation } from "@/components/i18n/language-context";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <ClientShell>
      <main className="project-detail-page">
        <section className="project-detail-hero show">
          <div className="project-detail-copy">
            <a href="/#projects" className="project-back-link">
              <i className="bx bx-arrow-back" />
              {t("projects.back_to_projects") || "Back to projects"}
            </a>
            <h1>{t("not_found.title") || "Page not found"}</h1>
            <p className="project-detail-description">
              {t("not_found.description") || "The requested page does not match any item currently available."}
            </p>
          </div>
        </section>
      </main>
    </ClientShell>
  );
}
