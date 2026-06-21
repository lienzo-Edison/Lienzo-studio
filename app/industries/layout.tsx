import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Help",
  description:
    "Marketing, branding, social media, content, websites, and local SEO for restaurants, service businesses, construction companies, and bilingual businesses.",
  alternates: {
    canonical: "/industries",
  },
  openGraph: {
    url: "/industries",
    title: "Industries We Help | Lienzo Studio",
    description:
      "Bilingual marketing support for restaurants, local service businesses, construction companies, Hispanic-owned businesses, and Mexican-owned businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Help | Lienzo Studio",
    description:
      "Bilingual marketing, branding, social media, websites, and local SEO for small businesses.",
  },
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
