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
    slug: "professional-services",
    title: "Professional Services",
    metaTitle: "Marketing for Professional Services | Lienzo Studio",
    metaDescription:
      "SEO, positioning, websites, content, and brand systems for consulting, legal, engineering, accounting, and advisory firms.",
    eyebrow: "Professional Services Marketing",
    hero: "Turn specialized expertise into a clearer position, stronger authority, and qualified demand.",
    intro:
      "Lienzo Studio helps consulting, engineering, legal, accounting, and advisory firms explain complex value, improve search visibility, and build the credibility required for considered buying decisions.",
    challenges: [
      "Expertise is difficult to differentiate when every competitor makes similar claims.",
      "Long sales cycles require useful evidence and consistent authority, not only awareness.",
      "Websites and sales materials often undersell the quality of the team behind them.",
    ],
    services: [
      "Positioning and messaging systems",
      "SEO and service-page architecture",
      "Authority content and case studies",
      "Website strategy and conversion paths",
      "Brand identity and sales materials",
    ],
    proofPoints: [
      "Clear communication for complex, high-trust services",
      "Connected marketing and sales enablement",
      "Bilingual execution for cross-border markets",
    ],
    schemaName: "Marketing services for professional service firms",
  },
  {
    slug: "technology-saas",
    title: "Technology & SaaS",
    metaTitle: "Marketing for Technology & SaaS | Lienzo Studio",
    metaDescription:
      "Positioning, SEO, websites, campaigns, content, and brand systems for technology companies and SaaS teams.",
    eyebrow: "Technology Marketing",
    hero: "Make a complex product easier to understand, discover, trust, and buy.",
    intro:
      "We help technology and SaaS companies translate product capability into a focused market position, search strategy, website story, and campaign system that supports pipeline and growth.",
    challenges: [
      "Product language can obscure the business outcome buyers actually care about.",
      "Competitive categories require a sharper point of view and stronger proof.",
      "Marketing, product, and sales assets often tell different versions of the story.",
    ],
    services: [
      "Category and product positioning",
      "SEO content architecture",
      "Product and solution landing pages",
      "Launch and demand-generation campaigns",
      "Brand systems and sales enablement",
    ],
    proofPoints: [
      "Strategy and creative execution in one team",
      "Clear storytelling for technical offers",
      "Scalable systems for multi-channel growth",
    ],
    schemaName: "Marketing services for technology and SaaS companies",
  },
  {
    slug: "healthcare-organizations",
    title: "Healthcare Organizations",
    metaTitle: "Marketing for Healthcare Organizations | Lienzo Studio",
    metaDescription:
      "SEO, websites, content, campaigns, and brand systems for healthcare groups, clinics, and health service organizations.",
    eyebrow: "Healthcare Marketing",
    hero: "Clear, credible marketing for organizations built around expertise and trust.",
    intro:
      "Lienzo Studio helps healthcare groups and service organizations make complex offerings easier to navigate, strengthen search visibility, and communicate with clarity across patient, partner, and professional audiences.",
    challenges: [
      "Multiple services and audiences can make digital experiences difficult to navigate.",
      "Trust depends on precise messaging, strong presentation, and useful information.",
      "Organizations need consistent communications across locations, teams, and channels.",
    ],
    services: [
      "Service-line messaging and architecture",
      "SEO and educational content",
      "Website and landing-page design",
      "Campaign and communications systems",
      "Brand identity and multi-location standards",
    ],
    proofPoints: [
      "Clarity for complex services and diverse audiences",
      "Bilingual English and Spanish communication",
      "Practical systems for internal teams",
    ],
    schemaName: "Marketing services for healthcare organizations",
  },
  {
    slug: "manufacturing-industrial",
    title: "Manufacturing & Industrial",
    metaTitle: "Marketing for Manufacturing & Industrial | Lienzo Studio",
    metaDescription:
      "SEO, websites, technical content, sales materials, and brand systems for manufacturers and industrial companies.",
    eyebrow: "Industrial Marketing",
    hero: "Make technical capability visible, understandable, and valuable to the right buyers.",
    intro:
      "We help manufacturers and industrial companies turn capabilities, processes, and market knowledge into search visibility, stronger digital experiences, and sales-ready communications.",
    challenges: [
      "Deep technical value is often hidden behind dated websites and generic messaging.",
      "Buyers research capabilities, certifications, applications, and proof before contacting sales.",
      "Distributors, partners, and end buyers need different information from the same brand.",
    ],
    services: [
      "Market and capability positioning",
      "Technical SEO and content architecture",
      "Capability pages and case studies",
      "Website strategy and design",
      "Sales presentations, catalogs, and brand systems",
    ],
    proofPoints: [
      "Structured communication for technical value",
      "Search and content built around buyer research",
      "Cross-border support for U.S. and Mexico markets",
    ],
    schemaName: "Marketing services for manufacturing and industrial companies",
  },
  {
    slug: "real-estate-development",
    title: "Real Estate & Development",
    metaTitle: "Marketing for Real Estate & Development | Lienzo Studio",
    metaDescription:
      "Positioning, websites, SEO, campaigns, and brand systems for commercial real estate, development, and property companies.",
    eyebrow: "Real Estate Marketing",
    hero: "Build the story, visibility, and confidence behind high-value places and projects.",
    intro:
      "Lienzo Studio supports developers, commercial real estate teams, and property companies with the positioning, digital experience, campaigns, and brand systems needed to engage investors, partners, tenants, and buyers.",
    challenges: [
      "Different stakeholders need a clear, consistent investment and project story.",
      "High-value projects require polished materials across long development cycles.",
      "Digital visibility and brand confidence influence early consideration.",
    ],
    services: [
      "Project and company positioning",
      "Development websites and landing pages",
      "SEO and market content",
      "Launch and leasing campaigns",
      "Investor, partner, and sales materials",
    ],
    proofPoints: [
      "Integrated strategy, editorial design, and digital execution",
      "Systems that stay consistent across project phases",
      "Bilingual support for cross-border audiences",
    ],
    schemaName: "Marketing services for real estate and development companies",
  },
  {
    slug: "financial-advisory",
    title: "Financial & Advisory Firms",
    metaTitle: "Marketing for Financial & Advisory Firms | Lienzo Studio",
    metaDescription:
      "Positioning, SEO, websites, thought leadership, and brand systems for financial, investment, and advisory firms.",
    eyebrow: "Financial Services Marketing",
    hero: "Build authority and trust before the first high-value conversation.",
    intro:
      "We help financial and advisory firms make expertise visible through sharper positioning, useful search content, high-trust websites, thought leadership, and consistent brand systems.",
    challenges: [
      "Trust must be established before a prospect is ready to speak with the team.",
      "Specialized services are difficult to explain without sounding generic.",
      "Thought leadership needs a repeatable system to support reputation and demand.",
    ],
    services: [
      "Positioning and message architecture",
      "SEO and thought-leadership strategy",
      "High-trust website experiences",
      "Reports, insights, and campaign design",
      "Brand identity and presentation systems",
    ],
    proofPoints: [
      "Clear communication for considered decisions",
      "Editorial and digital design under one strategy",
      "Bilingual support for U.S. and Latin American audiences",
    ],
    schemaName: "Marketing services for financial and advisory firms",
  },
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
  {
    slug: "bilingual-cross-border-companies",
    title: "Bilingual & Cross-Border Companies",
    metaTitle: "Marketing for Bilingual & Cross-Border Companies | Lienzo Studio",
    metaDescription:
      "Bilingual marketing, SEO, websites, campaigns, and brand systems for companies serving English-speaking and Spanish-speaking markets.",
    eyebrow: "English & Spanish Marketing",
    hero: "Marketing that works across languages, markets, and customer expectations.",
    intro:
      "Lienzo Studio helps companies communicate clearly with English-speaking, Spanish-speaking, and bicultural audiences. Our work connects strategy, search visibility, content, websites, and brand systems across the United States, Mexico, and LATAM.",
    challenges: [
      "Direct translation can lose the tone, context, and commercial meaning behind a message.",
      "Teams operating across markets need one clear strategy with room for local relevance.",
      "Search behavior and buyer expectations change across language and location.",
    ],
    services: [
      "English and Spanish positioning and messaging",
      "Bilingual SEO and content architecture",
      "Cross-border website and landing-page strategy",
      "Campaigns adapted for each market",
      "Brand systems that stay consistent across languages",
    ],
    proofPoints: [
      "A bilingual team working naturally in English and Spanish",
      "Roots in Durango with a presence in Colorado",
      "Experience connecting strategy and creative execution across markets",
    ],
    schemaName: "Marketing services for bilingual and cross-border companies",
  },
];

export const consolidatedAudienceIndustryRedirects: Record<string, string> = {
  "hispanic-owned-businesses": "/industries/bilingual-cross-border-companies",
  "latino-owned-businesses": "/industries/bilingual-cross-border-companies",
};

export const publicIndustries = industries.filter(
  (industry) => !(industry.slug in consolidatedAudienceIndustryRedirects),
);

export function getIndustryBySlug(slug: string): IndustryDefinition | undefined {
  return industries.find((industry) => industry.slug === slug);
}
