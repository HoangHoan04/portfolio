"use client";

import Link from "next/link";

import { PostCard } from "./post-card";
import { portfolioProjects } from "@/constants/projects-data";

function PostGrid() {
  return (
    <div className="grid grid-cols-3 gap-1 md:gap-1">
      {portfolioProjects.map((project, index) => (
        <Link key={project.id} href={`/post/${project.id}`} scroll={false}>
          <PostCard project={project} priority={index === 0} />
        </Link>
      ))}
    </div>
  );
}

export { PostGrid };
