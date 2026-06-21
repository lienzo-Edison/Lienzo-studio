import type { Locale } from "@/lib/i18n";

type LocalizedIndustryContent = {
  title: string;
  eyebrow: string;
  hero: string;
  intro: string;
  challenges: string[];
  services: string[];
  proofPoints: string[];
};

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
  es: LocalizedIndustryContent;
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
    es: {
      title: "Restaurantes",
      eyebrow: "Marketing para Restaurantes",
      hero: "Marketing que ayuda a restaurantes a verse confiables, activos y listos para visitar.",
      intro:
        "Lienzo Studio ayuda a restaurantes, cafés, food trucks, panaderías y marcas de hospitalidad a construir una identidad visual más clara y una presencia digital más fuerte en redes sociales, menús, sitios web y búsqueda local.",
      challenges: [
        "Los clientes juzgan visualmente los negocios de comida antes de visitar.",
        "Menús, promociones, publicaciones y perfiles de Google muchas veces se sienten desconectados.",
        "Los restaurantes necesitan contenido constante sin quitarle tiempo a la operación diaria.",
      ],
      services: [
        "Identidad de marca y dirección de logo",
        "Diseño de menús, flyers y gráficos promocionales",
        "Planeación de contenido para Instagram y Facebook",
        "Dirección de contenido gastronómico e ideas para campañas cortas",
        "Bases para sitio web y SEO local",
      ],
      proofPoints: [
        "Comunicación bilingüe en inglés y español",
        "Experiencia con visuales para restaurantes, cafés y marcas de comida",
        "Recursos prácticos diseñados para uso diario",
      ],
    },
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
    es: {
      title: "Negocios de Servicios Locales",
      eyebrow: "Marketing para Servicios Locales",
      hero: "Una presencia digital más clara para negocios de servicios que necesitan generar confianza.",
      intro:
        "Apoyamos a proveedores de servicios locales con marca, contenido, sitio web y visibilidad local para que los clientes entiendan qué ofrecen y se sientan seguros al contactarlos.",
      challenges: [
        "Los negocios de servicios necesitan credibilidad antes de que un cliente llame.",
        "Los clientes comparan opciones rápidamente en Google, sitios web y perfiles sociales.",
        "Muchas empresas locales hacen buen trabajo, pero tienen una presentación digital débil.",
      ],
      services: [
        "Renovación de logo y marca",
        "Estructura de páginas de servicio",
        "Guía para Google Business Profile y SEO local",
        "Contenido de prueba social y proyectos destacados",
        "Diseño web enfocado en llamadas y consultas",
      ],
      proofPoints: [
        "Mensajes claros para comunidades bilingües",
        "Estructura de páginas pensada para SEO",
        "Sistemas de diseño construidos para confianza y uso repetido",
      ],
    },
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
    es: {
      title: "Empresas de Construcción",
      eyebrow: "Marketing para Construcción",
      hero: "Marketing profesional para contratistas, constructores y oficios que necesitan señales de confianza más fuertes.",
      intro:
        "Las empresas de construcción ganan trabajo con reputación, prueba visual y comunicación clara. Lienzo Studio ayuda a contratistas a presentar su trabajo profesionalmente en marca, contenido social, sitios web y búsqueda local.",
      challenges: [
        "La calidad del trabajo no siempre se refleja en la presencia digital de la empresa.",
        "Los proyectos antes/después necesitan una forma consistente de convertirse en contenido que genere confianza.",
        "Los clientes necesitan entender servicios, ubicaciones y opciones de contacto rápidamente.",
      ],
      services: [
        "Identidad de marca para contratistas y oficios",
        "Contenido para portafolio de proyectos",
        "Diseño web con páginas de servicio y ubicación",
        "Sistemas de contenido para redes sociales",
        "SEO local y apoyo para Google Business Profile",
      ],
      proofPoints: [
        "Mensajes prácticos para decisiones de compra de alta confianza",
        "Experiencia apoyando categorías de servicios y contratistas",
        "Contenido bilingüe para audiencias en español e inglés",
      ],
    },
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
    es: {
      title: "Negocios Hispanos",
      eyebrow: "Marketing para Negocios Bilingües",
      hero: "Marketing creado para negocios hispanos que atienden comunidades bilingües.",
      intro:
        "Lienzo Studio ayuda a negocios hispanos a comunicarse con fluidez cultural, diseño profesional y mensajes bilingües claros en puntos de contacto digitales y locales.",
      challenges: [
        "La traducción directa muchas veces pierde tono, cultura y contexto de compra.",
        "Los negocios que atienden comunidades bilingües necesitan consistencia en ambos idiomas.",
        "Una presentación profesional puede convertir la confianza de comunidad en crecimiento medible.",
      ],
      services: [
        "Mensajes de marca en inglés y español",
        "Contenido bilingüe para redes sociales",
        "Identidad de marca y sistemas visuales",
        "Contenido web para audiencias bilingües",
        "Bases de SEO local para descubrimiento comunitario",
      ],
      proofPoints: [
        "Equipo bilingüe que trabaja naturalmente en inglés y español",
        "Perspectiva entre México y Estados Unidos",
        "Contenido construido para claridad, no traducción palabra por palabra",
      ],
    },
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
    es: {
      title: "Negocios Latinos",
      eyebrow: "Marketing para Negocios Latinos",
      hero: "Marketing para negocios latinos que necesitan más confianza, visibilidad y alcance bilingüe.",
      intro:
        "Lienzo Studio ayuda a negocios latinos a crear una presencia profesional que comunica claramente con clientes en inglés, español y contextos biculturales a través de redes sociales, sitios web, búsqueda local y materiales impresos.",
      challenges: [
        "Los clientes necesitan señales claras de confianza antes de llamar, visitar o comprar.",
        "Muchos negocios latinos atienden audiencias que se mueven entre inglés y español.",
        "Una reputación fuerte en la comunidad necesita apoyo con visibilidad digital constante.",
      ],
      services: [
        "Mensajes de marca bilingües",
        "Manejo de redes sociales",
        "Diseño web y landing pages",
        "Diseño gráfico para promociones y materiales de cliente",
        "SEO local y apoyo de visibilidad en Google",
      ],
      proofPoints: [
        "Apoyo de marketing en inglés y español",
        "Creado para pequeños negocios y equipos liderados por fundadores",
        "Perspectiva entre México, Colorado y Estados Unidos",
      ],
    },
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
    es: {
      title: "Negocios Mexicanos",
      eyebrow: "Marketing para México y Estados Unidos",
      hero: "Marketing para negocios mexicanos que crecen en México, Estados Unidos o ambos.",
      intro:
        "Con raíces en Durango y servicio remoto para Colorado y México, Lienzo Studio ayuda a negocios mexicanos a construir una presencia profesional que funciona entre mercados, idiomas y expectativas de clientes.",
      challenges: [
        "Los negocios que cruzan mercados necesitan mensajes que se sientan naturales en ambos lados.",
        "La credibilidad local depende de servicios claros, visuales profesionales y rutas de contacto simples.",
        "Un diseño fuerte ayuda a empresas familiares y lideradas por fundadores a competir en línea.",
      ],
      services: [
        "Identidad de marca para negocios mexicanos",
        "Manejo bilingüe de redes sociales",
        "Diseño web y estructura de páginas de servicio",
        "Diseño gráfico para materiales digitales e impresos",
        "SEO local y apoyo de visibilidad en Google",
      ],
      proofPoints: [
        "Raíces en Durango y servicio remoto para Colorado",
        "Comunicación pensada primero en español o primero en inglés",
        "Experiencia con pequeños negocios y emprendedores",
      ],
    },
  },
];

export function getIndustryBySlug(slug: string): IndustryDefinition | undefined {
  return industries.find((industry) => industry.slug === slug);
}

export function getLocalizedIndustry(
  industry: IndustryDefinition,
  locale: Locale,
): LocalizedIndustryContent {
  if (locale === "es") return industry.es;

  return {
    title: industry.title,
    eyebrow: industry.eyebrow,
    hero: industry.hero,
    intro: industry.intro,
    challenges: industry.challenges,
    services: industry.services,
    proofPoints: industry.proofPoints,
  };
}
