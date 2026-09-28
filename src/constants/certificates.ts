export type Certificate = {
  id: string;
  titleKey: string;
  issuerKey: string;
  year: string;
  gradient: string;
};

export const certificates: Certificate[] = [
  {
    id: "1",
    titleKey: "home.certificates.degree.title",
    issuerKey: "home.certificates.degree.issuer",
    year: "Sep. 2022 – Oct. 2026",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    id: "2",
    titleKey: "home.certificates.webDev.title",
    issuerKey: "home.certificates.webDev.issuer",
    year: "2 semesters",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    id: "3",
    titleKey: "home.certificates.database.title",
    issuerKey: "home.certificates.database.issuer",
    year: "2022 – 2026",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: "4",
    titleKey: "home.certificates.agile.title",
    issuerKey: "home.certificates.agile.issuer",
    year: "2025 – 2026",
    gradient: "from-amber-500 to-orange-600",
  },
];
