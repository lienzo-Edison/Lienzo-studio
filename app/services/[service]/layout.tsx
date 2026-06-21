import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNicheServiceBySlug, nicheServices } from "@/lib/nicheServices";
import { services } from "@/lib/services";

export function generateStaticParams() {
  return services
    .filter(
      (service) =>
        service.published &&
        service.slug !== "brand-identity" &&
        service.slug !== "social-media-management",
    )
    .map((service) => ({ service: service.slug }))
    .concat(nicheServices.map((service) => ({ service: service.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service: slug } = await params;
  const service = services.find((item) => item.slug === slug && item.published);
  const nicheService = !service ? getNicheServiceBySlug(slug) : undefined;

  if (nicheService) {
    return {
      title: nicheService.metaTitle,
      description: nicheService.metaDescription,
      alternates: {
        canonical: `/services/${nicheService.slug}`,
      },
      openGraph: {
        url: `/services/${nicheService.slug}`,
        title: nicheService.metaTitle,
        description: nicheService.metaDescription,
      },
      twitter: {
        card: "summary_large_image",
        title: nicheService.metaTitle,
        description: nicheService.metaDescription,
      },
    };
  }

  if (!service) notFound();

  return {
    title: `${service.metadata.title.en} Services`,
    description: service.metadata.description.en,
    alternates: {
      canonical: service.href,
    },
    openGraph: {
      url: service.href,
      title: `${service.metadata.title.en} Services | Lienzo Studio`,
      description: service.metadata.description.en,
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.metadata.title.en} Services | Lienzo Studio`,
      description: service.metadata.description.en,
    },
  };
}

export default function DynamicServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
