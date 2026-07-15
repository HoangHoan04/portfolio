"use client"

import { Image } from "@/components/ui/image"
import type { Project } from "@/types"

const gradients = [
  "from-rose-400 to-pink-500",
  "from-cyan-400 to-blue-500",
  "from-amber-400 to-orange-500",
  "from-violet-400 to-purple-500",
  "from-emerald-400 to-teal-500",
  "from-indigo-400 to-blue-600",
  "from-fuchsia-400 to-pink-600",
  "from-lime-400 to-green-500",
  "from-sky-400 to-cyan-600",
]

function PostCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  const gradient = gradients[Number(project.id) % gradients.length]

  return (
    <div className="group relative aspect-square cursor-pointer overflow-hidden bg-[#1a1a1a]">
      <Image
        src={project.thumbnail}
        alt={project.title}
        fill
        priority={priority}
        sizes="(max-width: 768px) 33vw, 300px"
        className={`bg-linear-to-br ${gradient} object-cover transition-transform duration-300 group-hover:scale-105`}
        containerClassName="relative size-full"
        fallback={project.title[0]}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/0 p-4 text-center transition-all duration-300 group-hover:bg-black/50">
        <span className="text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
          {project.title}
        </span>
        <span className="text-xs text-white/60 opacity-0 transition-all duration-300 group-hover:opacity-100">
          {project.type}
        </span>
      </div>
    </div>
  )
}

export { PostCard }
