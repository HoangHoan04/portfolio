"use client";

import Link from "next/link";

import {
  CONTRIBUTION_LEVEL_CLASS,
  getContributionLevel,
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
  if (data.source === "fallback" && !data.weeks.length) {
    return (
      <div className="rounded-2xl border border-dashed border-zinc-700 bg-zinc-950/40 p-6 text-center">
        <p className="text-sm text-zinc-400">{setupHint}</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5 md:p-6">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-300">
          <span className="font-bold text-white">
            {data.totalContributions.toLocaleString()}
          </span>{" "}
          {summaryLabel}
        </p>
        <Link
          href={`https://github.com/${data.username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-blue-400 hover:text-blue-300"
        >
          @{data.username}
        </Link>
      </div>

      <div className="overflow-x-auto pb-1">
        <div className="inline-flex min-w-full gap-[3px]">
          <div className="mr-1 flex flex-col justify-between py-[2px] text-[10px] text-zinc-600">
            {WEEKDAY_LABELS.map((label, index) => (
              <span
                key={label}
                className={cn("h-[11px] leading-none", index % 2 === 0 ? "opacity-100" : "opacity-0 sm:opacity-100")}
              >
                {label}
              </span>
            ))}
          </div>

          <div className="flex gap-[3px]">
            {data.weeks.map((week, weekIndex) => (
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
                        CONTRIBUTION_LEVEL_CLASS[level],
                      )}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-end gap-2 text-[10px] text-zinc-500">
        <span>{lessLabel}</span>
        <div className="flex gap-1">
          {([0, 1, 2, 3, 4] as const).map((level) => (
            <span
              key={level}
              className={cn(
                "size-[11px] rounded-[2px] border",
                CONTRIBUTION_LEVEL_CLASS[level],
              )}
            />
          ))}
        </div>
        <span>{moreLabel}</span>
      </div>
    </div>
  );
}

export { ContributionGraph };
