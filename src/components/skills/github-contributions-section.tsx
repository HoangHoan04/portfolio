"use client";

import { useEffect, useState } from "react";

import { ContributionGraph } from "@/components/skills/contribution-graph";
import { SectionCard } from "@/components/pages/section-card";
import { useTranslation } from "@/contexts/locale-context";
import {
  fetchGitHubContributions,
  type GitHubContributions,
} from "@/lib/github-contributions";

type GitHubContributionsSectionProps = {
  onTotalChange?: (total: number) => void;
};

export function GitHubContributionsSection({
  onTotalChange,
}: GitHubContributionsSectionProps) {
  const { t } = useTranslation();
  const [data, setData] = useState<GitHubContributions | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    fetchGitHubContributions()
      .then((json: GitHubContributions) => {
        if (cancelled) return;
        setData(json);
        if (json.totalContributions > 0) {
          onTotalChange?.(json.totalContributions);
        }
      })
      .catch(() => {
        if (!cancelled) setData(null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [onTotalChange]);

  return (
    <SectionCard className="mb-14 border border-elevated-border bg-elevated/40 p-0 overflow-hidden">
      <div className="border-b border-elevated-border px-5 py-4 md:px-6">
        <h2 className="text-sm font-bold uppercase tracking-wider text-secondary-text">
          {t("skills.contributions.title")}
        </h2>
      </div>

      <div className="p-4 md:p-5">
        {loading ? (
          <div className="flex h-32 items-center justify-center text-sm text-secondary-text">
            {t("skills.contributions.loading")}
          </div>
        ) : data ? (
          <ContributionGraph
            data={data}
            summaryLabel={t("skills.contributions.summary")}
            lessLabel={t("skills.contributions.less")}
            moreLabel={t("skills.contributions.more")}
            setupHint={t("skills.contributions.setupHint")}
          />
        ) : (
          <div className="rounded-2xl border border-dashed border-elevated-border bg-elevated/40 p-6 text-center text-sm text-secondary-text">
            {t("skills.contributions.setupHint")}
          </div>
        )}
      </div>
    </SectionCard>
  );
}
