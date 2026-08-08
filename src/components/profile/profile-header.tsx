"use client";

import { Briefcase, ChevronDown, Code2, Home, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AvatarImage } from "@/components/ui/image";
import { profile } from "@/constants/profile";

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
      .catch(() => {});
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
      {/* Desktop Layout */}
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
            <h1 className="text-base md:text-lg font-bold tracking-tight">
              {profile.fullName} —{" "}
              <small className="font-normal">{profile.username}</small>
            </h1>

            <Badge>{profile.jobTitle}</Badge>

            <div className="flex items-center gap-6 py-2">
              <div className="flex items-center gap-2 text-center">
                <strong className="block text-base font-semibold">
                  {profile.experience}
                </strong>
                <span className="text-xs text-secondary-text">years exp</span>
              </div>
              <div className="flex items-center gap-2 text-center">
                <strong className="block text-base font-semibold">
                  {publicRepos}
                </strong>
                <span className="text-xs text-secondary-text">
                  projects in GitHub
                </span>
              </div>
              <div className="flex items-center gap-2 text-center">
                <strong className="block text-base font-semibold">
                  {visitors.toLocaleString("en-US")}
                </strong>
                <span className="text-xs text-secondary-text">visitors</span>
              </div>
              <div className="flex items-center gap-2 text-center">
                <strong className="block text-base font-semibold">
                  {githubViews.toLocaleString("en-US")}
                </strong>
                <span className="text-xs text-secondary-text">github viewers</span>
              </div>
            </div>

            <p className="whitespace-pre-line font-normal">{profile.bio}</p>

            <div className="flex items-center gap-4 mt-1">
              <Link
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-secondary-text hover:text-foreground transition-colors"
              >
                <Code2 className="size-4" /> GitHub
              </Link>
              <Link
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-secondary-text hover:text-foreground transition-colors"
              >
                <Briefcase className="size-4" /> LinkedIn
              </Link>
              <Link
                href={`mailto:${profile.email}`}
                className="flex items-center gap-1 text-sm text-secondary-text hover:text-foreground transition-colors"
              >
                <Mail className="size-4" /> Email
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
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
              <span className="text-xs text-secondary-text">projects</span>
            </div>
            <div>
              <strong className="block text-base font-semibold">
                {visitors.toLocaleString("en-US")}
              </strong>
              <span className="text-xs text-secondary-text">visitors</span>
            </div>
            <div>
              <strong className="block text-base font-semibold">
                {githubViews.toLocaleString("en-US")}
              </strong>
              <span className="text-xs text-secondary-text">github</span>
            </div>
            <div>
              <strong className="block text-base font-semibold">
                {profile.experience}
              </strong>
              <span className="text-xs text-secondary-text">years</span>
            </div>
          </div>
        </div>

        <div className="px-4 text-sm">
          <h1 className="font-semibold">{profile.fullName}</h1>
          <span className="block font-semibold text-secondary-text">
            {profile.jobTitle}
          </span>
          <span className="block text-secondary-text">@{profile.username}</span>
          {profile.bio.split("\n").map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}

          <div className="flex items-center gap-3 mt-2">
            <Link
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-text hover:text-foreground"
            >
              <Code2 className="size-5" />
            </Link>
            <Link
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-text hover:text-foreground"
            >
              <Home className="size-5" />
            </Link>
            <Link
              href={`mailto:${profile.email}`}
              className="text-secondary-text hover:text-foreground"
            >
              <Mail className="size-5" />
            </Link>
          </div>
        </div>

        <div className="flex gap-2 px-4">
          <Button className="flex-1 rounded-lg bg-linear-to-r from-yellow-400 via-red-500 to-purple-600 text-sm font-semibold text-white hover:opacity-90 transition-opacity duration-200">
            Download Resume
          </Button>
          <Button
            variant="outline"
            className="flex-1 rounded-lg border-elevated-border text-sm font-semibold transition-colors duration-200"
          >
            Message
          </Button>
        </div>
      </div>

      <div className="hidden w-full md:flex md:items-center md:gap-3 pb-4">
        <Button className="flex-1 h-9 rounded-lg text-white bg-linear-to-r from-yellow-400 via-red-500 to-purple-600 text-sm font-semibold hover:opacity-90 transition-opacity duration-200">
          Resume
        </Button>
        <Button
          variant="outline"
          className="flex-1 h-9 rounded-lg border-elevated-border text-sm font-semibold transition-colors duration-200"
        >
          Contact
        </Button>
        <Button
          variant="outline"
          className="size-9 rounded-lg border-elevated-border p-0 transition-colors duration-200"
        >
          <ChevronDown className="size-5" />
        </Button>
      </div>
    </>
  );
}

export { ProfileHeader };
