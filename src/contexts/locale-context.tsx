"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import en from "@/locales/en.json";
import vi from "@/locales/vi.json";

export type Locale = "en" | "vi";

type Messages = typeof en;

const messages: Record<Locale, Messages> = { en, vi };

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (key: string) => string;
  tList: (key: string) => string[];
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function getNestedValue(obj: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((current, key) => {
    if (current && typeof current === "object" && key in current) {
      return (current as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("vi");

  useEffect(() => {
    const stored = localStorage.getItem("locale");
    if (stored === "en" || stored === "vi") {
      setLocaleState(stored);
    }
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem("locale", next);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => {
      const next = prev === "en" ? "vi" : "en";
      localStorage.setItem("locale", next);
      return next;
    });
  }, []);

  const t = useCallback(
    (key: string): string => {
      const value = getNestedValue(messages[locale], key);
      return typeof value === "string" ? value : key;
    },
    [locale],
  );

  const tList = useCallback(
    (key: string): string[] => {
      const value = getNestedValue(messages[locale], key);
      return Array.isArray(value) ? (value as string[]) : [];
    },
    [locale],
  );

  const value = useMemo(
    () => ({ locale, setLocale, toggleLocale, t, tList }),
    [locale, setLocale, toggleLocale, t, tList],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}

function useTranslation() {
  const { t, tList, locale } = useLocale();
  return { t, tList, locale };
}

export { LocaleProvider, useLocale, useTranslation };
