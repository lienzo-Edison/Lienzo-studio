import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Identity & Strategy",
  description:
    "Brand identity and logo design for small businesses in Colorado and Mexico, including color, typography, guidelines, and visual direction.",
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
      "Brand identity and logo design for small businesses in Colorado and Mexico.",
  },
};

export default function BrandIdentityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
