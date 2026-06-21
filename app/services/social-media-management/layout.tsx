import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Management",
  description:
    "Customized social media content systems for small and medium businesses in Northern Colorado and Mexico. Strategy, content creation, visual design, and scheduling tailored to your goals.",
  alternates: {
    canonical: "/services/social-media-management",
  },
  openGraph: {
    url: "/services/social-media-management",
    title: "Social Media Management | Lienzo Studio",
    description:
      "Customized content strategy, creation, visual design, and scheduling for businesses in Northern Colorado and Mexico. Contact us for a tailored proposal.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Management | Lienzo Studio",
    description:
      "Social media strategy, content creation, visual design, and scheduling for businesses in Colorado and Mexico.",
  },
};

export default function SocialMediaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
