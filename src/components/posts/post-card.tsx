import { getProjectIcon } from "@/constants/icons";
import type { PortfolioProject } from "@/constants/projects-data";
import { useTranslation } from "@/contexts/locale-context";
import { cn } from "@/lib/utils";
import NextImage from "next/image";

const gradients = [
  "from-rose-500/25 to-pink-600/25",
  "from-cyan-500/25 to-blue-600/25",
  "from-amber-500/25 to-orange-600/25",
  "from-violet-500/25 to-purple-600/25",
  "from-emerald-500/25 to-teal-600/25",
  "from-indigo-500/25 to-blue-700/25",
  "from-fuchsia-500/25 to-pink-700/25",
  "from-lime-500/25 to-green-600/25",
  "from-sky-500/25 to-cyan-700/25",
];

function PostCard({
  project,
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
    <div className="group relative aspect-square w-full cursor-pointer overflow-hidden rounded-xl border border-elevated-border bg-elevated/40 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-accent/40 hover:shadow-lg">
      <div
        className={cn(
          "absolute inset-0 bg-linear-to-br transition-transform duration-500 group-hover:scale-105",
          gradient,
        )}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[15px_15px]" />
      <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/60 to-black/30" />

      <div className="relative z-10 flex size-full flex-col justify-between p-2.5 sm:p-3.5">
        <div className="flex items-center justify-between gap-1.5">
          <div className="flex size-8 sm:size-9 items-center justify-center rounded-lg border border-white/15 bg-black/40 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
            <NextImage
              src={iconSrc}
              alt={title}
              width={24}
              height={24}
              className="size-5 sm:size-6 object-contain"
            />
          </div>
          <span className="rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[8px] sm:text-[9px] font-semibold uppercase tracking-wider text-primary-accent backdrop-blur-md">
            {categoryLabel}
          </span>
        </div>

        <div className="flex flex-col gap-1 sm:gap-1.5">
          <h3 className="line-clamp-2 text-xs sm:text-sm font-bold text-white transition-colors duration-200 group-hover:text-primary-accent">
            {title}
          </h3>

          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded border border-white/10 bg-black/50 px-1.5 py-0.5 text-[8px] sm:text-[9px] font-medium text-white/90 backdrop-blur-xs"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="rounded border border-white/10 bg-black/50 px-1 py-0.5 text-[8px] sm:text-[9px] font-medium text-white/60">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export { PostCard };
