export type MexicoRegionData = {
  slug: string;
  state: string;
  homeBase: boolean;
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

export const mexicoRegions: MexicoRegionData[] = [
  {
    slug: "durango-mx",
    state: "Durango",
    homeBase: true,
    nearby: ["Chihuahua", "Sinaloa", "Zacatecas", "Nayarit"],
    en: {
      heroTitle: "Social Media & Branding for Businesses in Durango, Mexico",
      heroSubtitle:
        "Lienzo Studio was built in Durango. We know this market, we know this community, and we bring the same professional quality to local businesses here that we deliver to clients in Colorado.",
      localContextTitle: "Durango Is Where Lienzo Was Born, and Where We Still Have Deep Roots.",
      localContext:
        "Durango's business scene is growing, from restaurants and retail in the historic city center to service businesses and contractors throughout the state. Competition for local customers is real, and social media is increasingly how people decide where to spend. A professional, consistent presence on Instagram and Facebook signals credibility and keeps your business visible to the community that's already looking for what you offer.",
      proximityNote: "Durango is our creative home base. We have direct experience serving businesses throughout the city and state.",
      metaTitle: "Social Media Management in Durango, Mexico | Lienzo Studio",
      metaDescription:
        "Social media management and brand identity for businesses in Durango, Mexico. Professional content creation, posting, and community management on Instagram and Facebook. Bilingual agency with roots in Durango.",
    },
    es: {
      heroTitle: "Redes Sociales y Branding para Negocios en Durango, México",
      heroSubtitle:
        "Lienzo Studio nació en Durango. Conocemos este mercado, conocemos esta comunidad, y llevamos la misma calidad profesional a los negocios locales aquí que entregamos a clientes en Colorado.",
      localContextTitle: "Durango Es Donde Nació Lienzo, y Donde Seguimos Teniendo Raíces Profundas.",
      localContext:
        "El mundo empresarial de Durango está creciendo, desde restaurantes y comercio en el centro histórico hasta negocios de servicios y contratistas en todo el estado. La competencia por clientes locales es real, y las redes sociales son cada vez más la forma en que las personas deciden dónde gastar. Una presencia profesional y consistente en Instagram y Facebook genera credibilidad y mantiene tu negocio visible para la comunidad que ya busca lo que ofreces.",
      proximityNote: "Durango es nuestra base creativa. Tenemos experiencia directa sirviendo a negocios en toda la ciudad y el estado.",
    },
  },
  {
    slug: "chihuahua-mx",
    state: "Chihuahua",
    homeBase: false,
    nearby: ["Durango", "Sonora", "Sinaloa", "Zacatecas"],
    en: {
      heroTitle: "Social Media & Branding for Businesses in Chihuahua, Mexico",
      heroSubtitle:
        "Professional content, brand identity, and community management for small and medium businesses in Chihuahua. Bilingual team, strategy-led work, accessible pricing.",
      localContextTitle: "Chihuahua Is One of Mexico's Most Dynamic Business States.",
      localContext:
        "From the manufacturing corridors of Ciudad Juárez to the growing commercial districts of the capital, Chihuahua's economy is diverse and competitive. Businesses here face real competition for customer attention, and social media is a primary channel for discovery and trust-building. A professional, consistent presence on Instagram and Facebook helps your Chihuahua business stand out in a crowded market.",
      proximityNote: "Based in Durango and Fort Lupton, CO. We serve businesses throughout northern Mexico with the same bilingual team.",
      metaTitle: "Social Media Management in Chihuahua, Mexico | Lienzo Studio",
      metaDescription:
        "Social media management and brand identity for businesses in Chihuahua, Mexico. Professional content creation, posting, and community management on Instagram and Facebook. Bilingual agency based in Durango.",
    },
    es: {
      heroTitle: "Redes Sociales y Branding para Negocios en Chihuahua, México",
      heroSubtitle:
        "Contenido profesional, identidad de marca y gestión de comunidad para pequeñas y medianas empresas en Chihuahua. Equipo bilingüe, trabajo estratégico, precios accesibles.",
      localContextTitle: "Chihuahua Es Uno de los Estados Más Dinámicos de México en Términos Empresariales.",
      localContext:
        "Desde los corredores industriales de Ciudad Juárez hasta los crecientes distritos comerciales de la capital, la economía de Chihuahua es diversa y competitiva. Los negocios aquí enfrentan una competencia real por la atención del cliente, y las redes sociales son un canal principal para el descubrimiento y la generación de confianza. Una presencia profesional y consistente en Instagram y Facebook ayuda a tu negocio en Chihuahua a destacar en un mercado concurrido.",
      proximityNote: "Con base en Durango y Fort Lupton, CO. Servimos negocios en todo el norte de México con el mismo equipo bilingüe.",
    },
  },
  {
    slug: "sinaloa-mx",
    state: "Sinaloa",
    homeBase: false,
    nearby: ["Durango", "Sonora", "Nayarit", "Chihuahua"],
    en: {
      heroTitle: "Social Media & Branding for Businesses in Sinaloa, Mexico",
      heroSubtitle:
        "Professional content and brand identity for small and medium businesses in Sinaloa. Strategy-led social media managed for you, so you can focus on running your business.",
      localContextTitle: "Sinaloa Has a Thriving Business Community, and Social Media Is How Customers Find You.",
      localContext:
        "From the port city of Mazatlán to the commercial hubs of Culiacán and Los Mochis, Sinaloa is a state with diverse economic activity and a competitive local market. Tourism, agriculture, seafood, and retail all drive foot traffic and spending decisions. For most of those categories, Instagram and Facebook are where customers are researching before they commit. A professional, consistent social media presence puts your business in that conversation every day.",
      proximityNote: "Based in Durango, we serve Sinaloa businesses with the same bilingual team and design standards we apply across all markets.",
      metaTitle: "Social Media Management in Sinaloa, Mexico | Lienzo Studio",
      metaDescription:
        "Social media management and brand identity for businesses in Sinaloa, Mexico. Professional content creation, posting, and community management on Instagram and Facebook. Bilingual agency based in Durango.",
    },
    es: {
      heroTitle: "Redes Sociales y Branding para Negocios en Sinaloa, México",
      heroSubtitle:
        "Contenido profesional e identidad de marca para pequeñas y medianas empresas en Sinaloa. Redes sociales con estrategia a cargo de nosotros, para que tú te enfoques en tu negocio.",
      localContextTitle: "Sinaloa Tiene Una Comunidad Empresarial Vibrante, y Las Redes Sociales Son Como Los Clientes Te Encuentran.",
      localContext:
        "Desde la ciudad portuaria de Mazatlán hasta los centros comerciales de Culiacán y Los Mochis, Sinaloa es un estado con actividad económica diversa y un mercado local competitivo. El turismo, la agricultura, los mariscos y el comercio impulsan el tráfico y las decisiones de compra. Para la mayoría de esas categorías, Instagram y Facebook son donde los clientes investigan antes de comprometerse. Una presencia profesional y consistente en redes sociales pone a tu negocio en esa conversación todos los días.",
      proximityNote: "Con base en Durango, servimos negocios en Sinaloa con el mismo equipo bilingüe y estándares de diseño que aplicamos en todos los mercados.",
    },
  },
  {
    slug: "zacatecas-mx",
    state: "Zacatecas",
    homeBase: false,
    nearby: ["Durango", "Chihuahua", "Sinaloa", "Nayarit"],
    en: {
      heroTitle: "Social Media & Branding for Businesses in Zacatecas, Mexico",
      heroSubtitle:
        "Professional content, brand identity, and community management for businesses in Zacatecas. Bilingual team, strategy-first approach, accessible pricing.",
      localContextTitle: "Zacatecas Is a Growing Market Where Professional Branding Makes a Difference.",
      localContext:
        "Zacatecas has a proud commercial tradition and a growing small business community. From historic city-center businesses to service providers throughout the state, local entrepreneurs are increasingly competing online. Customers in Zacatecas use social media to discover and evaluate businesses before making decisions. A professional, consistent presence helps you capture that audience and build the trust that converts discovery into loyalty.",
      proximityNote: "Based in Durango, we serve businesses across Zacatecas with the same bilingual team and professional standards we apply in all markets.",
      metaTitle: "Social Media Management in Zacatecas, Mexico | Lienzo Studio",
      metaDescription:
        "Social media management and brand identity for businesses in Zacatecas, Mexico. Professional content creation, posting, and community management on Instagram and Facebook. Bilingual agency based in Durango.",
    },
    es: {
      heroTitle: "Redes Sociales y Branding para Negocios en Zacatecas, México",
      heroSubtitle:
        "Contenido profesional, identidad de marca y gestión de comunidad para negocios en Zacatecas. Equipo bilingüe, enfoque estratégico, precios accesibles.",
      localContextTitle: "Zacatecas Es Un Mercado en Crecimiento Donde el Branding Profesional Marca la Diferencia.",
      localContext:
        "Zacatecas tiene una orgullosa tradición comercial y una comunidad de pequeños negocios en crecimiento. Desde negocios en el centro histórico hasta proveedores de servicios en todo el estado, los emprendedores locales compiten cada vez más en línea. Los clientes en Zacatecas usan las redes sociales para descubrir y evaluar negocios antes de tomar decisiones. Una presencia profesional y consistente te ayuda a captar esa audiencia y construir la confianza que convierte el descubrimiento en lealtad.",
      proximityNote: "Con base en Durango, servimos negocios en todo Zacatecas con el mismo equipo bilingüe y estándares profesionales que aplicamos en todos los mercados.",
    },
  },
  {
    slug: "sonora-mx",
    state: "Sonora",
    homeBase: false,
    nearby: ["Chihuahua", "Sinaloa", "Durango", "Baja California"],
    en: {
      heroTitle: "Social Media & Branding for Businesses in Sonora, Mexico",
      heroSubtitle:
        "Professional social media management and branding for small and medium businesses in Sonora. Content that performs, handled end to end.",
      localContextTitle: "Sonora's Economy Is One of the Strongest in Northern Mexico, and Competition Is Real.",
      localContext:
        "With major cities like Hermosillo, Nogales, and Ciudad Obregón, Sonora has one of the most active economies in northern Mexico. Manufacturing, agriculture, tourism, and retail all contribute to a diverse and competitive market. Local businesses that show up professionally on social media build credibility and capture customers before competitors do. A consistent, strategy-led presence on Instagram and Facebook is no longer optional. It's expected.",
      proximityNote: "Based in Durango and Fort Lupton, CO. We serve businesses throughout northern Mexico with the same bilingual team and professional standards.",
      metaTitle: "Social Media Management in Sonora, Mexico | Lienzo Studio",
      metaDescription:
        "Social media management and brand identity for businesses in Sonora, Mexico. Professional content creation, posting, and community management on Instagram and Facebook. Bilingual agency based in Durango.",
    },
    es: {
      heroTitle: "Redes Sociales y Branding para Negocios en Sonora, México",
      heroSubtitle:
        "Manejo profesional de redes sociales y branding para pequeñas y medianas empresas en Sonora. Contenido que funciona, a cargo de nosotros.",
      localContextTitle: "La Economía de Sonora Es Una de las Más Fuertes del Norte de México, y la Competencia Es Real.",
      localContext:
        "Con ciudades importantes como Hermosillo, Nogales y Ciudad Obregón, Sonora tiene una de las economías más activas del norte de México. La manufactura, la agricultura, el turismo y el comercio contribuyen a un mercado diverso y competitivo. Los negocios locales que aparecen profesionalmente en redes sociales generan credibilidad y captan clientes antes que la competencia. Una presencia consistente y estratégica en Instagram y Facebook ya no es opcional. Es lo que se espera.",
      proximityNote: "Con base en Durango y Fort Lupton, CO. Servimos negocios en todo el norte de México con el mismo equipo bilingüe y estándares profesionales.",
    },
  },
  {
    slug: "nayarit-mx",
    state: "Nayarit",
    homeBase: false,
    nearby: ["Sinaloa", "Durango", "Zacatecas", "Jalisco"],
    en: {
      heroTitle: "Social Media & Branding for Businesses in Nayarit, Mexico",
      heroSubtitle:
        "Professional content and brand identity for small businesses in Nayarit. Strategy-led social media that puts your business in front of the right audience.",
      localContextTitle: "Nayarit's Tourism Economy Makes a Professional Social Media Presence Essential.",
      localContext:
        "From the Riviera Nayarit to the inland towns and agricultural communities, Nayarit has a diverse economy with a strong tourism and hospitality component. Restaurants, hotels, tour operators, and local retailers compete for the attention of both domestic and international visitors, many of whom discover businesses through Instagram before they even arrive. A professional, well-managed social media presence is one of the highest-ROI investments a Nayarit business can make.",
      proximityNote: "Based in Durango, we serve businesses throughout Nayarit and the surrounding region with bilingual content and professional design.",
      metaTitle: "Social Media Management in Nayarit, Mexico | Lienzo Studio",
      metaDescription:
        "Social media management and brand identity for businesses in Nayarit, Mexico. Professional content creation, posting, and community management on Instagram and Facebook. Bilingual agency based in Durango.",
    },
    es: {
      heroTitle: "Redes Sociales y Branding para Negocios en Nayarit, México",
      heroSubtitle:
        "Contenido profesional e identidad de marca para pequeñas empresas en Nayarit. Redes sociales con estrategia que ponen a tu negocio frente a la audiencia correcta.",
      localContextTitle: "La Economía Turística de Nayarit Hace que una Presencia Profesional en Redes Sociales Sea Esencial.",
      localContext:
        "Desde la Riviera Nayarit hasta los pueblos del interior y las comunidades agrícolas, Nayarit tiene una economía diversa con un fuerte componente de turismo y hospitalidad. Restaurantes, hoteles, operadores turísticos y comercios locales compiten por la atención de visitantes nacionales e internacionales, muchos de los cuales descubren negocios a través de Instagram antes de llegar. Una presencia profesional y bien gestionada en redes sociales es una de las inversiones con mayor retorno que puede hacer un negocio en Nayarit.",
      proximityNote: "Con base en Durango, servimos negocios en todo Nayarit y la región circundante con contenido bilingüe y diseño profesional.",
    },
  },
];

export function getMexicoRegionBySlug(slug: string): MexicoRegionData | undefined {
  return mexicoRegions.find((r) => r.slug === slug);
}
