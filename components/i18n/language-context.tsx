"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import en from "../../locales/en.json";
import fr from "../../locales/fr.json";

type Language = "en" | "fr";
type Translations = typeof en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const translations: Record<Language, Translations> = { en, fr };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "fr")) {
      setLanguageState(savedLang);
    }
    setIsMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
  };

  const t = useCallback(
    (key: string) => {
      const keys = key.split(".");
      let result: any = translations[language];

      for (const k of keys) {
        if (result && result[k] !== undefined) {
          result = result[k];
        } else {
          // Fallback to English if key missing in current language
          let fallback: any = translations["en"];
          for (const fk of keys) {
            if (fallback && fallback[fk] !== undefined) {
              fallback = fallback[fk];
            } else {
              return key; // Return key if not found at all
            }
          }
          return fallback;
        }
      }
      return result;
    },
    [language]
  );

  // Avoid hydration mismatch by only rendering children after mount if language depends on localStorage
  if (!isMounted) {
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    return {
      language: "en" as const,
      setLanguage: () => {},
      t: (key: string) => {
        const keys = key.split(".");
        let result: any = en;
        for (const k of keys) {
          if (result && result[k] !== undefined) {
            result = result[k];
          } else {
            return key;
          }
        }
        return result;
      },
    };
  }
  return context;
}
