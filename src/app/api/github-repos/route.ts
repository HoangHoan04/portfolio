import { NextResponse } from "next/server";
import type { GitHubRepo } from "@/types";

export type { GitHubRepo };

const GITHUB_USERNAME = "HoangHoan04";

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
      {
        headers,
        next: { revalidate: 3600 },
      },
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch repositories" },
        { status: res.status },
      );
    }

    const repos = await res.json();

    if (!Array.isArray(repos)) {
      return NextResponse.json({ repos: [] });
    }

    const formattedRepos: GitHubRepo[] = repos
      .filter((r: any) => r.name !== GITHUB_USERNAME)
      .map((r: any) => ({
        id: r.id,
        name: r.name,
        description: r.description,
        html_url: r.html_url,
        homepage: r.homepage && r.homepage.trim() !== "" ? r.homepage : null,
        language: r.language,
        stars: r.stargazers_count ?? 0,
        forks: r.forks_count ?? 0,
        updated_at: r.updated_at,
        topics: r.topics ?? [],
        is_fork: r.fork ?? false,
      }));

    return NextResponse.json({
      repos: formattedRepos,
      total: formattedRepos.length,
    });
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
