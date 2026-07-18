import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Lienzo Studio collects, uses, and protects personal information.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
