"use client";

import { GraduationCap } from "@phosphor-icons/react";
import Link from "next/link";

import { certificates } from "@/constants/certificates";
import { useTranslation } from "@/contexts/locale-context";
import { cn } from "@/lib/utils";

function HomeCertificatesGrid() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="grid grid-cols-2 gap-1 md:grid-cols-3 md:gap-1">
        {certificates.map((cert) => (
          <Link
            key={cert.id}
            href="/education"
            className="group relative aspect-square overflow-hidden bg-[#1a1a1a]"
          >
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-br transition-transform duration-300 group-hover:scale-105",
                cert.gradient,
              )}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/0 p-3 text-center transition-all group-hover:bg-black/40">
              <GraduationCap
                className="mb-2 size-8 text-white/90 opacity-100 transition-opacity group-hover:opacity-100"
                weight="duotone"
              />
              <p className="line-clamp-2 text-xs font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">
                {t(cert.titleKey)}
              </p>
              <p className="mt-1 text-[10px] text-white/70 opacity-0 transition-opacity group-hover:opacity-100">
                {cert.year}
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 md:hidden">
              <p className="line-clamp-1 text-[10px] font-semibold">{t(cert.titleKey)}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="border-t border-[#262626] py-4 text-center">
        <Link
          href="/education"
          className="text-sm font-semibold text-[#0095f6] hover:text-[#1877f2]"
        >
          {t("home.certificates.viewAll")}
        </Link>
      </div>
    </div>
  );
}

export { HomeCertificatesGrid };
