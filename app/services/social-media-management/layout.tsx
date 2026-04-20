import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Management",
  description:
    "Professional social media management for small and medium businesses in Northern Colorado and Mexico. Content creation, posting, and community management on Instagram and Facebook — starting at $250/mo. Based in Fort Lupton, CO.",
  openGraph: {
    title: "Social Media Management | Lienzo Studio — Northern Colorado",
    description:
      "We manage your Instagram and Facebook so you don't have to. Content strategy, creation, scheduling, and engagement for businesses in Greeley, Longmont, Brighton, Fort Lupton, and across Mexico.",
  },
};

export default function SocialMediaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
