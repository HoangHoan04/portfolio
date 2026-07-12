"use client";

import { Z_INDEX } from "@/constants/profile";
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-6 right-6 z-30 flex size-10 items-center justify-center rounded-full bg-elevated text-foreground shadow-lg transition-all duration-300 hover:bg-elevated-hover",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      )}
      style={{ zIndex: Z_INDEX.backToTop }}
      aria-label="Back to top"
    >
      <ArrowUp className="size-5" />
    </button>
  );
}
