"use client";

import { GraduationCap } from "@phosphor-icons/react";
import Link from "next/link";

import { certificates } from "@/constants/certificates";
import { useTranslation } from "@/contexts/locale-context";
import { cn } from "@/lib/utils";

function HomeCertificatesGrid() {
  const { t } = useTranslation();

  return (
    <div className="py-3">
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {certificates.map((cert) => (
          <Link
            key={cert.id}
            href="/education"
            className="group relative aspect-square w-full overflow-hidden rounded-xl border border-elevated-border bg-elevated/40 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-accent/40 hover:shadow-lg"
          >
            <div
              className={cn(
                "absolute inset-0 bg-linear-to-br opacity-85 transition-transform duration-500 group-hover:scale-105",
                cert.gradient,
              )}
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[15px_15px]" />
            <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/60 to-black/30" />

            <div className="relative z-10 flex size-full flex-col justify-between p-2.5 sm:p-3.5">
              <div className="flex items-center justify-between gap-1">
                <div className="flex size-8 sm:size-9 items-center justify-center rounded-lg border border-white/15 bg-black/40 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                  <GraduationCap
                    className="size-4 sm:size-5 text-white/90"
                    weight="duotone"
                  />
                </div>
                <span className="rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[8px] sm:text-[9px] font-medium text-white/90 backdrop-blur-md">
                  {cert.year}
                </span>
              </div>

              <div className="flex flex-col gap-0.5 sm:gap-1">
                <p className="line-clamp-2 text-xs sm:text-sm font-bold text-white transition-colors duration-200 group-hover:text-primary-accent">
                  {t(cert.titleKey)}
                </p>
                <p className="line-clamp-1 text-[9px] sm:text-xs text-white/70">
                  {t(cert.issuerKey)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-4 border-t border-elevated-border py-4 text-center">
        <Link
          href="/education"
          className="text-xs sm:text-sm font-semibold text-primary-accent hover:opacity-80"
        >
          {t("home.certificates.viewAll")} →
        </Link>
      </div>
    </div>
  );
}

export { HomeCertificatesGrid };
