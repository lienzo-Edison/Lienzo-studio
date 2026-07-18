import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Lienzo Studio",
  description:
    "Learn about Lienzo Studio, a bilingual marketing, SEO, brand, and design agency serving companies across the U.S., Mexico, and LATAM.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    url: "/about",
    title: "About Lienzo Studio | Bilingual Marketing Agency",
    description:
      "Lienzo Studio is a remote bilingual marketing and design agency serving Mexico, Colorado, the United States, and LATAM.",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Lienzo Studio | Bilingual Marketing Agency",
    description:
      "Bilingual marketing, SEO, websites, brand strategy, and design for established and growth-stage companies.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
