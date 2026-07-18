import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lienzo Studio at Longs Peak",
  description: "A private campaign page for visitors who met Lienzo Studio at Longs Peak.",
  alternates: { canonical: "/longs-peak" },
  robots: { index: false, follow: false, nocache: true },
  openGraph: {
    url: "/longs-peak",
    title: "Lienzo Studio",
    description: "Brand, content, design, and visibility for growing businesses.",
  },
};

export default function LongsPeakLayout({ children }: { children: React.ReactNode }) {
  return children;
}
