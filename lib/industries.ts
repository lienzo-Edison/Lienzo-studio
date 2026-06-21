export type IndustryDefinition = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  hero: string;
  intro: string;
  challenges: string[];
  services: string[];
  proofPoints: string[];
  schemaName: string;
};

export const industries: IndustryDefinition[] = [
  {
    slug: "restaurants",
    title: "Restaurants",
    metaTitle: "Marketing for Restaurants | Lienzo Studio",
    metaDescription:
      "Bilingual branding, social media, menus, content, and website design for restaurants in Colorado, Mexico, and LATAM.",
    eyebrow: "Restaurant Marketing",
    hero: "Marketing that helps restaurants look credible, active, and worth visiting.",
    intro:
      "Lienzo Studio helps restaurants, cafes, food trucks, bakeries, and hospitality brands build a clearer visual identity and a stronger online presence across social media, menus, websites, and local search.",
    challenges: [
      "Customers judge food businesses visually before they visit.",
      "Menus, promotions, social posts, and Google listings often feel disconnected.",
      "Restaurants need consistent content without pulling owners away from daily operations.",
    ],
    services: [
      "Brand identity and logo direction",
      "Menu, flyer, and promotional graphic design",
      "Instagram and Facebook content planning",
      "Food content direction and short-form campaign ideas",
      "Website and local SEO foundations",
    ],
    proofPoints: [
      "Bilingual English and Spanish communication",
      "Experience with restaurant, cafe, and food-brand visuals",
      "Practical assets designed for daily use",
    ],
    schemaName: "Marketing services for restaurants",
  },
  {
    slug: "local-service-businesses",
    title: "Local Service Businesses",
    metaTitle: "Marketing for Local Service Businesses | Lienzo Studio",
    metaDescription:
      "Bilingual marketing, branding, website design, and local SEO support for local service businesses in Colorado and Mexico.",
    eyebrow: "Local Service Marketing",
    hero: "A clearer online presence for service businesses customers need to trust.",
    intro:
      "We support local service providers with the brand, content, website, and local visibility pieces that help customers understand what you do and feel confident contacting you.",
    challenges: [
      "Service businesses need credibility before a customer calls.",
      "Customers compare providers quickly through Google, websites, and social profiles.",
      "Many local companies have strong work but weak digital presentation.",
    ],
    services: [
      "Logo and brand refreshes",
      "Service page structure",
      "Google Business Profile and local SEO guidance",
      "Social proof content and project highlights",
      "Website design focused on calls and inquiries",
    ],
    proofPoints: [
      "Clear messaging for bilingual communities",
      "SEO-aware page structure",
      "Design systems built for trust and repeat use",
    ],
    schemaName: "Marketing services for local service businesses",
  },
  {
    slug: "construction-companies",
    title: "Construction Companies",
    metaTitle: "Marketing for Construction Companies | Lienzo Studio",
    metaDescription:
      "Branding, social media, website design, and local SEO support for construction companies, contractors, and trades.",
    eyebrow: "Construction Marketing",
    hero: "Professional marketing for contractors, builders, and trades that need stronger trust signals.",
    intro:
      "Construction companies win work through reputation, visible proof, and clear communication. Lienzo Studio helps contractors present their work professionally across brand identity, social content, websites, and local search.",
    challenges: [
      "Project quality is not always reflected in the company’s online presence.",
      "Before-and-after work needs a consistent way to become trust-building content.",
      "Customers need to understand services, locations, and contact options quickly.",
    ],
    services: [
      "Brand identity for contractors and trade businesses",
      "Project portfolio content",
      "Website design with service and location pages",
      "Social media content systems",
      "Local SEO and Google Business Profile support",
    ],
    proofPoints: [
      "Practical messaging for high-trust buying decisions",
      "Experience supporting service and contractor categories",
      "Bilingual content for Spanish and English speaking audiences",
    ],
    schemaName: "Marketing services for construction companies",
  },
  {
    slug: "hispanic-owned-businesses",
    title: "Hispanic-Owned Businesses",
    metaTitle: "Marketing for Hispanic-Owned Businesses | Lienzo Studio",
    metaDescription:
      "Bilingual branding, content, social media, website design, and local SEO for Hispanic-owned businesses in the United States.",
    eyebrow: "Bilingual Business Marketing",
    hero: "Marketing built for Hispanic-owned businesses serving bilingual communities.",
    intro:
      "Lienzo Studio helps Hispanic-owned businesses communicate with cultural fluency, professional design, and clear bilingual messaging across digital and local customer touchpoints.",
    challenges: [
      "Direct translation often misses tone, culture, and buying context.",
      "Businesses serving bilingual communities need consistency in both languages.",
      "Professional presentation can help community trust become measurable growth.",
    ],
    services: [
      "English and Spanish brand messaging",
      "Bilingual social media content",
      "Brand identity and design systems",
      "Website content for bilingual audiences",
      "Local SEO foundations for community discovery",
    ],
    proofPoints: [
      "A bilingual team that works naturally in English and Spanish",
      "Cross-border perspective across Mexico and the United States",
      "Content built for clarity, not word-for-word translation",
    ],
    schemaName: "Marketing services for Hispanic-owned businesses",
  },
  {
    slug: "latino-owned-businesses",
    title: "Latino-Owned Businesses",
    metaTitle: "Marketing for Latino-Owned Businesses | Lienzo Studio",
    metaDescription:
      "Bilingual branding, social media, website design, content, graphic design, and local SEO for Latino-owned businesses.",
    eyebrow: "Latino Business Marketing",
    hero: "Marketing for Latino-owned businesses that need stronger trust, visibility, and bilingual reach.",
    intro:
      "Lienzo Studio helps Latino-owned businesses create a professional presence that speaks clearly to English-speaking, Spanish-speaking, and bicultural customers across social media, websites, local search, and print materials.",
    challenges: [
      "Customers need clear trust signals before they call, visit, or buy.",
      "Many Latino-owned businesses serve audiences that move between English and Spanish.",
      "Strong community reputation needs to be supported by consistent online visibility.",
    ],
    services: [
      "Bilingual brand messaging",
      "Social media management",
      "Website and landing page design",
      "Graphic design for promotions and customer materials",
      "Local SEO and Google visibility support",
    ],
    proofPoints: [
      "English and Spanish marketing support",
      "Built for small businesses and founder-led teams",
      "Cross-border perspective across Mexico, Colorado, and the United States",
    ],
    schemaName: "Marketing services for Latino-owned businesses",
  },
  {
    slug: "mexican-owned-businesses",
    title: "Mexican-Owned Businesses",
    metaTitle: "Marketing for Mexican-Owned Businesses | Lienzo Studio",
    metaDescription:
      "Bilingual marketing, branding, social media, content, and website design for Mexican-owned businesses in Mexico and the United States.",
    eyebrow: "Mexico and U.S. Marketing",
    hero: "Marketing for Mexican-owned businesses growing in Mexico, the U.S., or both.",
    intro:
      "With roots in Durango and a base in Colorado, Lienzo Studio helps Mexican-owned businesses build a professional presence that works across markets, languages, and customer expectations.",
    challenges: [
      "Businesses crossing markets need messaging that feels natural on both sides.",
      "Local credibility depends on clear services, visuals, and contact paths.",
      "Strong design helps family-owned and founder-led companies compete online.",
    ],
    services: [
      "Brand identity for Mexican-owned businesses",
      "Bilingual social media management",
      "Website design and service page structure",
      "Graphic design for digital and print materials",
      "Local SEO and Google visibility support",
    ],
    proofPoints: [
      "Durango roots and Colorado presence",
      "Spanish-first and English-first communication",
      "Experience with small businesses and entrepreneurs",
    ],
    schemaName: "Marketing services for Mexican-owned businesses",
  },
];

export function getIndustryBySlug(slug: string): IndustryDefinition | undefined {
  return industries.find((industry) => industry.slug === slug);
}
