import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const basePath = process.env.NEXT_PUBLIC_EXPORT === "true" ? "/portfolio" : "";

export function getAssetPath(path: string) {
  if (path.startsWith("/")) {
    return `${basePath}${path}`;
  }
  return path;
}

