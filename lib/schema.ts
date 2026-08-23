export const siteUrl = "https://www.lienzo.studio";
export const googleBusinessProfileUrl =
  "https://www.google.com/maps?cid=2089490415715043182";

export const socialProfiles = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/_lienzostudio/",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/people/Lienzo-Studio/61588545936546/",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/lienzostudio",
  },
] as const;

const organizationId = `${siteUrl}/#organization`;
const localBusinessId = `${siteUrl}/#local-business`;

export const primaryServiceAreas = [
  {
    "@type": "State",
    name: "Colorado",
    containedInPlace: {
      "@type": "Country",
      name: "United States",
    },
  },
  {
    "@type": "State",
    name: "Durango",
    containedInPlace: {
      "@type": "Country",
      name: "Mexico",
    },
  },
] as const;

export const serviceAreas = [
  ...primaryServiceAreas,
  {
    "@type": "Country",
    name: "United States",
  },
  {
    "@type": "Country",
    name: "Mexico",
  },
] as const;

export const lienzoEntity = {
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": localBusinessId,
  name: "Lienzo Studio",
  legalName: "Lienzo Studio",
  url: siteUrl,
  telephone: "+17209907795",
  email: "sales@lienzo.studio",
  description:
    "Lienzo Studio is a bilingual marketing and creative agency helping established and growth-stage companies improve search visibility, create demand, clarify positioning, and build stronger brands. The studio focuses on Colorado and Durango, Mexico, while serving businesses throughout the United States and Mexico.",
  foundingDate: "2026-02",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 3,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+17209907795",
    contactType: "sales",
    areaServed: serviceAreas,
    availableLanguage: ["English", "Spanish"],
  },
  areaServed: serviceAreas,
  knowsAbout: [
    "Bilingual marketing",
    "Marketing strategy for established companies",
    "SEO strategy",
    "Strategic website design",
    "Content marketing",
    "Demand generation campaigns",
    "Brand strategy",
    "Marketing for Mexican-owned businesses",
    "Marketing for Spanish-speaking audiences",
    "Cross-border marketing",
    "Branding agency Mexico",
    "Social media management Mexico",
    "Graphic design Mexico",
    "Small business marketing services",
    "Local SEO",
    "Google Business Profile optimization",
  ],
  sameAs: [
    googleBusinessProfileUrl,
    ...socialProfiles.map((profile) => profile.url),
  ],
};

export function buildOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: lienzoEntity.name,
    legalName: lienzoEntity.legalName,
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/android-chrome-512x512.png`,
      width: 512,
      height: 512,
    },
    email: lienzoEntity.email,
    telephone: lienzoEntity.telephone,
    foundingDate: lienzoEntity.foundingDate,
    numberOfEmployees: lienzoEntity.numberOfEmployees,
    contactPoint: lienzoEntity.contactPoint,
    areaServed: lienzoEntity.areaServed,
    sameAs: lienzoEntity.sameAs,
  };
}

export function buildLocalBusinessSchema() {
  return {
    ...lienzoEntity,
    parentOrganization: { "@id": organizationId },
    image: `${siteUrl}/og-image.png`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Marketing, SEO, Brand, and Design Services",
      itemListElement: [
        "Marketing Strategy",
        "SEO Strategy",
        "Strategic Website Design",
        "Campaigns and Content",
        "Brand Strategy and Identity",
        "Marketing and Sales Design",
        "Social Media Distribution",
        "Bilingual Marketing",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
          provider: { "@id": localBusinessId },
        },
      })),
    },
  };
}

export function buildSiteSchemaGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [buildOrganizationSchema(), buildLocalBusinessSchema()],
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
    provider: { "@id": localBusinessId },
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
