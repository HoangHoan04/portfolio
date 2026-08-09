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

import { ContentTab } from "@/constants/enum";

import { PostModal } from "@/components/modal/post-modal";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/portfolio" : "";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<ContentTab>(ContentTab.PRODUCTS);
  const [started, setStarted] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);



  // Listen to popstate (e.g. back button) to close the modal
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === `${basePath}/` || path === "/") {
        setSelectedProjectId(null);
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleSelectProject = (id: string) => {
    setSelectedProjectId(id);
    window.history.pushState(null, "", `${basePath}/post/${id}`);
  };

  const handleCloseModal = () => {
    setSelectedProjectId(null);
    window.history.pushState(null, "", `${basePath}/`);
  };

  return (
    <div>
      <div className="flex flex-col">
        <ProfileHeader />
        <Highlights />
        <ContentTabs activeTab={activeTab} onTabChange={setActiveTab} />
        {activeTab === ContentTab.PRODUCTS && (
          <PostGrid onSelectProject={handleSelectProject} />
        )}
        {activeTab === ContentTab.SKILLS && <HomeReelsGrid />}
        {activeTab === ContentTab.CERTIFICATES && <HomeCertificatesGrid />}
        {activeTab === ContentTab.ACHIEVEMENTS && <HomeAchievementsGrid />}
      </div>

      {selectedProjectId && (
        <PostModal id={selectedProjectId} onClose={handleCloseModal} />
      )}

      {!started && (
        <StartScreen
          onComplete={() => {
            setStarted(true);
          }}
        />
      )}
    </div>
  );
}
