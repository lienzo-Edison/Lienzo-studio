import type { Locale } from "@/lib/i18n";

export type ServiceAccent = "red" | "blue" | "green";

export type ServiceDefinition = {
  slug: string;
  href: `/services/${string}`;
  published: boolean;
  accent: ServiceAccent;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  features: Record<Locale, string[]>;
  cta: Record<Locale, string>;
  metadata: {
    title: Record<Locale, string>;
    description: Record<Locale, string>;
  };
};

export const services: ServiceDefinition[] = [
  {
    slug: "social-media-management",
    href: "/services/social-media-management",
    published: true,
    accent: "red",
    title: {
      en: "Social Media Management",
      es: "Manejo de Redes Sociales",
    },
    description: {
      en: "We turn social channels into a consistent distribution system for expertise, campaigns, employer brand, and company news. Everything is planned around business priorities rather than posting for its own sake.",
      es: "Convertimos las redes en un sistema constante de distribución para experiencia, campañas, marca empleadora y noticias de la empresa, planeado alrededor de prioridades de negocio.",
    },
    features: {
      en: [
        "Monthly content planning",
        "Branded post design",
        "Captions and scheduling",
        "Instagram and Facebook",
        "Content consistency",
      ],
      es: [
        "Planeación mensual",
        "Diseño de publicaciones",
        "Textos y programación",
        "Instagram y Facebook",
        "Consistencia de contenido",
      ],
    },
    cta: {
      en: "Explore Social Media Management",
      es: "Explorar Manejo de Redes",
    },
    metadata: {
      title: {
        en: "Social Media Management",
        es: "Manejo de Redes Sociales",
      },
      description: {
        en: "Social media strategy, branded content, executive visibility, campaigns, and distribution for companies across the U.S., Mexico, and LATAM.",
        es: "Estrategia de redes, contenido de marca, visibilidad ejecutiva, campañas y distribución para empresas en Estados Unidos, México y LATAM.",
      },
    },
  },
  {
    slug: "brand-identity",
    href: "/services/brand-identity",
    published: true,
    accent: "blue",
    title: {
      en: "Brand Identity",
      es: "Identidad de Marca",
    },
    description: {
      en: "We create strategic identity systems that clarify your position and give teams a distinctive, consistent brand across marketing, sales, digital products, and customer touchpoints.",
      es: "Creamos sistemas estratégicos de identidad que aclaran tu posición y dan al equipo una marca distintiva y consistente en marketing, ventas, productos digitales y cada punto de contacto.",
    },
    features: {
      en: ["Logo direction", "Color palette", "Typography", "Brand guidelines", "Visual consistency"],
      es: ["Dirección de logo", "Paleta de color", "Tipografía", "Guía de marca", "Consistencia visual"],
    },
    cta: {
      en: "Explore Brand Identity",
      es: "Explorar Identidad de Marca",
    },
    metadata: {
      title: {
        en: "Brand Identity",
        es: "Identidad de Marca",
      },
      description: {
        en: "Strategic brand identity systems including positioning alignment, logo direction, color, typography, and practical guidelines.",
        es: "Sistemas estratégicos de identidad con alineación de posicionamiento, dirección de logo, color, tipografía y guías prácticas.",
      },
    },
  },
  {
    slug: "content-creation",
    href: "/services/content-creation",
    published: true,
    accent: "green",
    title: {
      en: "Campaigns & Content",
      es: "Campañas y Contenido",
    },
    description: {
      en: "We turn expertise and commercial priorities into campaigns, thought leadership, case studies, and content that build authority and move buyers toward action.",
      es: "Convertimos experiencia y prioridades comerciales en campañas, liderazgo de opinión, casos de estudio y contenido que construyen autoridad y acercan a los compradores a la acción.",
    },
    features: {
      en: ["Campaign concepts", "Thought leadership", "Case studies", "SEO content", "Multi-channel creative"],
      es: ["Conceptos de campaña", "Liderazgo de opinión", "Casos de estudio", "Contenido SEO", "Creatividad multicanal"],
    },
    cta: {
      en: "Explore Content Creation",
      es: "Explorar Creación de Contenido",
    },
    metadata: {
      title: {
        en: "Campaigns & Content",
        es: "Campañas y Contenido",
      },
      description: {
        en: "Strategic content creation for social media, promotions, education, reels, stories, and campaigns.",
        es: "Creación estratégica de contenido para redes sociales, promociones, educación, reels, historias y campañas.",
      },
    },
  },
  {
    slug: "graphic-design",
    href: "/services/graphic-design",
    published: true,
    accent: "red",
    title: {
      en: "Marketing & Sales Design",
      es: "Diseño para Marketing y Ventas",
    },
    description: {
      en: "We design the presentations, reports, sales materials, campaign assets, and communications your team needs to explain complex value clearly and consistently.",
      es: "Diseñamos presentaciones, reportes, materiales comerciales, activos de campaña y comunicaciones para explicar valor complejo con claridad y consistencia.",
    },
    features: {
      en: ["Sales presentations", "Reports and publications", "Campaign systems", "Capability materials", "Digital and print assets"],
      es: ["Presentaciones de ventas", "Reportes y publicaciones", "Sistemas de campaña", "Materiales de capacidades", "Activos digitales e impresos"],
    },
    cta: {
      en: "Explore Graphic Design",
      es: "Explorar Diseño Gráfico",
    },
    metadata: {
      title: {
        en: "Marketing & Sales Design",
        es: "Diseño para Marketing y Ventas",
      },
      description: {
        en: "Professional graphic design for flyers, menus, catalogs, business cards, promotions, and digital assets.",
        es: "Diseño gráfico profesional para volantes, menús, catálogos, tarjetas, promociones y recursos digitales.",
      },
    },
  },
  {
    slug: "website-design",
    href: "/services/website-design",
    published: true,
    accent: "blue",
    title: {
      en: "Strategic Websites & Landing Pages",
      es: "Sitios Web Estratégicos y Landing Pages",
    },
    description: {
      en: "We create strategic websites and landing pages that explain complex offers, support search visibility, build buyer confidence, and turn attention into qualified conversations.",
      es: "Creamos sitios web y landing pages estratégicos que explican ofertas complejas, apoyan la visibilidad, generan confianza y convierten atención en conversaciones calificadas.",
    },
    features: {
      en: ["Landing pages", "Service pages", "Website refreshes", "Mobile-friendly layouts", "Contact-focused structure"],
      es: ["Landing pages", "Páginas de servicio", "Renovación de sitios", "Diseño adaptable a móvil", "Estructura enfocada en contacto"],
    },
    cta: {
      en: "Explore Website Design",
      es: "Explorar Diseño Web",
    },
    metadata: {
      title: {
        en: "Strategic Websites & Landing Pages",
        es: "Sitios Web Estratégicos y Landing Pages",
      },
      description: {
        en: "Website strategy and design, landing pages, service architecture, conversion paths, and SEO-ready content structure.",
        es: "Estrategia y diseño de sitios, landing pages, arquitectura de servicios, rutas de conversión y estructura preparada para SEO.",
      },
    },
  },
  {
    slug: "local-seo",
    href: "/services/local-seo",
    published: true,
    accent: "green",
    title: {
      en: "SEO & Search Visibility",
      es: "SEO y Visibilidad en Buscadores",
    },
    description: {
      en: "We build search strategies around the services, problems, and markets your buyers research by combining technical foundations, content architecture, and authority-building opportunities.",
      es: "Construimos estrategias de búsqueda alrededor de los servicios, problemas y mercados que investigan tus compradores, combinando bases técnicas, arquitectura de contenido y oportunidades de autoridad.",
    },
    features: {
      en: ["Search opportunity research", "Technical SEO foundations", "Service and industry pages", "Content architecture", "Visibility measurement"],
      es: ["Investigación de oportunidades", "Bases técnicas de SEO", "Páginas de servicios e industrias", "Arquitectura de contenido", "Medición de visibilidad"],
    },
    cta: {
      en: "Explore Local SEO",
      es: "Explorar SEO Local",
    },
    metadata: {
      title: {
        en: "SEO & Search Visibility",
        es: "SEO y Visibilidad en Buscadores",
      },
      description: {
        en: "SEO strategy, technical foundations, content architecture, service pages, and search visibility across local and broader markets.",
        es: "Estrategia SEO, bases técnicas, arquitectura de contenido, páginas de servicio y visibilidad en mercados locales y amplios.",
      },
    },
  },
];

const positioningOrder = [
  "local-seo",
  "website-design",
  "content-creation",
  "social-media-management",
  "brand-identity",
  "graphic-design",
];

export const positionedServices = [...services].sort(
  (a, b) => positioningOrder.indexOf(a.slug) - positioningOrder.indexOf(b.slug),
);
