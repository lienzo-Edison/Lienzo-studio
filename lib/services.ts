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
      en: "We help small businesses stay consistent on Instagram and Facebook with branded content, captions, planning, and scheduling designed to make your business look active and professional.",
      es: "Ayudamos a pequeños negocios a mantener una presencia constante en Instagram y Facebook con contenido de marca, textos, planeación y programación que hacen que el negocio se vea activo y profesional.",
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
        en: "Social media planning, branded content, captions, and scheduling for small businesses in Colorado, Mexico, and LATAM.",
        es: "Planeación, contenido de marca, textos y programación de redes sociales para pequeños negocios en Colorado, México y LATAM.",
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
      en: "We create visual identity systems that give your business a professional, recognizable, and consistent look across social media, print, web, and customer touchpoints.",
      es: "Creamos sistemas de identidad visual que dan a tu negocio una imagen profesional, reconocible y consistente en redes sociales, impresos, web y cada punto de contacto.",
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
        en: "Professional brand identity systems for small businesses, including logo direction, color, typography, and brand guidelines.",
        es: "Sistemas profesionales de identidad de marca para pequeños negocios, incluyendo logo, color, tipografía y guía de marca.",
      },
    },
  },
  {
    slug: "content-creation",
    href: "/services/content-creation",
    published: false,
    accent: "green",
    title: {
      en: "Content Creation",
      es: "Creación de Contenido",
    },
    description: {
      en: "We turn your ideas, offers, services, and business updates into content that feels intentional, polished, and aligned with your brand.",
      es: "Convertimos tus ideas, ofertas, servicios y novedades en contenido intencional, pulido y alineado con tu marca.",
    },
    features: {
      en: ["Social media graphics", "Promotional content", "Educational posts", "Reels and story concepts", "Campaign visuals"],
      es: ["Gráficos para redes", "Contenido promocional", "Posts educativos", "Ideas para reels e historias", "Visuales de campaña"],
    },
    cta: {
      en: "Explore Content Creation",
      es: "Explorar Creación de Contenido",
    },
    metadata: {
      title: {
        en: "Content Creation",
        es: "Creación de Contenido",
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
    published: false,
    accent: "red",
    title: {
      en: "Graphic Design",
      es: "Diseño Gráfico",
    },
    description: {
      en: "We design the visual assets your business needs to communicate clearly, promote offers, and maintain a professional image across digital and print channels.",
      es: "Diseñamos los recursos visuales que tu negocio necesita para comunicar con claridad, promover ofertas y mantener una imagen profesional en medios digitales e impresos.",
    },
    features: {
      en: ["Flyers and posters", "Menus and catalogs", "Business cards", "Promotional graphics", "Digital assets"],
      es: ["Volantes y carteles", "Menús y catálogos", "Tarjetas de presentación", "Gráficos promocionales", "Recursos digitales"],
    },
    cta: {
      en: "Explore Graphic Design",
      es: "Explorar Diseño Gráfico",
    },
    metadata: {
      title: {
        en: "Graphic Design",
        es: "Diseño Gráfico",
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
    published: false,
    accent: "blue",
    title: {
      en: "Website Design",
      es: "Diseño de Sitios Web",
    },
    description: {
      en: "We help small businesses create clean, modern websites that explain their services, build trust, and make it easier for customers to contact them.",
      es: "Ayudamos a pequeños negocios a crear sitios web limpios y modernos que explican sus servicios, generan confianza y facilitan el contacto con clientes.",
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
        en: "Website Design",
        es: "Diseño de Sitios Web",
      },
      description: {
        en: "Modern website design, landing pages, service pages, and website refreshes for small businesses.",
        es: "Diseño web moderno, landing pages, páginas de servicio y renovación de sitios para pequeños negocios.",
      },
    },
  },
  {
    slug: "local-seo",
    href: "/services/local-seo",
    published: false,
    accent: "green",
    title: {
      en: "Local SEO & Google Visibility",
      es: "SEO Local y Visibilidad en Google",
    },
    description: {
      en: "We help businesses improve their local online presence through Google Business Profile optimization, service page structure, local keywords, and visibility-focused content.",
      es: "Ayudamos a negocios a mejorar su presencia local con optimización de Google Business Profile, estructura de páginas de servicio, palabras clave locales y contenido enfocado en visibilidad.",
    },
    features: {
      en: ["Google Business Profile", "Local SEO basics", "Service page structure", "Review strategy guidance", "Visibility tracking"],
      es: ["Google Business Profile", "Bases de SEO local", "Estructura de servicios", "Estrategia de reseñas", "Seguimiento de visibilidad"],
    },
    cta: {
      en: "Explore Local SEO",
      es: "Explorar SEO Local",
    },
    metadata: {
      title: {
        en: "Local SEO & Google Visibility",
        es: "SEO Local y Visibilidad en Google",
      },
      description: {
        en: "Local SEO and Google Business Profile optimization for small businesses that want stronger local search visibility.",
        es: "SEO local y optimización de Google Business Profile para pequeños negocios que buscan más visibilidad local.",
      },
    },
  },
];

