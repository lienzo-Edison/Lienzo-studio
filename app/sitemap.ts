import { MetadataRoute } from "next";
import { cities } from "@/lib/cities";
import { publicIndustries } from "@/lib/industries";
import { publicNicheServices } from "@/lib/nicheServices";
import { services } from "@/lib/services";
import { priorityLocations } from "@/lib/priorityLocations";
import { mexicoRegions } from "@/lib/mexicoRegions";
import { siteUrl } from "@/lib/schema";

export default function sitemap(): MetadataRoute.Sitemap {
  const locationPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${siteUrl}/locations/${city.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));
  const priorityLocationPages: MetadataRoute.Sitemap = priorityLocations.map((location) => ({
    url: `${siteUrl}/locations/${location.slug}`,
    changeFrequency: "monthly" as const,
    priority: location.slug === "fort-lupton" || location.slug === "colorado" ? 0.9 : 0.86,
  }));
  const mexicoRegionPages: MetadataRoute.Sitemap = mexicoRegions.map((region) => ({
    url: `${siteUrl}/locations/${region.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));
  const servicePages: MetadataRoute.Sitemap = services
    .filter((service) => service.published)
    .map((service) => ({
      url: `${siteUrl}${service.href}`,
      changeFrequency: "monthly" as const,
      priority: service.slug === "local-seo" || service.slug === "website-design" ? 0.95 : 0.9,
    }));
  const nicheServicePages: MetadataRoute.Sitemap = publicNicheServices.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.94,
  }));
  const industryPages: MetadataRoute.Sitemap = publicIndustries.map((industry) => ({
    url: `${siteUrl}/industries/${industry.slug}`,
    changeFrequency: "monthly" as const,
    priority: ["professional-services", "technology-saas", "healthcare-organizations", "manufacturing-industrial", "real-estate-development", "financial-advisory"].includes(industry.slug) ? 0.9 : 0.8,
  }));

  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/services`,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    ...servicePages,
    ...nicheServicePages,
    {
      url: `${siteUrl}/industries`,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    ...industryPages,
    {
      url: `${siteUrl}/locations`,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    ...priorityLocationPages,
    ...locationPages,
    ...mexicoRegionPages,
    {
      url: `${siteUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.88,
    },
    {
      url: `${siteUrl}/portfolio`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      changeFrequency: "yearly",
      priority: 0.9,
    },
  ];
}
