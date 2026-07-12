"use client";

import { projects } from "@/constants/project";
import { PostCard } from "./post-card";

function PostGrid() {
  return (
    <div className="grid grid-cols-3 gap-1 md:gap-1">
      {projects.map((project) => (
        <PostCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export { PostGrid };
