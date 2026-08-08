import { NextResponse } from "next/server";

import { fetchGitHubContributions } from "@/lib/github-contributions";

export const dynamic = "force-dynamic";

export async function GET() {
  const data = await fetchGitHubContributions();

  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "no-store, must-revalidate",
    },
  });
}
