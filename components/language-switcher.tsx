"use client";

import { useTranslation } from "./i18n/language-context";

export function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation();

  return (
    <div className="language-switcher">
      <button
        onClick={() => setLanguage("en")}
        className={language === "en" ? "active" : ""}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="separator">/</span>
      <button
        onClick={() => setLanguage("fr")}
        className={language === "fr" ? "active" : ""}
        aria-label="Passer en Français"
      >
        FR
      </button>

      <style jsx>{`
        .language-switcher {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          font-size: 0.9rem;
        }
        button {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-color-light);
          padding: 0.2rem 0.4rem;
          transition: color 0.3s;
        }
        button.active {
          color: var(--first-color);
        }
        button:hover:not(.active) {
          color: var(--title-color);
        }
        .separator {
          color: var(--text-color-light);
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
}
