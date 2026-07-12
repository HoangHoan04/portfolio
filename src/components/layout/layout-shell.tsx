"use client";

import { useCallback, useEffect, useState } from "react";

import { Sidebar } from "@/components/layout/sidebar";
import { BackToTop } from "@/components/ui/back-to-top";

function LayoutShell({ children }: { children: React.ReactNode }) {
  const [pinned, setPinned] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("sidebar_pinned");
    if (stored !== null) {
      setPinned(stored === "true");
    }
  }, []);

  const onToggle = useCallback(() => {
    setPinned((prev) => {
      const next = !prev;
      localStorage.setItem("sidebar_pinned", String(next));
      return next;
    });
  }, []);

  const expanded = pinned || hovered;

  return (
    <div className="min-h-screen">
      <Sidebar
        expanded={expanded}
        pinned={pinned}
        onToggle={onToggle}
        onHover={setHovered}
      />
      <main
        className={`pb-16 transition-[margin] duration-200 ease-out md:pb-0 ${
          pinned ? "md:ml-60" : "md:ml-0"
        }`}
      >
        <div className="mx-auto max-w-233.75 px-0 py-4 md:py-8">{children}</div>
      </main>
      <BackToTop />
    </div>
  );
}

export { LayoutShell };
