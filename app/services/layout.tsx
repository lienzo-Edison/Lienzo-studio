import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Social media management, brand identity, editorial design, and more — marketing services for small and medium businesses in Northern Colorado and Mexico. Based in Fort Lupton, CO.",
  openGraph: {
    title: "Services | Lienzo Studio — Marketing Agency Fort Lupton, CO",
    description:
      "Explore Lienzo Studio's full range of services: social media management, paid ads, brand identity, and editorial design for businesses in Northern Colorado and Mexico.",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
