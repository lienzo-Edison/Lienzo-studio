export type CityData = {
  slug: string;
  name: string;
  state: string;
  county: string;
  distanceMiles: number;
  direction: string;
  nearby: string[];
  en: {
    heroTitle: string;
    heroSubtitle: string;
    localContextTitle: string;
    localContext: string;
    proximityNote: string;
    metaTitle: string;
    metaDescription: string;
  };
  es: {
    heroTitle: string;
    heroSubtitle: string;
    localContextTitle: string;
    localContext: string;
    proximityNote: string;
  };
};

export const cities: CityData[] = [
  {
    slug: "greeley-co",
    name: "Greeley",
    state: "CO",
    county: "Weld County",
    distanceMiles: 16,
    direction: "northeast",
    nearby: ["Evans", "Windsor", "Fort Lupton", "Loveland"],
    en: {
      heroTitle: "Social Media Management in Greeley, CO",
      heroSubtitle:
        "Professional content and community management for small and medium businesses in Greeley and Weld County. Local team, agency quality, accessible price.",
      localContextTitle: "Greeley Businesses Are Growing. Your Social Media Should Be Too.",
      localContext:
        "Greeley is one of the fastest-growing cities on the Front Range. With a strong economy anchored by agriculture, healthcare, oil and gas, and the University of Northern Colorado, competition for local customers is real. A consistent, professional social media presence puts your business in front of the Greeley community every day, without you having to manage it.",
      proximityNote: "Based in Fort Lupton, just 16 miles from Greeley. We know this market.",
      metaTitle: "Social Media Management in Greeley, CO | Lienzo Studio",
      metaDescription:
        "Social media management and brand identity for small businesses in Greeley, Colorado. Content creation, posting, and community management on Instagram and Facebook. Local agency based in Fort Lupton, CO.",
    },
    es: {
      heroTitle: "Manejo de Redes Sociales en Greeley, CO",
      heroSubtitle:
        "Contenido profesional y gestión de comunidad para pequeñas y medianas empresas en Greeley y el condado de Weld. Equipo local, calidad de agencia, precio accesible.",
      localContextTitle: "Los Negocios en Greeley Están Creciendo. Tus Redes Sociales También Deberían.",
      localContext:
        "Greeley es una de las ciudades de más rápido crecimiento en el Front Range. Con una economía fuerte anclada en la agricultura, la salud, el petróleo y gas, y la Universidad de Northern Colorado, la competencia por clientes locales es real. Una presencia profesional y consistente en redes sociales pone a tu negocio frente a la comunidad de Greeley todos los días, sin que tú tengas que administrarlo.",
      proximityNote: "Con base en Fort Lupton, a solo 16 millas de Greeley. Conocemos este mercado.",
    },
  },
  {
    slug: "longmont-co",
    name: "Longmont",
    state: "CO",
    county: "Boulder County",
    distanceMiles: 23,
    direction: "northwest",
    nearby: ["Boulder", "Firestone", "Frederick", "Lyons"],
    en: {
      heroTitle: "Social Media Management in Longmont, CO",
      heroSubtitle:
        "Professional content and brand identity for small and medium businesses in Longmont. Strategy-first marketing from a team that understands the Front Range.",
      localContextTitle: "Longmont Has One of the Most Active Small Business Communities in Colorado.",
      localContext:
        "From tech startups and manufacturing companies to locally owned restaurants and retail shops, Longmont's business community is competitive and growing. Customers in Longmont discover local businesses through Instagram and Facebook every day. If your social media isn't active and professional, you're leaving visibility on the table.",
      proximityNote: "Based in Fort Lupton, 23 miles from Longmont. We serve the full Boulder County corridor.",
      metaTitle: "Social Media Management in Longmont, CO | Lienzo Studio",
      metaDescription:
        "Social media management and brand identity for small businesses in Longmont, Colorado. Professional content creation, posting, and community management on Instagram and Facebook. Fort Lupton-based agency.",
    },
    es: {
      heroTitle: "Manejo de Redes Sociales en Longmont, CO",
      heroSubtitle:
        "Contenido profesional e identidad de marca para pequeñas y medianas empresas en Longmont. Marketing estratégico de un equipo que conoce el Front Range.",
      localContextTitle: "Longmont Tiene Una de las Comunidades de Pequeños Negocios Más Activas de Colorado.",
      localContext:
        "Desde startups tecnológicas y empresas de manufactura hasta restaurantes y tiendas locales, la comunidad empresarial de Longmont es competitiva y está en crecimiento. Los clientes en Longmont descubren negocios locales a través de Instagram y Facebook todos los días. Si tus redes sociales no están activas y son profesionales, estás dejando visibilidad sobre la mesa.",
      proximityNote: "Con base en Fort Lupton, a 23 millas de Longmont. Servimos todo el corredor del condado de Boulder.",
    },
  },
  {
    slug: "brighton-co",
    name: "Brighton",
    state: "CO",
    county: "Adams County",
    distanceMiles: 12,
    direction: "south",
    nearby: ["Commerce City", "Thornton", "Fort Lupton", "Lochbuie"],
    en: {
      heroTitle: "Social Media Management in Brighton, CO",
      heroSubtitle:
        "Professional social media and branding for small businesses in Brighton and Adams County. Consistent content, real engagement, handled for you.",
      localContextTitle: "Brighton Is One of the Fastest-Growing Cities Along the Front Range.",
      localContext:
        "New neighborhoods, new businesses, and new residents are arriving in Brighton every year. That growth creates real opportunity, but it also means more competition for attention. A professional, consistent social media presence helps your Brighton business get noticed by the community that's already looking for what you offer.",
      proximityNote: "Based in Fort Lupton, just 12 miles from Brighton. We're your closest local agency.",
      metaTitle: "Social Media Management in Brighton, CO | Lienzo Studio",
      metaDescription:
        "Social media management and brand identity for small businesses in Brighton, Colorado. Professional content creation, posting, and community management. Local agency based in Fort Lupton, CO, just 12 miles away.",
    },
    es: {
      heroTitle: "Manejo de Redes Sociales en Brighton, CO",
      heroSubtitle:
        "Redes sociales profesionales y branding para pequeñas empresas en Brighton y el condado de Adams. Contenido consistente, engagement real, a cargo de nosotros.",
      localContextTitle: "Brighton Es Una de las Ciudades de Más Rápido Crecimiento en el Front Range.",
      localContext:
        "Nuevos vecindarios, nuevos negocios y nuevos residentes llegan a Brighton cada año. Ese crecimiento crea oportunidades reales, pero también más competencia por atención. Una presencia profesional y consistente en redes sociales ayuda a tu negocio en Brighton a ser notado por la comunidad que ya está buscando lo que ofreces.",
      proximityNote: "Con base en Fort Lupton, a solo 12 millas de Brighton. Somos tu agencia local más cercana.",
    },
  },
  {
    slug: "loveland-co",
    name: "Loveland",
    state: "CO",
    county: "Larimer County",
    distanceMiles: 45,
    direction: "northwest",
    nearby: ["Fort Collins", "Berthoud", "Windsor", "Estes Park"],
    en: {
      heroTitle: "Social Media Management in Loveland, CO",
      heroSubtitle:
        "Professional content and brand identity for small businesses in Loveland. Strategy-led social media that puts your business in front of the right people.",
      localContextTitle: "Loveland Attracts Visitors and Residents From Across Colorado.",
      localContext:
        "Known as the Sculpture Capital of Colorado, Loveland draws tourists, artists, and outdoor enthusiasts year-round. Local restaurants, retail shops, and service businesses compete for the attention of a diverse and growing customer base. A professional social media presence helps Loveland businesses capture that audience consistently, not just when they get lucky with a post.",
      proximityNote: "Based in Fort Lupton, 45 miles from Loveland. We serve the full Larimer County area.",
      metaTitle: "Social Media Management in Loveland, CO | Lienzo Studio",
      metaDescription:
        "Social media management and brand identity for small businesses in Loveland, Colorado. Content creation, posting, and community management on Instagram and Facebook. Northern Colorado agency based in Fort Lupton.",
    },
    es: {
      heroTitle: "Manejo de Redes Sociales en Loveland, CO",
      heroSubtitle:
        "Contenido profesional e identidad de marca para pequeñas empresas en Loveland. Redes sociales con estrategia que pone a tu negocio frente a las personas correctas.",
      localContextTitle: "Loveland Atrae Visitantes y Residentes de Todo Colorado.",
      localContext:
        "Conocida como la Capital de la Escultura de Colorado, Loveland atrae turistas, artistas y entusiastas del aire libre durante todo el año. Los restaurantes locales, tiendas y negocios de servicios compiten por la atención de una base de clientes diversa y en crecimiento. Una presencia profesional en redes sociales ayuda a los negocios de Loveland a captar esa audiencia de manera consistente.",
      proximityNote: "Con base en Fort Lupton, a 45 millas de Loveland. Servimos toda el área del condado de Larimer.",
    },
  },
  {
    slug: "fort-collins-co",
    name: "Fort Collins",
    state: "CO",
    county: "Larimer County",
    distanceMiles: 50,
    direction: "north",
    nearby: ["Loveland", "Windsor", "Timnath", "Wellington"],
    en: {
      heroTitle: "Social Media Management in Fort Collins, CO",
      heroSubtitle:
        "Professional social media management and branding for small businesses in Fort Collins. Consistent content, real community growth, handled end to end.",
      localContextTitle: "Fort Collins Is One of Colorado's Most Competitive Markets for Small Businesses.",
      localContext:
        "With Colorado State University, a thriving craft beer scene, and a dense restaurant and retail market, Fort Collins businesses face serious competition for local attention. Customers in Fort Collins are active on Instagram and Facebook and they make decisions based on what they see. If your social media isn't consistent and professional, a competitor is already capturing that audience.",
      proximityNote: "Based in Fort Lupton, 50 miles from Fort Collins. We serve businesses across Northern Colorado.",
      metaTitle: "Social Media Management in Fort Collins, CO | Lienzo Studio",
      metaDescription:
        "Social media management and brand identity for small businesses in Fort Collins, Colorado. Content creation, posting, and community management on Instagram and Facebook. Northern Colorado agency based in Fort Lupton, CO.",
    },
    es: {
      heroTitle: "Manejo de Redes Sociales en Fort Collins, CO",
      heroSubtitle:
        "Manejo profesional de redes sociales y branding para pequeñas empresas en Fort Collins. Contenido consistente, crecimiento real de comunidad, todo a cargo de nosotros.",
      localContextTitle: "Fort Collins Es Uno de los Mercados Más Competitivos de Colorado para Pequeños Negocios.",
      localContext:
        "Con la Universidad Estatal de Colorado, una vibrante escena de cerveza artesanal y un denso mercado de restaurantes y comercio, los negocios en Fort Collins enfrentan una competencia seria por la atención local. Los clientes en Fort Collins son activos en Instagram y Facebook y toman decisiones basándose en lo que ven. Si tus redes sociales no son consistentes y profesionales, un competidor ya está capturando esa audiencia.",
      proximityNote: "Con base en Fort Lupton, a 50 millas de Fort Collins. Servimos negocios en todo el norte de Colorado.",
    },
  },
  {
    slug: "boulder-co",
    name: "Boulder",
    state: "CO",
    county: "Boulder County",
    distanceMiles: 30,
    direction: "west",
    nearby: ["Longmont", "Lafayette", "Louisville", "Superior"],
    en: {
      heroTitle: "Social Media Management in Boulder, CO",
      heroSubtitle:
        "Professional social media and brand identity for small businesses in Boulder. Strategy-led content that fits your brand and speaks to your audience.",
      localContextTitle: "Boulder Businesses Compete for One of Colorado's Most Engaged Audiences.",
      localContext:
        "Boulder has a highly educated, digitally active consumer base that researches businesses online before making decisions. Whether you run a restaurant, a wellness studio, a retail shop, or a professional service, your social media presence is part of your credibility. A professional, consistent presence signals that your business is worth their time.",
      proximityNote: "Based in Fort Lupton, 30 miles from Boulder. We serve businesses across the Boulder County area.",
      metaTitle: "Social Media Management in Boulder, CO | Lienzo Studio",
      metaDescription:
        "Social media management and brand identity for small businesses in Boulder, Colorado. Content creation, posting, and community management on Instagram and Facebook. Northern Colorado agency based in Fort Lupton, CO.",
    },
    es: {
      heroTitle: "Manejo de Redes Sociales en Boulder, CO",
      heroSubtitle:
        "Redes sociales profesionales e identidad de marca para pequeñas empresas en Boulder. Contenido estratégico que representa tu marca y habla a tu audiencia.",
      localContextTitle: "Los Negocios en Boulder Compiten Por Una de las Audiencias Más Activas de Colorado.",
      localContext:
        "Boulder tiene una base de consumidores altamente educada y digitalmente activa que investiga negocios en línea antes de tomar decisiones. Ya sea que manejes un restaurante, un estudio de bienestar, una tienda o un servicio profesional, tu presencia en redes sociales forma parte de tu credibilidad.",
      proximityNote: "Con base en Fort Lupton, a 30 millas de Boulder. Servimos negocios en toda el área del condado de Boulder.",
    },
  },
  {
    slug: "thornton-co",
    name: "Thornton",
    state: "CO",
    county: "Adams County",
    distanceMiles: 20,
    direction: "south",
    nearby: ["Northglenn", "Brighton", "Commerce City", "Westminster"],
    en: {
      heroTitle: "Social Media Management in Thornton, CO",
      heroSubtitle:
        "Professional social media management and branding for small businesses in Thornton. Consistent content, real community growth, handled for you.",
      localContextTitle: "Thornton Is One of Colorado's Largest and Fastest-Growing Cities.",
      localContext:
        "With over 150,000 residents and a dense mix of restaurants, retail, and service businesses, Thornton is a high-opportunity market for local businesses that show up professionally online. Customers in Thornton use social media to find and evaluate local options every day. A consistent, well-managed presence puts your business ahead of competitors that aren't showing up.",
      proximityNote: "Based in Fort Lupton, 20 miles from Thornton. We serve the full Adams County corridor.",
      metaTitle: "Social Media Management in Thornton, CO | Lienzo Studio",
      metaDescription:
        "Social media management and brand identity for small businesses in Thornton, Colorado. Content creation, posting, and community management on Instagram and Facebook. Local agency based in Fort Lupton, CO.",
    },
    es: {
      heroTitle: "Manejo de Redes Sociales en Thornton, CO",
      heroSubtitle:
        "Manejo profesional de redes sociales y branding para pequeñas empresas en Thornton. Contenido consistente, crecimiento real de comunidad, todo a cargo de nosotros.",
      localContextTitle: "Thornton Es Una de las Ciudades Más Grandes y de Más Rápido Crecimiento en Colorado.",
      localContext:
        "Con más de 150,000 residentes y una densa mezcla de restaurantes, comercio y servicios, Thornton es un mercado de alta oportunidad para negocios locales que aparecen profesionalmente en línea. Los clientes en Thornton usan redes sociales para encontrar y evaluar opciones locales todos los días.",
      proximityNote: "Con base en Fort Lupton, a 20 millas de Thornton. Servimos todo el corredor del condado de Adams.",
    },
  },
  {
    slug: "northglenn-co",
    name: "Northglenn",
    state: "CO",
    county: "Adams County",
    distanceMiles: 22,
    direction: "south",
    nearby: ["Thornton", "Westminster", "Commerce City", "Brighton"],
    en: {
      heroTitle: "Social Media Management in Northglenn, CO",
      heroSubtitle:
        "Professional social media and brand identity for small businesses in Northglenn. Local agency, strategy-first approach, accessible pricing.",
      localContextTitle: "Northglenn Businesses Have a Built-In Local Audience Ready to Engage.",
      localContext:
        "Northglenn is a close-knit community with a loyal local customer base. Residents actively support local businesses, but only the ones they can find and trust online. A professional, consistent social media presence builds that trust and keeps your business visible to the Northglenn community every week, without requiring your time to manage it.",
      proximityNote: "Based in Fort Lupton, 22 miles from Northglenn. We serve the northern Denver metro area.",
      metaTitle: "Social Media Management in Northglenn, CO | Lienzo Studio",
      metaDescription:
        "Social media management and brand identity for small businesses in Northglenn, Colorado. Content creation, posting, and community management on Instagram and Facebook. Local agency based in Fort Lupton, CO.",
    },
    es: {
      heroTitle: "Manejo de Redes Sociales en Northglenn, CO",
      heroSubtitle:
        "Redes sociales profesionales e identidad de marca para pequeñas empresas en Northglenn. Agencia local, enfoque estratégico, precios accesibles.",
      localContextTitle: "Los Negocios en Northglenn Tienen Una Audiencia Local Lista Para Conectar.",
      localContext:
        "Northglenn es una comunidad unida con una base de clientes locales leales. Los residentes apoyan activamente a los negocios locales, pero solo a los que pueden encontrar y en los que confían en línea. Una presencia profesional y consistente en redes sociales construye esa confianza y mantiene tu negocio visible para la comunidad de Northglenn.",
      proximityNote: "Con base en Fort Lupton, a 22 millas de Northglenn. Servimos el área metropolitana norte de Denver.",
    },
  },
  {
    slug: "broomfield-co",
    name: "Broomfield",
    state: "CO",
    county: "Broomfield County",
    distanceMiles: 28,
    direction: "southwest",
    nearby: ["Westminster", "Louisville", "Lafayette", "Thornton"],
    en: {
      heroTitle: "Social Media Management in Broomfield, CO",
      heroSubtitle:
        "Professional social media management and branding for small and medium businesses in Broomfield. Content that performs, handled end to end.",
      localContextTitle: "Broomfield Sits at the Intersection of Denver and Boulder — Two of Colorado's Biggest Markets.",
      localContext:
        "Broomfield's unique location between Denver and Boulder gives local businesses access to two of the most affluent and active consumer markets in the state. But that proximity also means competition from larger businesses in both cities. A strong social media presence helps Broomfield businesses compete on equal footing and capture the local audience before they look elsewhere.",
      proximityNote: "Based in Fort Lupton, 28 miles from Broomfield. We serve the full Front Range corridor.",
      metaTitle: "Social Media Management in Broomfield, CO | Lienzo Studio",
      metaDescription:
        "Social media management and brand identity for small businesses in Broomfield, Colorado. Content creation, posting, and community management on Instagram and Facebook. Northern Colorado agency based in Fort Lupton, CO.",
    },
    es: {
      heroTitle: "Manejo de Redes Sociales en Broomfield, CO",
      heroSubtitle:
        "Manejo profesional de redes sociales y branding para pequeñas y medianas empresas en Broomfield. Contenido que funciona, a cargo de nosotros.",
      localContextTitle: "Broomfield Está en la Intersección de Denver y Boulder, Dos de los Mercados Más Grandes de Colorado.",
      localContext:
        "La ubicación única de Broomfield entre Denver y Boulder le da a los negocios locales acceso a dos de los mercados de consumidores más activos del estado. Pero esa proximidad también significa competencia de negocios más grandes. Una presencia sólida en redes sociales ayuda a los negocios de Broomfield a competir en igualdad de condiciones.",
      proximityNote: "Con base en Fort Lupton, a 28 millas de Broomfield. Servimos todo el corredor del Front Range.",
    },
  },
  {
    slug: "commerce-city-co",
    name: "Commerce City",
    state: "CO",
    county: "Adams County",
    distanceMiles: 25,
    direction: "south",
    nearby: ["Thornton", "Brighton", "Northglenn", "Denver"],
    en: {
      heroTitle: "Social Media Management in Commerce City, CO",
      heroSubtitle:
        "Professional social media and brand identity for small businesses in Commerce City. Consistent content, community engagement, handled for you.",
      localContextTitle: "Commerce City Is a Growing Market With a Strong Local Business Community.",
      localContext:
        "Commerce City has a diverse, working-class community with strong local loyalty. Residents here support the businesses they know and trust, and social media is how many of them discover new options. A professional, consistent presence on Instagram and Facebook puts your Commerce City business in front of the community that's already spending locally.",
      proximityNote: "Based in Fort Lupton, 25 miles from Commerce City. We serve the northern Denver metro area.",
      metaTitle: "Social Media Management in Commerce City, CO | Lienzo Studio",
      metaDescription:
        "Social media management and brand identity for small businesses in Commerce City, Colorado. Content creation, posting, and community management on Instagram and Facebook. Local agency based in Fort Lupton, CO.",
    },
    es: {
      heroTitle: "Manejo de Redes Sociales en Commerce City, CO",
      heroSubtitle:
        "Redes sociales profesionales e identidad de marca para pequeñas empresas en Commerce City. Contenido consistente, gestión de comunidad, a cargo de nosotros.",
      localContextTitle: "Commerce City Es un Mercado en Crecimiento Con Una Fuerte Comunidad de Negocios Locales.",
      localContext:
        "Commerce City tiene una comunidad diversa y trabajadora con una fuerte lealtad local. Los residentes apoyan a los negocios que conocen y en los que confían, y las redes sociales son como muchos de ellos descubren nuevas opciones. Una presencia profesional y consistente en Instagram y Facebook pone a tu negocio frente a la comunidad que ya consume localmente.",
      proximityNote: "Con base en Fort Lupton, a 25 millas de Commerce City. Servimos el área metropolitana norte de Denver.",
    },
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}
