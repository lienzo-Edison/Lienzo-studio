import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect With Lienzo Studio",
  description:
    "Meet Lienzo Studio, explore our bilingual marketing and creative services, and start a conversation.",
  alternates: { canonical: "/business-card" },
  robots: { index: false, follow: true },
  openGraph: {
    url: "/business-card",
    title: "Connect With Lienzo Studio",
    description:
      "Bilingual marketing, SEO, websites, campaigns, content, and brand systems for ambitious companies.",
  },
};

export default function BusinessCardLayout({ children }: { children: React.ReactNode }) {
  return children;
}
