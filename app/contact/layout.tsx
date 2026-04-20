import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Lienzo Studio — social media management and marketing agency in Fort Lupton, CO. Serving small businesses in Greeley, Longmont, Brighton, Loveland, and all of Northern Colorado.",
  openGraph: {
    title: "Contact Lienzo Studio | Social Media Agency — Fort Lupton, CO",
    description:
      "Reach out to Lienzo Studio for social media management, paid ads, and brand identity services in Northern Colorado and Mexico.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
