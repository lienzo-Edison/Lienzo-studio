import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Identity & Strategy",
  description:
    "Professional logo design and brand identity for small businesses in Northern Colorado and Mexico. Logo, color palette, typography, and brand guidelines. Built from scratch or redesigned. Based in Fort Lupton, CO.",
  openGraph: {
    title: "Brand Identity & Logo Design | Lienzo Studio | Northern Colorado",
    description:
      "Customized logo design, color palettes, typography, visual direction, and brand applications for businesses in Northern Colorado and Mexico. Contact us for a tailored proposal.",
  },
};

export default function BrandIdentityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
