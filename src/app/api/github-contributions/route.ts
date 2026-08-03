import { NextResponse } from "next/server";

import { fetchGitHubContributions } from "@/lib/github-contributions";

export const revalidate = 3600;

export async function GET() {
  const data = await fetchGitHubContributions();

  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
