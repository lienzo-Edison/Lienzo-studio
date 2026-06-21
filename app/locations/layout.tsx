import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Locations Served",
  description:
    "Lienzo Studio serves small businesses in Fort Lupton, Denver, Colorado, Mexico, and LATAM with bilingual social media, branding, and design.",
  alternates: {
    canonical: "/locations",
  },
  openGraph: {
    url: "/locations",
    title: "Locations Served | Lienzo Studio",
    description:
      "Bilingual social media management, brand identity, and design for businesses in Colorado, Mexico, and LATAM.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Locations Served | Lienzo Studio",
    description:
      "Bilingual marketing services for businesses in Fort Lupton, Denver, Colorado, Mexico, and LATAM.",
  },
};

export default function LocationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
