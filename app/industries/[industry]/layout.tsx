import type { Metadata } from "next";
import { publicIndustries, getIndustryBySlug } from "@/lib/industries";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return publicIndustries.map((industry) => ({ industry: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industry: string }>;
}): Promise<Metadata> {
  const { industry: slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) notFound();

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    alternates: {
      canonical: `/industries/${industry.slug}`,
    },
    openGraph: {
      url: `/industries/${industry.slug}`,
      title: industry.metaTitle,
      description: industry.metaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: industry.metaTitle,
      description: industry.metaDescription,
    },
  };
}

export default function IndustryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
