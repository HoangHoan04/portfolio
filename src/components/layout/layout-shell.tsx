"use client";

import { MobileHeader } from "@/components/layout/mobile-header";
import { Sidebar } from "@/components/layout/sidebar";
import { BackToTop } from "@/components/ui/back-to-top";

function LayoutShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <MobileHeader />
      <Sidebar />
      <main className="pt-14 pb-20 md:pt-0 md:pb-8 md:pl-18">
        <div className="mx-auto max-w-233.75 px-0 py-4 md:py-8">{children}</div>
      </main>
      <BackToTop />
    </div>
  );
}

export { LayoutShell };
