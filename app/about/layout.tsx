import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Lienzo Studio",
  description:
    "Learn about Lienzo Studio, a remote bilingual marketing and design agency serving Hispanic-owned, Mexican-owned, Latino-owned, and small businesses.",
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
      "Bilingual marketing and design for Hispanic-owned, Mexican-owned, Latino-owned, and small businesses.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
