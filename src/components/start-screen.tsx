"use client";

import { useCallback, useEffect, useState } from "react";

export function StartScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"loading" | "ready" | "splitting">(
    "loading",
  );
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (phase !== "loading") return;
    const duration = 2200;
    const start = performance.now();
    let raf: number;

    function tick(now: number) {
      const elapsed = now - start;
      const p = Math.min((elapsed / duration) * 100, 100);
      setProgress(p);
      if (p < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setPhase("ready");
      }
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [phase]);

  const handleEnter = useCallback(() => {
    if (phase === "ready") setPhase("splitting");
  }, [phase]);

  useEffect(() => {
    if (phase !== "ready") return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Enter") handleEnter();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, handleEnter]);

  useEffect(() => {
    if (phase !== "splitting") return;
    const timer = setTimeout(onComplete, 700);
    return () => clearTimeout(timer);
  }, [phase, onComplete]);

  return (
    <div className="fixed inset-0 z-50">
      <div
        className={`absolute inset-y-0 left-0 z-10 w-1/2 bg-linear-to-r from-[#0a0a0a] to-[#0d2137] transition-transform duration-700 ease-in-out ${
          phase === "splitting" ? "-translate-x-full" : ""
        }`}
      />
      <div
        className={`absolute inset-y-0 right-0 z-10 w-1/2 bg-linear-to-l from-[#0a0a0a] to-[#2d0a37] transition-transform duration-700 ease-in-out ${
          phase === "splitting" ? "translate-x-full" : ""
        }`}
      />

      <div className="relative z-20 flex h-full flex-col items-center justify-center gap-6">
        <h1 className="text-3xl font-bold tracking-tight">Hoàng Đình Hoan</h1>
        <p className="text-sm text-[#737373]">Senior Frontend Engineer</p>

        <div
          className={`transition-opacity duration-500 ${
            phase === "loading" ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="h-0.5 w-48 overflow-hidden rounded-full bg-[#262626]">
            <div
              className="h-full rounded-full bg-white transition-[width] duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <button
          onClick={handleEnter}
          className={`text-sm text-[#737373] transition-opacity duration-500 ${
            phase === "ready" ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <span className="animate-pulse">Press Enter to continue</span>
        </button>
      </div>
    </div>
  );
}
