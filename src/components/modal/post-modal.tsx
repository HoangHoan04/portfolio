"use client";

import { ArrowSquareOut, GithubLogo, X } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { portfolioProjects } from "@/constants/projects-data";
import { useTranslation } from "@/contexts/locale-context";

import NextImage from "next/image";
import { getProjectIcon } from "@/constants/icons";
import { cn } from "@/lib/utils";

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
];

function PostDetailContent({ id }: { id: string }) {
  const { t } = useTranslation();
  const project = portfolioProjects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="py-20 text-center text-secondary-text">
        Project not found
      </div>
    );
  }

  const gradient =
    project.gradient || gradients[Number(project.id) % gradients.length];
  const iconSrc = getProjectIcon(project.technologies);
  const title = t(project.titleKey);
  const description = t(project.descKey);
  const categoryLabel =
    project.category === "fullstack"
      ? "Full-Stack"
      : project.category === "frontend"
        ? "Frontend"
        : "Backend";

  return (
    <div className="overflow-hidden rounded-2xl border border-elevated-border bg-elevated">
      <div className="flex flex-col md:flex-row">
        <div className="relative aspect-square w-full shrink-0 bg-elevated-hover md:w-[50%] flex items-center justify-center">
          <div
            className={cn(
              "relative flex size-full items-center justify-center overflow-hidden bg-linear-to-br min-h-[280px]",
              gradient,
            )}
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[20px_20px]" />
            <div className="relative z-10 flex size-24 items-center justify-center rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm shadow-xl">
              <NextImage
                src={iconSrc}
                alt={title}
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-5 md:p-8">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-primary-accent">
            {categoryLabel}
          </p>
          <h1 className="mb-4 text-2xl font-bold">{title}</h1>
          <p className="mb-6 leading-relaxed text-secondary-text">
            {description}
          </p>
          <div className="mb-8 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-elevated-border px-3 py-1 text-xs text-secondary-text"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {project.github.map((repo, idx) => (
              <a
                key={idx}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-elevated-border px-4 py-2 text-sm transition-colors hover:border-primary-accent/50"
              >
                <GithubLogo className="size-4" />
                {t(repo.labelKey)}
              </a>
            ))}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-yellow-400 via-red-500 to-purple-600 px-4 py-2 text-sm text-white hover:opacity-90"
              >
                <ArrowSquareOut className="size-4" />
                Demo
              </a>
            )}
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg border border-elevated-border px-4 py-2 text-sm hover:border-primary-accent/50"
            >
              All projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function PostModal({ id, onClose }: { id: string; onClose?: () => void }) {
  const router = useRouter();
  const project = portfolioProjects.find((p) => p.id === id);
  const handleClose = onClose || (() => router.back());

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/75 backdrop-blur-sm md:items-center md:p-4">
      <button
        type="button"
        className="absolute inset-0"
        aria-label="Close modal"
        onClick={handleClose}
      />
      <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-t-2xl border border-elevated-border bg-background shadow-2xl md:rounded-2xl">
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-3 top-3 z-20 rounded-full bg-black/60 p-1.5 text-white hover:bg-black"
          aria-label="Close"
        >
          <X className="size-5" />
        </button>
        {!project ? (
          <div className="p-8 text-center text-secondary-text">
            Project not found
          </div>
        ) : (
          <PostDetailContent id={id} />
        )}
      </div>
    </div>
  );
}

export { PostDetailContent, PostModal };
