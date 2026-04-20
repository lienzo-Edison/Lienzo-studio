import type { Metadata } from "next";
import { cities } from "@/lib/cities";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const cityData = cities.find((c) => c.slug === citySlug);

  if (!cityData) notFound();

  return {
    title: cityData.en.metaTitle,
    description: cityData.en.metaDescription,
    openGraph: {
      title: cityData.en.metaTitle,
      description: cityData.en.metaDescription,
    },
  };
}

export default function CityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
