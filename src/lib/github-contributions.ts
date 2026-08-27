export const GITHUB_USERNAME = "HoangHoan04";

export type ContributionDay = {
  date: string;
  count: number;
  weekday: number;
};

export type ContributionWeek = {
  days: ContributionDay[];
};

export type GitHubContributions = {
  totalContributions: number;
  weeks: ContributionWeek[];
  year: number;
  username: string;
  source: "github-graphql" | "fallback";
  allDays: ContributionDay[];
  years: number[];
};

export function buildWeeksFromDays(
  days: ContributionDay[],
): ContributionWeek[] {
  if (!days.length) return [];

  const weeks: ContributionWeek[] = [];
  let currentWeek: ContributionDay[] = [];

  for (const day of days) {
    if (day.weekday === 0 && currentWeek.length > 0) {
      weeks.push({ days: currentWeek });
      currentWeek = [];
    }
    currentWeek.push(day);
  }

  if (currentWeek.length > 0) {
    weeks.push({ days: currentWeek });
  }

  return weeks.slice(-53);
}

export function totalContributionsInLastYear(days: ContributionDay[]): number {
  const cutoff = new Date();
  cutoff.setUTCHours(0, 0, 0, 0);
  cutoff.setUTCDate(cutoff.getUTCDate() - 364);
  const cutoffIso = cutoff.toISOString().slice(0, 10);

  return days
    .filter((day) => day.date >= cutoffIso)
    .reduce((sum, day) => sum + day.count, 0);
}

function emptyContributions(): GitHubContributions {
  return {
    totalContributions: 0,
    weeks: [],
    year: new Date().getFullYear(),
    username: GITHUB_USERNAME,
    source: "fallback",
    allDays: [],
    years: [new Date().getFullYear()],
  };
}

export async function fetchGitHubContributions(): Promise<GitHubContributions> {
  try {
    const isProd = process.env.NODE_ENV === "production";
    const basePath = isProd ? "/portfolio" : "";
    const res = await fetch(`${basePath}/api/github-contributions`);

    if (!res.ok) {
      return emptyContributions();
    }

    return (await res.json()) as GitHubContributions;
  } catch (error) {
    console.error("Failed to fetch contributions from API route:", error);
    return emptyContributions();
  }
}

export function getContributionLevel(count: number): 0 | 1 | 2 | 3 | 4 {
  if (count <= 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 9) return 3;
  return 4;
}

export const CONTRIBUTION_LEVEL_CLASS: Record<0 | 1 | 2 | 3 | 4, string> = {
  0: "bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800/80",
  1: "bg-emerald-100 dark:bg-emerald-950/80 border-emerald-200 dark:border-emerald-900/40",
  2: "bg-emerald-300 dark:bg-emerald-800/80 border-emerald-400 dark:border-emerald-800/40",
  3: "bg-emerald-500 dark:bg-emerald-600/90 border-emerald-600 dark:border-emerald-600/40",
  4: "bg-emerald-600 dark:bg-emerald-400 border-emerald-700 dark:border-emerald-400/70",
};
