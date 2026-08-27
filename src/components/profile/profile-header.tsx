"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AvatarImage } from "@/components/ui/image";
import { icons } from "@/constants/icons";
import { profile } from "@/constants/profile";
import { useTranslation } from "@/contexts/locale-context";
import { getAssetPath } from "@/lib/utils";

function Avatar({ size }: { size: number }) {
  if (profile.avatar) {
    return (
      <AvatarImage
        src={profile.avatar}
        alt={profile.username}
        width={size}
        height={size}
        containerClassName="rounded-full"
        className="rounded-full object-cover"
        fallback={profile.username[0].toUpperCase()}
      />
    );
  }

  return (
    <div
      className="flex items-center justify-center rounded-full bg-linear-to-br from-zinc-700 to-zinc-800 text-lg font-semibold text-white"
      style={{ width: size, height: size }}
    >
      {profile.username[0].toUpperCase()}
    </div>
  );
}

function ProfileHeader() {
  const { t } = useTranslation();
  const [githubViews, setGithubViews] = useState(profile.githubViewers);
  const [visitors, setVisitors] = useState(profile.visitors);
  const [publicRepos, setPublicRepos] = useState(profile.project);

  useEffect(() => {
    fetch("/api/github-views")
      .then((r) => r.json())
      .then((d) => {
        if (d.views) setGithubViews(d.views);
        if (d.publicRepos) setPublicRepos(d.publicRepos);
      })
      .catch(() => {
        fetch("https://api.github.com/users/HoangHoan04")
          .then((r) => r.json())
          .then((d) => {
            if (d.public_repos) setPublicRepos(d.public_repos);
          })
          .catch(() => {});
      });
  }, []);

  useEffect(() => {
    fetch("/api/visitors")
      .then((r) => r.json())
      .then((d) => setVisitors(d.count))
      .catch(() => {});
    fetch("/api/visitors", { method: "POST" })
      .then((r) => r.json())
      .then((d) => setVisitors(d.count))
      .catch(() => {});
  }, []);

  return (
    <>
      <div className="hidden md:flex md:flex-row md:items-center md:gap-24 md:pb-8">
        <div className="flex shrink-0 justify-center">
          <div className="rounded-full bg-linear-to-tr from-yellow-400 via-red-500 to-purple-600 p-0.75">
            <div className="rounded-full bg-avatar-border-bg p-0.5">
              <Avatar size={200} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-start text-sm leading-relaxed gap-1.5">
            <h1 className="text-xl md:text-lg font-bold tracking-tight">
              {profile.fullName} —{" "}
              <small className="font-normal">{profile.username}</small>
            </h1>

            <Badge>{t("profile.jobTitle")}</Badge>

            <div className="flex items-center gap-6 py-2">
              <div className="flex items-center gap-2 text-center">
                <strong className="block text-base font-semibold">
                  {profile.experience}
                </strong>
                <span className="text-xs text-secondary-text">
                  {t("profile.yearsExp")}
                </span>
              </div>
              <div className="flex items-center gap-2 text-center">
                <strong className="block text-base font-semibold">
                  {publicRepos}
                </strong>
                <span className="text-xs text-secondary-text">
                  {t("profile.githubProjects")}
                </span>
              </div>
              <div className="flex items-center gap-2 text-center">
                <strong className="block text-base font-semibold">
                  {visitors.toLocaleString("en-US")}
                </strong>
                <span className="text-xs text-secondary-text">
                  {t("profile.visitors")}
                </span>
              </div>
              <div className="flex items-center gap-2 text-center">
                <strong className="block text-base font-semibold">
                  {githubViews.toLocaleString("en-US")}
                </strong>
                <span className="text-xs text-secondary-text">
                  {t("profile.githubViewers")}
                </span>
              </div>
            </div>

            <p className="whitespace-pre-line font-normal">
              {t("profile.bio")}
            </p>

            <div className="flex items-center gap-3.5 mt-2">
              <Link
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl border border-elevated-border bg-elevated/70 px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:border-primary-accent/50 hover:bg-elevated hover:shadow-xs shadow-2xs cursor-pointer"
              >
                <Image
                  src={icons.github}
                  alt="GitHub"
                  width={15}
                  height={15}
                  className="dark:invert transition-transform group-hover:scale-110 object-contain"
                />
                <span>GitHub</span>
              </Link>
              <Link
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl border border-elevated-border bg-elevated/70 px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:border-blue-500/50 hover:bg-elevated hover:shadow-xs shadow-2xs cursor-pointer"
              >
                <Image
                  src={icons.linkedin}
                  alt="LinkedIn"
                  width={15}
                  height={15}
                  className="transition-transform group-hover:scale-110 object-contain"
                />
                <span>LinkedIn</span>
              </Link>
              <Link
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 rounded-xl border border-elevated-border bg-elevated/70 px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:border-red-500/50 hover:bg-elevated hover:shadow-xs shadow-2xs cursor-pointer"
              >
                <Image
                  src={icons.gmail}
                  alt="Gmail"
                  width={15}
                  height={15}
                  className="transition-transform group-hover:scale-110 object-contain"
                />
                <span>Email</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 pb-4 md:hidden">
        <div className="flex items-center gap-4 px-4">
          <div className="rounded-full bg-linear-to-tr from-yellow-400 via-red-500 to-purple-600 p-0.5">
            <div className="rounded-full bg-avatar-border-bg p-0.5">
              <Avatar size={96} />
            </div>
          </div>
          <div className="flex flex-1 justify-around text-center">
            <div>
              <strong className="block text-base font-semibold">
                {publicRepos}
              </strong>
              <span className="text-xs text-secondary-text">
                {t("nav.projects")}
              </span>
            </div>
            <div>
              <strong className="block text-base font-semibold">
                {visitors.toLocaleString("en-US")}
              </strong>
              <span className="text-xs text-secondary-text">
                {t("profile.visitors")}
              </span>
            </div>
            <div>
              <strong className="block text-base font-semibold">
                {githubViews.toLocaleString("en-US")}
              </strong>
              <span className="text-xs text-secondary-text">GitHub</span>
            </div>
            <div>
              <strong className="block text-base font-semibold">
                {profile.experience}
              </strong>
              <span className="text-xs text-secondary-text">
                {t("profile.years")}
              </span>
            </div>
          </div>
        </div>

        <div className="px-4 text-sm">
          <h1 className="font-semibold">{profile.fullName}</h1>
          <span className="block font-semibold text-secondary-text">
            {t("profile.jobTitle")}
          </span>
          <span className="block text-secondary-text">@{profile.username}</span>
          {t("profile.bio")
            .split("\n")
            .map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}

          <div className="flex items-center gap-2 mt-3">
            <Link
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-elevated-border bg-elevated/80 px-2.5 py-1 text-xs font-semibold text-foreground hover:border-primary-accent/40"
            >
              <Image
                src={icons.github}
                alt="GitHub"
                width={14}
                height={14}
                className="dark:invert object-contain"
              />
              <span>GitHub</span>
            </Link>
            <Link
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-elevated-border bg-elevated/80 px-2.5 py-1 text-xs font-semibold text-foreground hover:border-blue-500/40"
            >
              <Image
                src={icons.linkedin}
                alt="LinkedIn"
                width={14}
                height={14}
                className="object-contain"
              />
              <span>LinkedIn</span>
            </Link>
            <Link
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-elevated-border bg-elevated/80 px-2.5 py-1 text-xs font-semibold text-foreground hover:border-red-500/40"
            >
              <Image
                src={icons.gmail}
                alt="Gmail"
                width={14}
                height={14}
                className="object-contain"
              />
              <span>Email</span>
            </Link>
          </div>
        </div>

        <div className="flex gap-2 px-4">
          <Button
            asChild
            className="flex-1 rounded-lg bg-linear-to-r from-yellow-400 via-red-500 to-purple-600 text-sm font-semibold text-white hover:opacity-90 transition-opacity duration-200"
          >
            <a
              href={getAssetPath("/files/CV___Hoang_Hoan.pdf")}
              download="Hoang-Hoan-CV.pdf"
            >
              {t("common.downloadCv")}
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="flex-1 rounded-lg border-elevated-border text-sm font-semibold transition-colors duration-200"
          >
            <Link href="/contact">{t("common.contact")}</Link>
          </Button>
        </div>
      </div>

      <div className="hidden w-full md:flex md:items-center md:gap-3 pb-4">
        <Button
          asChild
          className="flex-1 h-9 rounded-lg text-white bg-linear-to-r from-yellow-400 via-red-500 to-purple-600 text-sm font-semibold hover:opacity-90 transition-opacity duration-200"
        >
          <a
            href={getAssetPath("/files/CV___Hoang_Hoan.pdf")}
            download="Hoang-Hoan-CV.pdf"
          >
            {t("common.resume")}
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          className="flex-1 h-9 rounded-lg border-elevated-border text-sm font-semibold transition-colors duration-200"
        >
          <Link href="/contact">{t("common.contact")}</Link>
        </Button>
      </div>
    </>
  );
}

export { ProfileHeader };
