import { getProjectIcon } from "@/constants/icons";
import type { PortfolioProject } from "@/constants/projects-data";
import { useTranslation } from "@/contexts/locale-context";
import { cn } from "@/lib/utils";
import NextImage from "next/image";

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

function PostCard({
  project,
  priority = false,
}: {
  project: PortfolioProject;
  priority?: boolean;
}) {
  const { t } = useTranslation();
  const title = t(project.titleKey);
  const categoryLabel =
    project.category === "fullstack"
      ? "Full-Stack"
      : project.category === "frontend"
        ? "Frontend"
        : "Backend";
  const gradient =
    project.gradient || gradients[Number(project.id) % gradients.length];
  const iconSrc = getProjectIcon(project.technologies);

  return (
    <div className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl border border-elevated-border bg-elevated/40 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-accent/30 hover:shadow-md">
      <div
        className={cn(
          "relative flex size-full items-center justify-center overflow-hidden bg-linear-to-br",
          gradient,
        )}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[15px_15px]" />
        <div className="relative z-10 flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:opacity-0">
          <NextImage
            src={iconSrc}
            alt={title}
            width={32}
            height={32}
            className="object-contain"
          />
        </div>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-black/0 p-4 text-center opacity-0 transition-all duration-300 group-hover:bg-black/75 group-hover:opacity-100">
        <span className="text-sm font-bold text-white transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          {title}
        </span>
        <span className="text-[11px] font-medium tracking-wider uppercase text-primary-accent transform translate-y-2 group-hover:translate-y-0 delay-75">
          {categoryLabel}
        </span>
        <div className="mt-2 flex flex-wrap justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded bg-white/10 px-1.5 py-0.5 text-[9px] font-semibold text-white/90 backdrop-blur-xs"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="rounded bg-white/20 px-1 py-0.5 text-[9px] font-bold text-white/90">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export { PostCard };
