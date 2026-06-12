import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Management",
  description:
    "Customized social media content systems for small and medium businesses in Northern Colorado and Mexico. Strategy, content creation, visual design, and scheduling tailored to your goals.",
  openGraph: {
    title: "Social Media Management | Lienzo Studio | Northern Colorado",
    description:
      "Customized content strategy, creation, visual design, and scheduling for businesses in Northern Colorado and Mexico. Contact us for a tailored proposal.",
  },
};

export default function SocialMediaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
