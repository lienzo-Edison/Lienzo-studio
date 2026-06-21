export const siteUrl = "https://lienzo.studio";

export const lienzoEntity = {
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${siteUrl}/#lienzo-studio`,
  name: "Lienzo Studio",
  legalName: "Lienzo Studio",
  url: siteUrl,
  telephone: "+17209907795",
  email: "sales@lienzo.studio",
  description:
    "Lienzo Studio is a remote bilingual marketing and design agency serving Hispanic-owned, Mexican-owned, Latino-owned, and small businesses across the Colorado Front Range, Mexico, the United States, and LATAM.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+17209907795",
    contactType: "sales",
    areaServed: ["US", "MX"],
    availableLanguage: ["English", "Spanish"],
  },
  areaServed: [
    "Mexico",
    "United States",
    "Colorado",
    "Colorado Front Range",
    "Denver",
    "Fort Lupton",
    "Durango",
    "Latin America",
    "Hispanic communities",
    "Spanish-speaking communities",
  ],
  knowsAbout: [
    "Bilingual marketing",
    "Marketing for Hispanic-owned businesses",
    "Marketing for Mexican-owned businesses",
    "Latino-owned business marketing",
    "Branding agency Mexico",
    "Social media management Mexico",
    "Graphic design Mexico",
    "Small business marketing services",
    "Local SEO",
    "Google Business Profile optimization",
  ],
  sameAs: [
    "https://share.google/E2pw5dSPqc5WiHkN9",
    "https://www.instagram.com/_lienzostudio/",
    "https://www.facebook.com/people/Lienzo-Studio/61588545936546/",
  ],
};

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    ...lienzoEntity,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Bilingual Marketing Services",
      itemListElement: [
        "Branding",
        "Graphic Design",
        "Social Media Management",
        "Content Creation",
        "Marketing Strategy",
        "Website Design",
        "Local SEO",
        "Bilingual Marketing",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
          provider: { "@id": `${siteUrl}/#lienzo-studio` },
        },
      })),
    },
    openingHours: "Mo-Su 00:00-23:59",
  };
}

export function buildServiceSchema({
  name,
  description,
  url,
  audience,
  serviceType,
}: {
  name: string;
  description: string;
  url: string;
  audience?: string[];
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    serviceType: serviceType ?? name,
    provider: { "@id": `${siteUrl}/#lienzo-studio` },
    areaServed: lienzoEntity.areaServed,
    audience: audience?.map((audienceType) => ({
      "@type": "Audience",
      audienceType,
    })),
  };
}

export function buildFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
