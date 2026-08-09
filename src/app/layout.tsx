import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { BottomNav } from "@/components/layout/bottom-nav";
import { LayoutShell } from "@/components/layout/layout-shell";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { LocaleProvider } from "@/contexts/locale-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hoang Hoan (@hoandh.dev)",
  description: "Software Engineer - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-black text-white">
        <ThemeProvider>
          <LocaleProvider>
            <LayoutShell>{children}</LayoutShell>
            <BottomNav />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
