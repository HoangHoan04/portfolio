export type Achievement = {
  id: string;
  titleKey: string;
  descKey: string;
  year: string;
  gradient: string;
};

export const achievements: Achievement[] = [
  {
    id: "1",
    titleKey: "home.achievements.apetech1.title",
    descKey: "home.achievements.apetech1.desc",
    year: "2025",
    gradient: "from-[#0095f6] to-blue-700",
  },
  {
    id: "2",
    titleKey: "home.achievements.apetech2.title",
    descKey: "home.achievements.apetech2.desc",
    year: "2025",
    gradient: "from-indigo-500 to-violet-600",
  },
  {
    id: "3",
    titleKey: "home.achievements.apetech3.title",
    descKey: "home.achievements.apetech3.desc",
    year: "2025",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: "4",
    titleKey: "home.achievements.club.title",
    descKey: "home.achievements.club.desc",
    year: "2023",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    id: "5",
    titleKey: "home.achievements.board.title",
    descKey: "home.achievements.board.desc",
    year: "2023",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    id: "6",
    titleKey: "home.achievements.projects.title",
    descKey: "home.achievements.projects.desc",
    year: "2024",
    gradient: "from-amber-500 to-orange-600",
  },
];
