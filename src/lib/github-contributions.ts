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

const CONTRIBUTIONS_QUERY = `
  query ($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
              weekday
            }
          }
        }
      }
    }
  }
`;

function emptyContributions(
  source: GitHubContributions["source"],
): GitHubContributions {
  return {
    totalContributions: 0,
    weeks: [],
    year: new Date().getFullYear(),
    username: GITHUB_USERNAME,
    source,
    allDays: [],
    years: [new Date().getFullYear()],
  };
}

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

async function fetchContributionsFallback(): Promise<GitHubContributions> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}`,
      { next: { revalidate: 3600 } },
    );

    if (!res.ok) {
      return emptyContributions("fallback");
    }

    const json = (await res.json()) as {
      contributions?: Array<{ date: string; count: number }>;
    };

    const days: ContributionDay[] = (json.contributions ?? []).map((entry) => {
      const date = new Date(`${entry.date}T00:00:00Z`);
      return {
        date: entry.date,
        count: entry.count,
        weekday: date.getUTCDay(),
      };
    });

    days.sort((a, b) => a.date.localeCompare(b.date));

    if (!days.length) {
      return emptyContributions("fallback");
    }

    const uniqueYears = Array.from(
      new Set(days.map((d) => parseInt(d.date.slice(0, 4)))),
    ).sort((a, b) => b - a);

    return {
      totalContributions: totalContributionsInLastYear(days),
      weeks: buildWeeksFromDays(days),
      year: new Date().getFullYear(),
      username: GITHUB_USERNAME,
      source: "fallback",
      allDays: days,
      years: uniqueYears,
    };
  } catch (error) {
    console.error("Failed to fetch fallback GitHub contributions:", error);
    return emptyContributions("fallback");
  }
}

export async function fetchGitHubContributions(): Promise<GitHubContributions> {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return fetchContributionsFallback();
  }

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: CONTRIBUTIONS_QUERY,
        variables: { username: GITHUB_USERNAME },
      }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return fetchContributionsFallback();
    }

    const json = await res.json();

    if (json.errors?.length) {
      console.error("GitHub GraphQL errors:", json.errors);
      return fetchContributionsFallback();
    }

    const calendar =
      json.data?.user?.contributionsCollection?.contributionCalendar;

    if (!calendar) {
      return fetchContributionsFallback();
    }

    const weeks: ContributionWeek[] = (calendar.weeks ?? []).map(
      (week: {
        contributionDays: Array<{
          contributionCount: number;
          date: string;
          weekday: number;
        }>;
      }) => ({
        days: week.contributionDays.map((day) => ({
          date: day.date,
          count: day.contributionCount,
          weekday: day.weekday,
        })),
      }),
    );

    const allDays: ContributionDay[] = [];
    weeks.forEach((week) => {
      week.days.forEach((day) => {
        allDays.push(day);
      });
    });

    const uniqueYears = Array.from(
      new Set(allDays.map((d) => parseInt(d.date.slice(0, 4)))),
    ).sort((a, b) => b - a);

    return {
      totalContributions: calendar.totalContributions ?? 0,
      weeks,
      year: new Date().getFullYear(),
      username: GITHUB_USERNAME,
      source: "github-graphql",
      allDays,
      years: uniqueYears.length ? uniqueYears : [new Date().getFullYear()],
    };
  } catch (error) {
    console.error("Failed to fetch GitHub contributions:", error);
    return fetchContributionsFallback();
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
