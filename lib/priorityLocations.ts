export type PriorityLocation = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  intro: string;
  marketSignals: string[];
  serviceFit: string[];
};

export const priorityLocations: PriorityLocation[] = [
  {
    slug: "mexico",
    name: "Mexico",
    metaTitle: "Marketing Agency for Businesses in Mexico | Lienzo Studio",
    metaDescription:
      "Bilingual branding, social media, content, website design, and local SEO for small businesses in Mexico and cross-border markets.",
    eyebrow: "Mexico Marketing Support",
    headline: "Bilingual marketing for businesses in Mexico and cross-border markets.",
    intro:
      "Lienzo Studio has roots in Durango, Mexico and supports businesses across Mexico with branding, social media, content, graphic design, website design, and local visibility strategy.",
    marketSignals: [
      "Spanish-first communication with English support when needed",
      "Experience with northern Mexico business categories",
      "Cross-border perspective for brands serving Mexico and the United States",
    ],
    serviceFit: ["Brand identity", "Social media management", "Graphic design", "Website design", "Local SEO"],
  },
  {
    slug: "denver",
    name: "Denver",
    metaTitle: "Bilingual Marketing Agency in Denver | Lienzo Studio",
    metaDescription:
      "Bilingual social media, branding, design, website, and local SEO support for small businesses in Denver and the metro area.",
    eyebrow: "Denver Metro Marketing",
    headline: "Bilingual marketing support for Denver-area small businesses.",
    intro:
      "From restaurants and service businesses to entrepreneurs and community-focused brands, Lienzo Studio helps Denver-area businesses look professional and stay easier to find online.",
    marketSignals: [
      "Support for bilingual English and Spanish communities",
      "Local service and restaurant marketing experience",
      "Web, content, and design systems built for trust",
    ],
    serviceFit: ["Social media management", "Brand identity", "Content creation", "Website design", "Google visibility"],
  },
  {
    slug: "colorado",
    name: "Colorado",
    metaTitle: "Bilingual Marketing Agency in Colorado | Lienzo Studio",
    metaDescription:
      "Branding, social media management, graphic design, content, website design, and local SEO for small businesses in Colorado.",
    eyebrow: "Colorado Marketing Agency",
    headline: "Marketing and design support for small businesses across Colorado.",
    intro:
      "Lienzo Studio serves businesses remotely across Northern Colorado, the Front Range, the Denver metro, and statewide markets that need stronger brand and search visibility.",
    marketSignals: [
      "Remote service-area agency for Colorado businesses",
      "Serving Northern Colorado and the Denver metro",
      "Focused on small businesses, local services, restaurants, and bilingual audiences",
    ],
    serviceFit: ["Branding", "Social media", "Content", "Websites", "Local SEO"],
  },
  {
    slug: "fort-lupton",
    name: "Fort Lupton",
    metaTitle: "Marketing Agency in Fort Lupton, CO | Lienzo Studio",
    metaDescription:
      "Fort Lupton service-area marketing agency offering bilingual branding, social media, content, website design, graphic design, and local SEO.",
    eyebrow: "Fort Lupton Marketing Agency",
    headline: "Local marketing support for Fort Lupton businesses from a remote bilingual studio.",
    intro:
      "Lienzo Studio serves Fort Lupton and nearby small businesses remotely with professional branding, stronger social media, clearer websites, and better local discovery signals.",
    marketSignals: [
      "Remote service-area support for Fort Lupton businesses",
      "Serving Weld County and nearby Front Range communities",
      "Useful for local businesses that rely on calls, visits, bookings, and referrals",
    ],
    serviceFit: ["Local SEO", "Website design", "Social media management", "Brand identity", "Graphic design"],
  },
];

export function getPriorityLocationBySlug(slug: string): PriorityLocation | undefined {
  return priorityLocations.find((location) => location.slug === slug);
}
