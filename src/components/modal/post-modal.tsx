"use client";

import { ArrowSquareOut, GithubLogo, X } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Image } from "@/components/ui/image";
import { projects } from "@/constants/project";

function PostDetailContent({ id }: { id: string }) {
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div className="py-20 text-center text-[#737373]">Project not found</div>;
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[#262626] bg-[#121212]">
      <div className="flex flex-col md:flex-row">
        <div className="relative aspect-square w-full shrink-0 bg-[#1a1a1a] md:w-[50%]">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            containerClassName="relative size-full min-h-[280px]"
            fallback={project.title[0]}
          />
        </div>
        <div className="flex flex-1 flex-col p-5 md:p-8">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#0095f6]">
            {project.type}
          </p>
          <h1 className="mb-4 text-2xl font-bold">{project.title}</h1>
          <p className="mb-6 leading-relaxed text-[#a8a8a8]">{project.description}</p>
          <div className="mb-8 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#262626] px-3 py-1 text-xs text-[#737373]"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {project.link_github[0] && (
              <a
                href={project.link_github[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#262626] px-4 py-2 text-sm transition-colors hover:border-[#0095f6]/50"
              >
                <GithubLogo className="size-4" />
                GitHub
              </a>
            )}
            {project.link_demo && (
              <a
                href={project.link_demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#0095f6] px-4 py-2 text-sm text-white hover:bg-[#1877f2]"
              >
                <ArrowSquareOut className="size-4" />
                Demo
              </a>
            )}
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg border border-[#262626] px-4 py-2 text-sm hover:border-[#0095f6]/50"
            >
              All projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function PostModal({ id }: { id: string }) {
  const router = useRouter();
  const project = projects.find((p) => p.id === id);

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/75 backdrop-blur-sm md:items-center md:p-4">
      <button
        type="button"
        className="absolute inset-0"
        aria-label="Close modal"
        onClick={() => router.back()}
      />
      <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-t-2xl border border-[#262626] bg-black shadow-2xl md:rounded-2xl">
        <button
          type="button"
          onClick={() => router.back()}
          className="absolute right-3 top-3 z-20 rounded-full bg-black/60 p-1.5 text-white hover:bg-black"
          aria-label="Close"
        >
          <X className="size-5" />
        </button>
        {!project ? (
          <div className="p-8 text-center text-[#737373]">Project not found</div>
        ) : (
          <PostDetailContent id={id} />
        )}
      </div>
    </div>
  );
}

export { PostDetailContent, PostModal };
