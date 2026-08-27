"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { BackToTop } from "@/components/ui/back-to-top";

function LayoutShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="pb-16 md:pb-0 md:pl-18">
        <div className="mx-auto max-w-233.75 px-0 py-4 md:py-8">{children}</div>
      </main>
      <BackToTop />
    </div>
  );
}

export { LayoutShell };
