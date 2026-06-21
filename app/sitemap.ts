import { MetadataRoute } from "next";
import { cities } from "@/lib/cities";
import { industries } from "@/lib/industries";
import { nicheServices } from "@/lib/nicheServices";
import { services } from "@/lib/services";
import { priorityLocations } from "@/lib/priorityLocations";

export default function sitemap(): MetadataRoute.Sitemap {
  const locationPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `https://lienzo.studio/locations/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));
  const priorityLocationPages: MetadataRoute.Sitemap = priorityLocations.map((location) => ({
    url: `https://lienzo.studio/locations/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: location.slug === "fort-lupton" || location.slug === "colorado" ? 0.9 : 0.86,
  }));
  const servicePages: MetadataRoute.Sitemap = services
    .filter((service) => service.published)
    .map((service) => ({
      url: `https://lienzo.studio${service.href}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: service.slug === "social-media-management" ? 0.95 : 0.9,
    }));
  const nicheServicePages: MetadataRoute.Sitemap = nicheServices.map((service) => ({
    url: `https://lienzo.studio/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.94,
  }));
  const industryPages: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `https://lienzo.studio/industries/${industry.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://lienzo.studio",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://lienzo.studio/services",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    ...servicePages,
    ...nicheServicePages,
    {
      url: "https://lienzo.studio/industries",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    ...industryPages,
    {
      url: "https://lienzo.studio/locations",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    ...priorityLocationPages,
    ...locationPages,
    {
      url: "https://lienzo.studio/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.88,
    },
    {
      url: "https://lienzo.studio/portfolio",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://lienzo.studio/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.9,
    },
  ];
}
