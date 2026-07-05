import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Identity & Strategy",
  description:
    "Strategic brand identity for established and growth-stage companies, including positioning alignment, logo direction, typography, visual systems, and practical guidelines.",
  alternates: {
    canonical: "/services/brand-identity",
  },
  openGraph: {
    url: "/services/brand-identity",
    title: "Brand Identity & Logo Design | Lienzo Studio",
    description:
      "Logo design, color palettes, typography, visual direction, and brand applications for businesses in Colorado and Mexico.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Identity & Logo Design | Lienzo Studio",
    description:
      "Strategic brand identity systems for established and growth-stage companies across the U.S. and Mexico.",
  },
};

export default function BrandIdentityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
