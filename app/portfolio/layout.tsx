import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "See Lienzo Studio's work - branding, social media, and digital marketing projects for small businesses in Colorado and Mexico. Real results for real clients.",
  openGraph: {
    title: "Portfolio | Lienzo Studio - Branding & Digital Marketing Work",
    description:
      "Browse Lienzo Studio's portfolio: brand identity, social media, and marketing work for small and medium businesses in Northern Colorado and Mexico.",
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
