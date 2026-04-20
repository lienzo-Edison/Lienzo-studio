import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Identity & Strategy",
  description:
    "Professional logo design and brand identity for small businesses in Northern Colorado and Mexico. Logo, color palette, typography, and brand guidelines. Built from scratch or redesigned. Based in Fort Lupton, CO.",
  openGraph: {
    title: "Brand Identity & Logo Design | Lienzo Studio | Northern Colorado",
    description:
      "Logo design, color palettes, typography, and full brand systems for businesses in Greeley, Longmont, Brighton, Fort Lupton, CO and across Mexico. Affordable packages starting with the basics.",
  },
};

export default function BrandIdentityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
