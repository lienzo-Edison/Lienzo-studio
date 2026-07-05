import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Help",
  description:
    "Marketing, SEO, websites, content, campaigns, and brand systems for professional services, technology, healthcare, industrial, real estate, and advisory companies.",
  alternates: {
    canonical: "/industries",
  },
  openGraph: {
    url: "/industries",
    title: "Industries We Help | Lienzo Studio",
    description:
      "Bilingual marketing for professional services, technology, healthcare, manufacturing, real estate, financial, and cross-border companies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Help | Lienzo Studio",
    description:
      "Bilingual marketing, SEO, websites, campaigns, and brand systems for established and growth-stage companies.",
  },
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
