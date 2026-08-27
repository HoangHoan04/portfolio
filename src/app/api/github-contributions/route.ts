import { NextResponse } from "next/server";

const GITHUB_USERNAME = "HoangHoan04";

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

function buildWeeksFromDays(days: ContributionDay[]): ContributionWeek[] {
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

function totalContributionsInLastYear(days: ContributionDay[]): number {
  const cutoff = new Date();
  cutoff.setUTCHours(0, 0, 0, 0);
  cutoff.setUTCDate(cutoff.getUTCDate() - 364);
  const cutoffIso = cutoff.toISOString().slice(0, 10);

  return days
    .filter((day) => day.date >= cutoffIso)
    .reduce((sum, day) => sum + day.count, 0);
}

async function fetchFromVercelApi(): Promise<ContributionDay[] | null> {
  try {
    const res = await fetch(
      `https://github-contributions.vercel.app/api/v1/${GITHUB_USERNAME}`,
      {
        signal: AbortSignal.timeout(6000),
        cache: "no-store",
      },
    );

    if (!res.ok) return null;

    const json = (await res.json()) as {
      contributions?: Array<{ date: string; count: number }>;
    };

    if (!json.contributions || !Array.isArray(json.contributions)) return null;

    const days: ContributionDay[] = json.contributions.map((entry) => {
      const date = new Date(`${entry.date}T00:00:00Z`);
      return {
        date: entry.date,
        count: entry.count || 0,
        weekday: date.getUTCDay(),
      };
    });

    days.sort((a, b) => a.date.localeCompare(b.date));
    return days.length ? days : null;
  } catch {
    return null;
  }
}

async function fetchFromJoGruberApi(): Promise<ContributionDay[] | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}`,
      {
        signal: AbortSignal.timeout(6000),
        cache: "no-store",
      },
    );

    if (!res.ok) return null;

    const json = (await res.json()) as {
      contributions?: Array<{ date: string; count: number }>;
      error?: string;
    };

    if (
      json.error ||
      !json.contributions ||
      !Array.isArray(json.contributions)
    ) {
      return null;
    }

    const days: ContributionDay[] = json.contributions.map((entry) => {
      const date = new Date(`${entry.date}T00:00:00Z`);
      return {
        date: entry.date,
        count: entry.count || 0,
        weekday: date.getUTCDay(),
      };
    });

    days.sort((a, b) => a.date.localeCompare(b.date));
    return days.length ? days : null;
  } catch {
    return null;
  }
}

async function fetchFallback(): Promise<GitHubContributions> {
  let days = await fetchFromVercelApi();

  if (!days || !days.length) {
    days = await fetchFromJoGruberApi();
  }

  if (!days || !days.length) {
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
    years: uniqueYears.length ? uniqueYears : [new Date().getFullYear()],
  };
}

export async function GET() {
  const token = process.env.GITHUB_TOKEN;

  if (token) {
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
        cache: "no-store",
      });

      if (res.ok) {
        const json = await res.json();
        const calendar =
          json.data?.user?.contributionsCollection?.contributionCalendar;

        if (calendar) {
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

          return NextResponse.json({
            totalContributions: calendar.totalContributions ?? 0,
            weeks,
            year: new Date().getFullYear(),
            username: GITHUB_USERNAME,
            source: "github-graphql",
            allDays,
            years: uniqueYears.length
              ? uniqueYears
              : [new Date().getFullYear()],
          });
        }
      }
    } catch {}
  }

  const fallbackData = await fetchFallback();
  return NextResponse.json(fallbackData);
}
