import type { Metadata } from "next";
import { Baloo_2, DM_Sans } from "next/font/google";

import { PageShell } from "@/components/layout/page-shell";
import { PageTransition } from "@/components/motion/page-transition";

import "./globals.css";

const display = Baloo_2({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"]
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700"]
});

export const metadata: Metadata = {
  title: "Blessing Raymond Foundation",
  description:
    "A youth-centered foundation building a kinder and more empowered society through education, leadership, mental health advocacy, and social reform."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <PageShell>
          <PageTransition>{children}</PageTransition>
        </PageShell>
      </body>
    </html>
  );
}
