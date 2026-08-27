"use client";

import { Award, GraduationCap, Grid3X3, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

import { ContentTab } from "@/constants/enum";

const tabs = [
  { label: ContentTab.PRODUCTS, icon: Grid3X3 },
  { label: ContentTab.SKILLS, icon: Sparkles },
  { label: ContentTab.CERTIFICATES, icon: GraduationCap },
  { label: ContentTab.ACHIEVEMENTS, icon: Award },
];

function ContentTabs({
  activeTab,
  onTabChange,
}: {
  activeTab: ContentTab;
  onTabChange: (tab: ContentTab) => void;
}) {
  return (
    <div className="flex border-t border-elevated-border bg-black/20">
      {tabs.map((tab) => (
        <button
          key={tab.label}
          onClick={() => onTabChange(tab.label)}
          className={cn(
            "relative flex flex-1 items-center justify-center gap-1.5 py-3 sm:py-4 text-[10px] sm:text-xs font-semibold uppercase tracking-wider transition-colors duration-200 cursor-pointer",
            activeTab === tab.label
              ? "text-foreground"
              : "text-secondary-text hover:text-foreground/80",
          )}
        >
          <tab.icon className="size-3.5 sm:size-4 shrink-0" />
          <span className="inline truncate">{tab.label}</span>
          {activeTab === tab.label && (
            <span className="absolute -top-px left-0 right-0 h-0.5 bg-foreground" />
          )}
        </button>
      ))}
    </div>
  );
}

export { ContentTabs };
