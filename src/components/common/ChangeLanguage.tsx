"use client";

import { GlobeHemisphereWest } from "@phosphor-icons/react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "vi", label: "VI" },
] as const;

type Lang = (typeof LANGUAGES)[number]["code"];

function ChangeLanguage() {
  const [lang, setLang] = useState<Lang>("en");

  const next = LANGUAGES.find((l) => l.code !== lang)!;

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLang(next.code)}
      aria-label={`Switch language to ${next.label}`}
    >
      <GlobeHemisphereWest size={16} />
      {next.label}
    </Button>
  );
}

export { ChangeLanguage };
