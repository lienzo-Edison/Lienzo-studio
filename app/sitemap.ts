import { MetadataRoute } from "next";
import { cities } from "@/lib/cities";

export default function sitemap(): MetadataRoute.Sitemap {
  const locationPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `https://lienzo.studio/locations/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
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
    {
      url: "https://lienzo.studio/services/social-media-management",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: "https://lienzo.studio/services/brand-identity",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://lienzo.studio/locations",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    ...locationPages,
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
