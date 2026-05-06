"use client";

import { useTranslation } from "./i18n/language-context";

const FlagEN = () => (
  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="flag-svg">
    <rect width="16" height="12" rx="2" fill="#F0F0F0"/>
    <path d="M0 2C0 0.89543 0.89543 0 2 0H14C15.1046 0 16 0.89543 16 2V10C16 11.1046 15.1046 12 14 12H2C0.89543 12 0 11.1046 0 10V2Z" fill="#2E42A5"/>
    <path d="M16 12L0 0M0 12L16 0" stroke="white" strokeWidth="2"/>
    <path d="M8 0V12M0 6H16" stroke="white" strokeWidth="3"/>
    <path d="M8 0V12M0 6H16" stroke="#E6273E" strokeWidth="1.5"/>
  </svg>
);

const FlagFR = () => (
  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="flag-svg">
    <rect width="16" height="12" rx="2" fill="white"/>
    <path d="M0 2C0 0.89543 0.89543 0 2 0H5.33333V12H2C0.89543 12 0 11.1046 0 10V2Z" fill="#00267F"/>
    <path d="M10.6667 0H14C15.1046 0 16 0.89543 16 2V10C16 11.1046 15.1046 12 14 12H10.6667V0Z" fill="#F31830"/>
  </svg>
);

export function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation();

  return (
    <div className="language-switcher-wrapper">
      <div className="switcher-pill">
        <button
          onClick={() => setLanguage("en")}
          className={`lang-option ${language === "en" ? "active" : ""}`}
          aria-label="English"
        >
          <FlagEN />
          <span>EN</span>
        </button>
        <button
          onClick={() => setLanguage("fr")}
          className={`lang-option ${language === "fr" ? "active" : ""}`}
          aria-label="Français"
        >
          <FlagFR />
          <span>FR</span>
        </button>
        <div className={`slider ${language}`} />
      </div>

      <style jsx>{`
        .language-switcher-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .switcher-pill {
          position: relative;
          display: flex;
          background: #f1f1f1;
          padding: 4px;
          border-radius: 100px;
          border: 1px solid rgba(0, 0, 0, 0.03);
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.04);
          width: 140px;
          height: 38px;
        }
        .lang-option {
          position: relative;
          z-index: 2;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: none;
          background: none;
          cursor: pointer;
          font-size: 0.75rem;
          font-weight: 700;
          color: #777;
          transition: color 0.3s ease;
          letter-spacing: 0.02em;
        }
        .lang-option span {
          margin-top: 1px;
        }
        .lang-option.active {
          color: #111;
        }
        .lang-option:hover:not(.active) {
          color: #444;
        }
        .slider {
          position: absolute;
          top: 4px;
          bottom: 4px;
          width: calc(50% - 4px);
          background: #ffffff;
          border-radius: 100px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.02);
          transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
          z-index: 1;
        }
        .slider.en {
          transform: translateX(0);
        }
        .slider.fr {
          transform: translateX(100%);
        }
        .flag-svg {
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }
        .lang-option.active .flag-svg {
          opacity: 1;
        }
        
        @media (max-width: 768px) {
          .switcher-pill {
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
}
