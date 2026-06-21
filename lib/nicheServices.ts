export type NicheServiceDefinition = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  answer: string;
  intro: string;
  audiences: string[];
  included: string[];
  authoritySignals: string[];
  relatedLinks: { label: string; href: string }[];
  faqs: { question: string; answer: string }[];
};

export const nicheServices: NicheServiceDefinition[] = [
  {
    slug: "bilingual-marketing-agency",
    title: "Bilingual Marketing Agency",
    metaTitle: "Bilingual Marketing Agency | Lienzo Studio",
    metaDescription:
      "Bilingual marketing agency for English and Spanish audiences, serving Hispanic-owned, Mexican-owned, Latino-owned, and small businesses.",
    eyebrow: "English and Spanish Marketing",
    h1: "Bilingual Marketing Agency for English and Spanish Audiences",
    answer:
      "Lienzo Studio is a bilingual marketing agency that helps businesses communicate clearly in English and Spanish through branding, social media, content, graphic design, websites, and local SEO.",
    intro:
      "Bilingual marketing is not just translation. It is the work of adapting message, tone, visuals, offers, and customer context so a brand feels natural to Spanish-speaking, English-speaking, and bicultural audiences.",
    audiences: [
      "Hispanic-owned businesses",
      "Mexican-owned businesses",
      "Latino-owned businesses",
      "Small businesses serving bilingual communities",
    ],
    included: [
      "English and Spanish brand messaging",
      "Bilingual social media content",
      "Website and service-page copy",
      "Graphic design for digital and print",
      "Local SEO content for bilingual markets",
    ],
    authoritySignals: [
      "Rooted in Durango, Mexico and serving the Colorado Front Range remotely",
      "Built around Spanish and English communication",
      "Focused on small businesses, restaurants, service companies, and entrepreneurs",
    ],
    relatedLinks: [
      { label: "Hispanic-Owned Businesses", href: "/industries/hispanic-owned-businesses" },
      { label: "Mexican-Owned Businesses", href: "/industries/mexican-owned-businesses" },
      { label: "Mexico", href: "/locations/mexico" },
    ],
    faqs: [
      {
        question: "What is a bilingual marketing agency?",
        answer:
          "A bilingual marketing agency creates strategy, messaging, design, and content for audiences that use more than one language. For Lienzo Studio, that means English and Spanish marketing for businesses serving Mexico, the United States, and bilingual communities.",
      },
      {
        question: "Is bilingual marketing the same as translation?",
        answer:
          "No. Translation changes words from one language to another. Bilingual marketing adapts the message, culture, tone, visual context, offer, and customer journey so the brand feels natural in both languages.",
      },
      {
        question: "Can Lienzo Studio create content in English and Spanish?",
        answer:
          "Yes. Lienzo Studio supports English and Spanish content for branding, social media, websites, campaigns, local SEO pages, and graphic design materials.",
      },
    ],
  },
  {
    slug: "marketing-agency-for-hispanic-businesses",
    title: "Marketing Agency for Hispanic Businesses",
    metaTitle: "Marketing Agency for Hispanic Businesses | Lienzo Studio",
    metaDescription:
      "Marketing agency for Hispanic-owned businesses that need bilingual branding, social media, websites, graphic design, content, and local SEO.",
    eyebrow: "Hispanic Business Marketing",
    h1: "Marketing Agency for Hispanic-Owned Businesses",
    answer:
      "Lienzo Studio helps Hispanic-owned businesses build a stronger presence with bilingual branding, social media management, content creation, graphic design, website design, and local SEO.",
    intro:
      "Hispanic-owned businesses often serve communities where trust, language, family, local reputation, and cultural fluency matter. The right marketing system should make the business easier to recognize, understand, recommend, and contact.",
    audiences: [
      "Hispanic-owned restaurants",
      "Hispanic-owned service businesses",
      "Hispanic entrepreneurs",
      "Businesses serving Spanish-speaking customers",
    ],
    included: [
      "Brand identity and visual systems",
      "Bilingual social media planning",
      "Spanish and English website content",
      "Local SEO and Google visibility support",
      "Promotional graphics, menus, flyers, and campaigns",
    ],
    authoritySignals: [
      "Bilingual team working naturally in English and Spanish",
      "Cross-border experience across Mexico and the United States",
      "Specific focus on Hispanic-owned, Mexican-owned, and local small businesses",
    ],
    relatedLinks: [
      { label: "Hispanic-Owned Businesses", href: "/industries/hispanic-owned-businesses" },
      { label: "Bilingual Marketing Agency", href: "/services/bilingual-marketing-agency" },
      { label: "Small Business Marketing", href: "/services/small-business-marketing-services" },
    ],
    faqs: [
      {
        question: "Do you work with Hispanic-owned businesses?",
        answer:
          "Yes. Lienzo Studio works with Hispanic-owned businesses that need branding, social media, graphic design, websites, local SEO, and bilingual content in English and Spanish.",
      },
      {
        question: "What marketing services help Hispanic-owned businesses most?",
        answer:
          "Most Hispanic-owned businesses benefit from a clear brand identity, consistent social media, accurate Google Business Profile information, service pages, review strategy, and bilingual content where appropriate.",
      },
      {
        question: "Can you help businesses reach Spanish-speaking customers?",
        answer:
          "Yes. Lienzo Studio can create Spanish-language and bilingual marketing assets designed for Spanish-speaking, English-speaking, and bicultural audiences.",
      },
    ],
  },
  {
    slug: "marketing-agency-for-mexican-businesses",
    title: "Marketing Agency for Mexican Businesses",
    metaTitle: "Marketing Agency for Mexican Businesses | Lienzo Studio",
    metaDescription:
      "Marketing agency for Mexican-owned businesses in Mexico and the United States, with bilingual branding, social media, design, websites, and local SEO.",
    eyebrow: "Mexican Business Marketing",
    h1: "Marketing Agency for Mexican-Owned Businesses",
    answer:
      "Lienzo Studio helps Mexican-owned businesses in Mexico and the United States create professional brands, content, social media, websites, and local visibility systems.",
    intro:
      "Mexican-owned businesses often operate across markets, languages, and customer expectations. Lienzo Studio helps build a brand presence that feels professional in Mexico, credible in the United States, and natural for bilingual audiences.",
    audiences: [
      "Mexican-owned businesses in Mexico",
      "Mexican-owned businesses in the United States",
      "Founder-led and family-owned businesses",
      "Cross-border brands",
    ],
    included: [
      "Brand identity for Mexican-owned businesses",
      "Social media management in English and Spanish",
      "Graphic design for digital and print",
      "Website design and service-page structure",
      "Local SEO for Mexico and U.S. markets",
    ],
    authoritySignals: [
      "Durango roots and Colorado presence",
      "English and Spanish communication",
      "Experience with entrepreneurs, local businesses, restaurants, and service providers",
    ],
    relatedLinks: [
      { label: "Mexican-Owned Businesses", href: "/industries/mexican-owned-businesses" },
      { label: "Mexico Marketing", href: "/locations/mexico" },
      { label: "Branding Agency Mexico", href: "/services/branding-agency-mexico" },
    ],
    faqs: [
      {
        question: "Do you work with Mexican-owned businesses?",
        answer:
          "Yes. Lienzo Studio works with Mexican-owned businesses in Mexico and the United States, including small businesses, restaurants, service providers, entrepreneurs, and growing brands.",
      },
      {
        question: "Can you help a Mexican business reach U.S. customers?",
        answer:
          "Yes. Lienzo Studio can help shape bilingual messaging, brand visuals, website structure, social content, and local SEO content for businesses serving both Mexico and the United States.",
      },
      {
        question: "Do you provide marketing services in Mexico?",
        answer:
          "Yes. Lienzo Studio supports businesses in Mexico with branding, social media management, content creation, graphic design, website design, and local SEO foundations.",
      },
    ],
  },
  {
    slug: "latino-owned-business-marketing",
    title: "Latino-Owned Business Marketing",
    metaTitle: "Latino-Owned Business Marketing | Lienzo Studio",
    metaDescription:
      "Marketing for Latino-owned businesses, including bilingual branding, social media, websites, content, graphic design, and local SEO.",
    eyebrow: "Latino Business Marketing",
    h1: "Marketing for Latino-Owned Businesses",
    answer:
      "Lienzo Studio supports Latino-owned businesses with bilingual marketing services that strengthen brand trust, social media consistency, website clarity, and local search visibility.",
    intro:
      "Latino-owned businesses need marketing that respects culture while still being practical, professional, and conversion-focused. We help businesses show up consistently across the channels customers use to decide who to trust.",
    audiences: [
      "Latino entrepreneurs",
      "Latino-owned restaurants",
      "Latino-owned local service businesses",
      "Bilingual community-focused brands",
    ],
    included: [
      "Brand strategy and identity",
      "Bilingual social media content",
      "Website and landing page design",
      "Local SEO content",
      "Print and digital graphic design",
    ],
    authoritySignals: [
      "Focused on Spanish-speaking and bilingual audiences",
      "Useful for local businesses that rely on trust and referrals",
      "Designed for businesses in the United States, Mexico, and LATAM",
    ],
    relatedLinks: [
      { label: "Hispanic-Owned Businesses", href: "/industries/hispanic-owned-businesses" },
      { label: "Bilingual Marketing", href: "/services/bilingual-marketing-agency" },
      { label: "Local Service Businesses", href: "/industries/local-service-businesses" },
    ],
    faqs: [
      {
        question: "What is Latino-owned business marketing?",
        answer:
          "Latino-owned business marketing is marketing built around the business goals, language needs, cultural context, and customer trust signals of Latino entrepreneurs and companies.",
      },
      {
        question: "Does Latino business marketing need to be bilingual?",
        answer:
          "Not always, but many Latino-owned businesses benefit from English and Spanish content because their customers, staff, and communities may move naturally between both languages.",
      },
      {
        question: "What should a Latino-owned business improve first?",
        answer:
          "The best first step is usually the most visible trust gap: brand identity, Google Business Profile, website clarity, social media consistency, or customer-facing design materials.",
      },
    ],
  },
  {
    slug: "small-business-marketing-services",
    title: "Small Business Marketing Services",
    metaTitle: "Small Business Marketing Services | Lienzo Studio",
    metaDescription:
      "Small business marketing services including branding, social media, content creation, graphic design, website design, and local SEO.",
    eyebrow: "Small Business Marketing",
    h1: "Small Business Marketing Services Built for Trust and Visibility",
    answer:
      "Lienzo Studio provides small business marketing services that help local companies look professional, stay consistent, explain their services, and become easier to find online.",
    intro:
      "Small businesses usually do not need random marketing activity. They need a practical system: a credible brand, clear services, consistent content, useful visuals, local visibility, and easy contact paths.",
    audiences: [
      "Local businesses",
      "Restaurants and cafes",
      "Contractors and service companies",
      "Entrepreneurs and founder-led businesses",
    ],
    included: [
      "Brand identity",
      "Social media management",
      "Content creation",
      "Graphic design",
      "Website design",
      "Local SEO and Google visibility",
    ],
    authoritySignals: [
      "Built for small business budgets and workflows",
      "Focused on practical assets businesses can use",
      "Bilingual support for English and Spanish audiences",
    ],
    relatedLinks: [
      { label: "Services", href: "/services" },
      { label: "Restaurants", href: "/industries/restaurants" },
      { label: "Local Service Businesses", href: "/industries/local-service-businesses" },
    ],
    faqs: [
      {
        question: "What marketing services does a small business need first?",
        answer:
          "Most small businesses should start with the weakest customer trust signal: brand identity, website clarity, social media consistency, Google Business Profile, or local SEO service pages.",
      },
      {
        question: "Can Lienzo Studio handle multiple small business marketing services together?",
        answer:
          "Yes. Lienzo Studio can combine branding, social media, content creation, graphic design, website design, and local SEO into one practical marketing system.",
      },
      {
        question: "Do you work with very small or new businesses?",
        answer:
          "Yes. Lienzo Studio works with entrepreneurs, new businesses, family-owned businesses, and established small businesses that need a more professional presence.",
      },
    ],
  },
  {
    slug: "branding-agency-mexico",
    title: "Branding Agency Mexico",
    metaTitle: "Branding Agency Mexico | Lienzo Studio",
    metaDescription:
      "Branding agency for businesses in Mexico, offering logo direction, brand identity, color, typography, visual systems, and brand applications.",
    eyebrow: "Branding in Mexico",
    h1: "Branding Agency in Mexico for Small Businesses",
    answer:
      "Lienzo Studio provides branding services for businesses in Mexico, including brand identity, logo direction, color palettes, typography, visual systems, and customer-facing brand applications.",
    intro:
      "A strong brand helps Mexican businesses look professional across social media, print, signage, packaging, websites, menus, and sales materials. The goal is consistency customers can remember and trust.",
    audiences: [
      "Small businesses in Mexico",
      "Mexican-owned businesses",
      "Restaurants, retail, and service companies",
      "Businesses preparing to expand into the U.S.",
    ],
    included: [
      "Logo direction and brand identity",
      "Color palette and typography",
      "Brand sheets and visual guidelines",
      "Print and digital applications",
      "Social media visual direction",
    ],
    authoritySignals: [
      "Roots in Durango, Mexico",
      "Bilingual English and Spanish team",
      "Brand systems built for digital, print, and local customer touchpoints",
    ],
    relatedLinks: [
      { label: "Brand Identity", href: "/services/brand-identity" },
      { label: "Mexico", href: "/locations/mexico" },
      { label: "Mexican-Owned Businesses", href: "/industries/mexican-owned-businesses" },
    ],
    faqs: [
      {
        question: "Do you offer branding services in Mexico?",
        answer:
          "Yes. Lienzo Studio offers branding for businesses in Mexico, including logo direction, visual identity, typography, color, brand sheets, and brand applications.",
      },
      {
        question: "Can you redesign an existing brand in Mexico?",
        answer:
          "Yes. Lienzo Studio can refresh or redesign an existing brand while preserving the parts customers already recognize.",
      },
      {
        question: "What does a branding project include?",
        answer:
          "A branding project can include logo direction, color palette, typography, brand guidelines, social media visual direction, and customer-facing materials depending on the business need.",
      },
    ],
  },
  {
    slug: "social-media-management-mexico",
    title: "Social Media Management Mexico",
    metaTitle: "Social Media Management Mexico | Lienzo Studio",
    metaDescription:
      "Social media management in Mexico for small businesses, including content planning, branded posts, captions, scheduling, and bilingual strategy.",
    eyebrow: "Social Media in Mexico",
    h1: "Social Media Management in Mexico",
    answer:
      "Lienzo Studio provides social media management for businesses in Mexico, including content planning, branded post design, captions, scheduling, campaign ideas, and bilingual strategy.",
    intro:
      "Customers in Mexico use Instagram and Facebook to evaluate restaurants, service providers, retailers, and local brands. A consistent, professional social presence helps businesses stay visible and trustworthy.",
    audiences: [
      "Restaurants and cafes in Mexico",
      "Retail and local service businesses",
      "Mexican-owned businesses",
      "Brands serving bilingual or tourist audiences",
    ],
    included: [
      "Monthly content planning",
      "Branded post and carousel design",
      "Captions and scheduling",
      "Campaign and promotion ideas",
      "Spanish and bilingual content support",
    ],
    authoritySignals: [
      "Durango roots and northern Mexico perspective",
      "Visual design plus strategy",
      "Content systems built for small business consistency",
    ],
    relatedLinks: [
      { label: "Social Media Management", href: "/services/social-media-management" },
      { label: "Mexico", href: "/locations/mexico" },
      { label: "Restaurants", href: "/industries/restaurants" },
    ],
    faqs: [
      {
        question: "Do you offer social media management in Mexico?",
        answer:
          "Yes. Lienzo Studio offers social media management for businesses in Mexico, including content planning, post design, captions, scheduling, and strategy.",
      },
      {
        question: "Which platforms do you manage?",
        answer:
          "Lienzo Studio primarily supports Instagram and Facebook for small businesses, with content systems that can also support campaigns, stories, reels, and profile updates.",
      },
      {
        question: "Can you create content in Spanish?",
        answer:
          "Yes. Lienzo Studio can create Spanish-language and bilingual content for businesses in Mexico and cross-border markets.",
      },
    ],
  },
  {
    slug: "graphic-design-mexico",
    title: "Graphic Design Mexico",
    metaTitle: "Graphic Design Mexico | Lienzo Studio",
    metaDescription:
      "Graphic design services in Mexico for flyers, menus, catalogs, business cards, social media graphics, campaigns, and brand materials.",
    eyebrow: "Graphic Design in Mexico",
    h1: "Graphic Design Services in Mexico",
    answer:
      "Lienzo Studio provides graphic design services in Mexico for small businesses that need professional flyers, menus, catalogs, business cards, social graphics, campaigns, and branded materials.",
    intro:
      "Graphic design helps customers understand an offer quickly. For local businesses in Mexico, clear and professional design can improve promotions, menus, signage, social posts, print materials, and everyday brand trust.",
    audiences: [
      "Restaurants and cafes",
      "Retail businesses",
      "Service providers",
      "Entrepreneurs and Mexican-owned brands",
    ],
    included: [
      "Flyers and posters",
      "Menus and catalogs",
      "Business cards",
      "Social media graphics",
      "Promotional campaign materials",
    ],
    authoritySignals: [
      "Design systems aligned with brand identity",
      "Digital and print-ready asset thinking",
      "Spanish and bilingual customer-facing communication",
    ],
    relatedLinks: [
      { label: "Graphic Design", href: "/services/graphic-design" },
      { label: "Mexico", href: "/locations/mexico" },
      { label: "Restaurants", href: "/industries/restaurants" },
    ],
    faqs: [
      {
        question: "Do you offer graphic design services in Mexico?",
        answer:
          "Yes. Lienzo Studio offers graphic design for businesses in Mexico, including flyers, menus, catalogs, business cards, social media graphics, and promotional materials.",
      },
      {
        question: "Can you design both digital and print materials?",
        answer:
          "Yes. Lienzo Studio designs assets for both digital and print use, depending on the format, platform, and business need.",
      },
      {
        question: "Can graphic design match my existing brand?",
        answer:
          "Yes. Lienzo Studio can design new materials that follow an existing brand or help create a clearer visual direction first.",
      },
    ],
  },
];

export function getNicheServiceBySlug(slug: string): NicheServiceDefinition | undefined {
  return nicheServices.find((service) => service.slug === slug);
}
