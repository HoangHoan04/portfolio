import { NextResponse } from "next/server";

export async function GET() {
  let views = 0;
  let publicRepos = 0;

  try {
    const res = await fetch("https://komarev.com/ghpvc/?username=HoangHoan04", {
      cache: "no-store",
    });
    const svg = await res.text();
    const texts = [...svg.matchAll(/>(\d+)<\/text>/g)];
    views = texts.length > 0 ? Number(texts[texts.length - 1][1]) : 0;
  } catch {}

  try {
    const res = await fetch("https://api.github.com/users/HoangHoan04", {
      cache: "no-store",
      headers: { Accept: "application/vnd.github.v3+json" },
    });
    const data = await res.json();
    publicRepos = data.public_repos ?? 0;
  } catch {}

  return NextResponse.json({ views, publicRepos });
}
