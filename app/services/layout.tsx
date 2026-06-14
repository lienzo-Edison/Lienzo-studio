import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services for Small Businesses",
  description:
    "Explore bilingual social media management, brand identity, content creation, graphic design, website design, and local SEO for small businesses in Colorado, Mexico, and LATAM.",
  keywords: [
    "digital marketing services for small businesses",
    "social media management Colorado",
    "brand identity for small businesses",
    "content creation services",
    "graphic design services",
    "website design for small businesses",
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
    title: "Digital Marketing Services for Small Businesses | Lienzo Studio",
    description:
      "Branding, social media, content, graphic design, website design, and local SEO from a bilingual studio serving Colorado, Mexico, and LATAM.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services for Small Businesses | Lienzo Studio",
    description:
      "Bilingual branding, social media, content, website design, graphic design, and local SEO for small businesses.",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
