"use client";

import Link from "next/link";

import { PostCard } from "./post-card";
import { portfolioProjects } from "@/constants/projects-data";

interface PostGridProps {
  onSelectProject?: (id: string) => void;
}

function PostGrid({ onSelectProject }: PostGridProps) {
  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-3 py-3">
      {portfolioProjects.map((project, index) => {
        if (onSelectProject) {
          return (
            <button
              key={project.id}
              onClick={() => onSelectProject(project.id)}
              className="text-left w-full cursor-pointer border-none bg-transparent p-0"
            >
              <PostCard project={project} priority={index === 0} />
            </button>
          );
        }
        return (
          <Link key={project.id} href={`/post/${project.id}`} scroll={false}>
            <PostCard project={project} priority={index === 0} />
          </Link>
        );
      })}
    </div>
  );
}

export { PostGrid };
