import type { Metadata } from "next";
import { cities } from "@/lib/cities";
import { mexicoRegions } from "@/lib/mexicoRegions";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const cityParams = cities.map((city) => ({ city: city.slug }));
  const regionParams = mexicoRegions.map((region) => ({ city: region.slug }));
  return [...cityParams, ...regionParams];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const cityData = cities.find((c) => c.slug === slug);
  const regionData = !cityData ? mexicoRegions.find((r) => r.slug === slug) : undefined;

  if (!cityData && !regionData) notFound();

  if (regionData) {
    return {
      title: regionData.en.metaTitle,
      description: regionData.en.metaDescription,
      openGraph: {
        title: regionData.en.metaTitle,
        description: regionData.en.metaDescription,
      },
    };
  }

  return {
    title: cityData!.en.metaTitle,
    description: cityData!.en.metaDescription,
    openGraph: {
      title: cityData!.en.metaTitle,
      description: cityData!.en.metaDescription,
    },
  };
}

export default function CityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
