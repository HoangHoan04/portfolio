"use client";

import { useEffect, useState } from "react";

import { PostGrid } from "@/components/posts/post-grids";
import { ContentTabs } from "@/components/profile/content-tabs";
import { HomeAchievementsGrid } from "@/components/profile/home-achievements-grid";
import { HomeCertificatesGrid } from "@/components/profile/home-certificates-grid";
import { HomeReelsGrid } from "@/components/profile/home-reels-grid";
import { Highlights } from "@/components/profile/highlight";
import { ProfileHeader } from "@/components/profile/profile-header";
import { StartScreen } from "@/components/start-screen";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("PRODUCTS");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("start_shown")) setStarted(true);
  }, []);

  return (
    <div>
      <div className="flex flex-col">
        <ProfileHeader />
        <Highlights />
        <ContentTabs activeTab={activeTab} onTabChange={setActiveTab} />
        {activeTab === "PRODUCTS" && <PostGrid />}
        {activeTab === "SKILLS" && <HomeReelsGrid />}
        {activeTab === "CERTIFICATES" && <HomeCertificatesGrid />}
        {activeTab === "ACHIEVEMENTS" && <HomeAchievementsGrid />}
      </div>

      {!started && (
        <StartScreen
          onComplete={() => {
            sessionStorage.setItem("start_shown", "true");
            setStarted(true);
          }}
        />
      )}
    </div>
  );
}
