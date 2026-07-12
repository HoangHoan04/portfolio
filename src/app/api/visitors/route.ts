import { readFile, writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import { join } from "path";

const file = join(process.cwd(), "data", "visitors.json");

async function readCount(): Promise<number> {
  try {
    const data = await readFile(file, "utf-8");
    return JSON.parse(data).count;
  } catch {
    return 0;
  }
}

async function writeCount(count: number) {
  await writeFile(file, JSON.stringify({ count }), "utf-8");
}

export async function GET() {
  const count = await readCount();
  return NextResponse.json({ count });
}

export async function POST() {
  const count = await readCount();
  const next = count + 1;
  await writeCount(next);
  return NextResponse.json({ count: next });
}
