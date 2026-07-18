import type { Metadata } from "next";
import { cities } from "@/lib/cities";
import { mexicoRegions } from "@/lib/mexicoRegions";
import { getPriorityLocationBySlug, priorityLocations } from "@/lib/priorityLocations";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const cityParams = cities.map((city) => ({ city: city.slug }));
  const regionParams = mexicoRegions.map((region) => ({ city: region.slug }));
  const priorityLocationParams = priorityLocations.map((location) => ({ city: location.slug }));
  return [...cityParams, ...regionParams, ...priorityLocationParams];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const cityData = cities.find((c) => c.slug === slug);
  const regionData = !cityData ? mexicoRegions.find((r) => r.slug === slug) : undefined;
  const priorityLocationData = !cityData && !regionData ? getPriorityLocationBySlug(slug) : undefined;

  if (!cityData && !regionData && !priorityLocationData) notFound();

  if (priorityLocationData) {
    return {
      title: { absolute: priorityLocationData.metaTitle },
      description: priorityLocationData.metaDescription,
      alternates: {
        canonical: `/locations/${priorityLocationData.slug}`,
      },
      openGraph: {
        url: `/locations/${priorityLocationData.slug}`,
        title: priorityLocationData.metaTitle,
        description: priorityLocationData.metaDescription,
      },
      twitter: {
        card: "summary_large_image",
        title: priorityLocationData.metaTitle,
        description: priorityLocationData.metaDescription,
      },
    };
  }

  if (regionData) {
    return {
      title: { absolute: regionData.en.metaTitle },
      description: regionData.en.metaDescription,
      alternates: {
        canonical: `/locations/${regionData.slug}`,
      },
      openGraph: {
        url: `/locations/${regionData.slug}`,
        title: regionData.en.metaTitle,
        description: regionData.en.metaDescription,
      },
      twitter: {
        card: "summary_large_image",
        title: regionData.en.metaTitle,
        description: regionData.en.metaDescription,
      },
    };
  }

  return {
    title: { absolute: cityData!.en.metaTitle },
    description: cityData!.en.metaDescription,
    alternates: {
      canonical: `/locations/${cityData!.slug}`,
    },
    openGraph: {
      url: `/locations/${cityData!.slug}`,
      title: cityData!.en.metaTitle,
      description: cityData!.en.metaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: cityData!.en.metaTitle,
      description: cityData!.en.metaDescription,
    },
  };
}

export default function CityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
