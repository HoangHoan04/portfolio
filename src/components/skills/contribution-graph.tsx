"use client";

import Link from "next/link";

import { useState, useMemo } from "react";

import {
  CONTRIBUTION_LEVEL_CLASS,
  getContributionLevel,
  buildWeeksFromDays,
  type GitHubContributions,
} from "@/lib/github-contributions";
import { cn } from "@/lib/utils";

const WEEKDAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function ContributionGraph({
  data,
  summaryLabel,
  lessLabel,
  moreLabel,
  setupHint,
}: {
  data: GitHubContributions;
  summaryLabel: string;
  lessLabel: string;
  moreLabel: string;
  setupHint?: string;
}) {
  const [selectedYear, setSelectedYear] = useState<number | "lastYear">("lastYear");

  const { filteredWeeks, totalContributions } = useMemo(() => {
    if (!data.allDays || data.allDays.length === 0) {
      return { filteredWeeks: data.weeks, totalContributions: data.totalContributions };
    }

    if (selectedYear === "lastYear") {
      const cutoff = new Date();
      cutoff.setUTCHours(0, 0, 0, 0);
      cutoff.setUTCDate(cutoff.getUTCDate() - 364);
      const cutoffIso = cutoff.toISOString().slice(0, 10);

      const days = data.allDays.filter((day) => day.date >= cutoffIso);
      return {
        filteredWeeks: buildWeeksFromDays(days),
        totalContributions: days.reduce((sum, day) => sum + day.count, 0),
      };
    } else {
      const yearStr = selectedYear.toString();
      const days = data.allDays.filter((day) => day.date.startsWith(yearStr));
      return {
        filteredWeeks: buildWeeksFromDays(days),
        totalContributions: days.reduce((sum, day) => sum + day.count, 0),
      };
    }
  }, [selectedYear, data.allDays, data.weeks, data.totalContributions]);

  const monthLabels = useMemo(() => {
    const labels: { index: number; label: string }[] = [];
    let lastMonth = -1;

    filteredWeeks.forEach((week, index) => {
      const firstDay = week.days.find((d) => d.date);
      if (firstDay) {
        const dateObj = new Date(`${firstDay.date}T00:00:00Z`);
        const month = dateObj.getUTCMonth();
        if (month !== lastMonth) {
          const monthName = dateObj.toLocaleString("en-US", { month: "short" });
          labels.push({ index, label: monthName });
          lastMonth = month;
        }
      }
    });

    return labels;
  }, [filteredWeeks]);

  if (data.source === "fallback" && !data.weeks.length) {
    return (
      <div className="rounded-2xl border border-dashed border-elevated-border bg-elevated/40 p-6 text-center">
        <p className="text-sm text-secondary-text">{setupHint}</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-elevated-border bg-elevated/40 p-5 md:p-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
        <div className="flex-1 min-w-0">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-secondary-text">
              <span className="font-bold text-foreground">
                {totalContributions.toLocaleString()}
              </span>{" "}
              {selectedYear === "lastYear" ? summaryLabel : `contributions in ${selectedYear}`}
            </p>
            <Link
              href={`https://github.com/${data.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-primary-accent hover:opacity-90"
            >
              @{data.username}
            </Link>
          </div>

          <div className="overflow-x-auto pb-1">
            <div className="inline-flex flex-col">
              {/* Months row */}
              <div className="flex h-5 items-end text-[10px] text-secondary-text select-none mb-1">
                <div className="w-8 shrink-0 mr-1" />
                <div className="relative h-full" style={{ width: `${filteredWeeks.length * 14}px` }}>
                  {monthLabels.map(({ index, label }) => (
                    <span
                      key={`${label}-${index}`}
                      className="absolute bottom-0 leading-none whitespace-nowrap"
                      style={{ left: `${index * 14}px` }}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Grid content */}
              <div className="inline-flex gap-[3px]">
                <div className="w-8 shrink-0 mr-1 flex flex-col justify-between py-[2px] text-[10px] text-secondary-text">
                  {WEEKDAY_LABELS.map((label, index) => (
                    <span
                      key={label}
                      className={cn(
                        "h-[11px] leading-none",
                        index % 2 === 0 ? "opacity-100" : "opacity-0 sm:opacity-100"
                      )}
                    >
                      {label}
                    </span>
                  ))}
                </div>

                <div className="flex gap-[3px]">
                  {filteredWeeks.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-[3px]">
                      {Array.from({ length: 7 }).map((_, weekday) => {
                        const day = week.days.find((d) => d.weekday === weekday);
                        if (!day) {
                          return (
                            <span
                              key={`${weekIndex}-${weekday}`}
                              className="size-[11px] rounded-[2px] border border-transparent bg-transparent"
                            />
                          );
                        }

                        const level = getContributionLevel(day.count);

                        return (
                          <span
                            key={day.date}
                            title={`${day.count} contributions on ${day.date}`}
                            className={cn(
                              "size-[11px] rounded-[2px] border transition-transform hover:scale-125 hover:z-10",
                              CONTRIBUTION_LEVEL_CLASS[level]
                            )}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-end gap-2 text-[10px] text-secondary-text">
            <span>{lessLabel}</span>
            <div className="flex gap-1">
              {([0, 1, 2, 3, 4] as const).map((level) => (
                <span
                  key={level}
                  className={cn(
                    "size-[11px] rounded-[2px] border",
                    CONTRIBUTION_LEVEL_CLASS[level]
                  )}
                />
              ))}
            </div>
            <span>{moreLabel}</span>
          </div>
        </div>

        {data.years && data.years.length > 0 && (
          <div className="flex flex-row flex-wrap gap-1.5 lg:flex-col lg:gap-1.5 shrink-0 self-start lg:w-28 w-full">
            <button
              onClick={() => setSelectedYear("lastYear")}
              className={cn(
                "rounded-lg px-3 py-1.5 text-xs font-bold transition-all text-left lg:w-full",
                selectedYear === "lastYear"
                  ? "bg-linear-to-r from-yellow-400 via-red-500 to-purple-600 text-white"
                  : "bg-elevated text-secondary-text hover:bg-elevated-hover hover:text-foreground border border-elevated-border"
              )}
            >
              Last Year
            </button>
            {data.years.map((y) => (
              <button
                key={y}
                onClick={() => setSelectedYear(y)}
                className={cn(
                  "rounded-lg px-3 py-1.5 text-xs font-bold transition-all text-left lg:w-full",
                  selectedYear === y
                    ? "bg-linear-to-r from-yellow-400 via-red-500 to-purple-600 text-white"
                    : "bg-elevated text-secondary-text hover:bg-elevated-hover hover:text-foreground border border-elevated-border"
                )}
              >
                {y}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export { ContributionGraph };
