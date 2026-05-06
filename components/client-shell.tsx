"use client";

import { useEffect, useState } from "react";

import { useTranslation } from "./i18n/language-context";
import { LanguageSwitcher } from "./language-switcher";

export function ClientShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    // ... rest of useEffect

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);

    const links = document.querySelectorAll(".nav-links a");
    links.forEach((link) => link.addEventListener("click", closeMenu));

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      links.forEach((link) => link.removeEventListener("click", closeMenu));
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className={menuOpen ? "menu-open" : undefined}>
        <div className="nav-container">
          <div className="logo">
            <a href="/#home">
              <img src="/images/F.png" alt="MF Logo" height={50} />
            </a>
          </div>

          <button
            className="nav-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="site-nav-links"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <i className={menuOpen ? "bx bx-x" : "bx bx-menu"} />
          </button>

          <div className="nav-links" id="site-nav-links">
            <a href="/#home">{t("nav.home")}</a>
            <a href="/#projects">{t("nav.projects")}</a>
            <a href="/#experience">{t("nav.experience")}</a>
            <a href="/#skills">{t("nav.skills")}</a>
            <a href="/#about">{t("nav.about")}</a>
            <a href="/#contact">{t("nav.contact")}</a>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {children}

      <footer className="footer-section">
        <div className="footer-container">
          <p>&copy; 2026 Mohamed El Fankari. {t("footer.rights")}</p>
          <div className="footer-icons">
            <a href="https://github.com/mohamedefk02" className="icon-secondary" target="_blank" rel="noreferrer">
              <i className="bx bxl-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-el-fankari-848826253/"
              className="icon-secondary"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-linkedin" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
