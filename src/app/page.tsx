"use client";

import { useEffect, useState } from "react";

import { PostGrid } from "@/components/posts/post-grids";
import { ContentTabs } from "@/components/profile/content-tabs";
import { Highlights } from "@/components/profile/highlight";
import { ProfileHeader } from "@/components/profile/profile-header";
import { StartScreen } from "@/components/start-screen";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("POSTS");
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
        {activeTab === "POSTS" && <PostGrid />}
        {activeTab === "REELS" && (
          <div className="flex items-center justify-center py-20 text-[#737373]">
            Reels coming soon
          </div>
        )}
        {activeTab === "SAVED" && (
          <div className="flex items-center justify-center py-20 text-[#737373]">
            Saved posts coming soon
          </div>
        )}
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
