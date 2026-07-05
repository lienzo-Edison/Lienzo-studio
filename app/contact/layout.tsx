import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Our Bilingual Marketing Studio",
  description:
    "Contact Lienzo Studio for bilingual marketing, SEO, websites, campaigns, brand strategy, and design across the U.S., Mexico, and LATAM.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: "/contact",
    title: "Contact Lienzo Studio | Bilingual Marketing & Design",
    description:
      "Start a conversation with our bilingual marketing and creative studio serving established and growth-stage companies across the U.S., Mexico, and LATAM.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Lienzo Studio | Bilingual Marketing & Design",
    description:
      "Contact our bilingual studio for branding, social media, content, website design, graphic design, and local SEO.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
