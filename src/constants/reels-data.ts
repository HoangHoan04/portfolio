export type ReelItem = {
  id: string;
  titleKey: string;
  descKey: string;
  tag: string;
  gradient: string;
  views: string;
  duration: string;
};

export const reels: ReelItem[] = [
  {
    id: "1",
    titleKey: "reels.items.nestjs.title",
    descKey: "reels.items.nestjs.desc",
    tag: "NestJS",
    gradient: "from-rose-500 via-red-500 to-orange-500",
    views: "2.4K",
    duration: "0:45",
  },
  {
    id: "2",
    titleKey: "reels.items.react.title",
    descKey: "reels.items.react.desc",
    tag: "React",
    gradient: "from-cyan-400 via-blue-500 to-indigo-600",
    views: "1.8K",
    duration: "0:32",
  },
  {
    id: "3",
    titleKey: "reels.items.tailwind.title",
    descKey: "reels.items.tailwind.desc",
    tag: "Tailwind",
    gradient: "from-teal-400 via-emerald-500 to-green-600",
    views: "3.1K",
    duration: "0:28",
  },
  {
    id: "4",
    titleKey: "reels.items.git.title",
    descKey: "reels.items.git.desc",
    tag: "Git",
    gradient: "from-amber-400 via-orange-500 to-red-500",
    views: "980",
    duration: "0:52",
  },
  {
    id: "5",
    titleKey: "reels.items.angular.title",
    descKey: "reels.items.angular.desc",
    tag: "Angular",
    gradient: "from-red-500 via-rose-600 to-pink-600",
    views: "1.2K",
    duration: "0:38",
  },
  {
    id: "6",
    titleKey: "reels.items.deploy.title",
    descKey: "reels.items.deploy.desc",
    tag: "DevOps",
    gradient: "from-violet-500 via-purple-600 to-fuchsia-600",
    views: "756",
    duration: "1:05",
  },
];
