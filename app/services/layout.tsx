import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing, SEO, Website & Brand Services",
  description:
    "Explore bilingual marketing strategy, SEO, websites, campaigns, content, brand identity, and design for established and growth-stage companies.",
  keywords: [
    "marketing services for established companies",
    "SEO services for professional firms",
    "strategic website agency",
    "social media management Colorado",
    "strategic brand identity",
    "content creation services",
    "graphic design services",
    "website design services",
    "local SEO services Colorado",
    "Google Business Profile optimization",
    "bilingual marketing agency",
    "marketing services Mexico",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    url: "/services",
    title: "Marketing, SEO & Brand Services | Lienzo Studio",
    description:
      "SEO, websites, campaigns, content, brand strategy, and design from a bilingual studio serving the U.S., Mexico, and LATAM.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing, SEO & Brand Services | Lienzo Studio",
    description:
      "Bilingual SEO, websites, campaigns, content, brand strategy, and design for established and growth-stage companies.",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
