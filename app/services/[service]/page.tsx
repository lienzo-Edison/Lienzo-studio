import { notFound } from "next/navigation";
import NicheServicePageContent from "@/components/NicheServicePageContent";
import ServiceDetailPageContent, {
  type LocalizedServiceDetail,
} from "@/components/ServiceDetailPageContent";
import { getNicheServiceBySlug } from "@/lib/nicheServices";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
  siteUrl,
} from "@/lib/schema";
import { services } from "@/lib/services";

const serviceDetails: Record<
  string,
  Record<"en" | "es", LocalizedServiceDetail>
> = {
  "content-creation": {
    en: {
      headline: "Content creation that turns ideas, offers, and updates into useful marketing assets.",
      summary:
        "We help small businesses create polished content for social media, promotions, campaigns, education, stories, reels, and recurring customer touchpoints.",
      bestFor: ["Restaurants and retail brands", "Service businesses", "Founder-led companies", "Bilingual businesses"],
      deliverables: ["Post concepts", "Carousel copy and structure", "Promotional graphics", "Story and reel ideas", "Campaign visuals"],
      outcomes: ["More consistent publishing", "Clearer offers", "Stronger visual trust", "Reusable content systems"],
    },
    es: {
      headline: "Creación de contenido que convierte ideas, ofertas y novedades en recursos útiles de marketing.",
      summary:
        "Ayudamos a pequeños negocios a crear contenido pulido para redes sociales, promociones, campañas, educación, historias, reels y puntos de contacto recurrentes con clientes.",
      bestFor: ["Restaurantes y marcas retail", "Negocios de servicios", "Empresas lideradas por fundadores", "Negocios bilingües"],
      deliverables: ["Conceptos para posts", "Estructura y copy para carruseles", "Gráficos promocionales", "Ideas para historias y reels", "Visuales de campaña"],
      outcomes: ["Publicación más consistente", "Ofertas más claras", "Más confianza visual", "Sistemas de contenido reutilizables"],
    },
  },
  "graphic-design": {
    en: {
      headline: "Graphic design for the materials your customers see before they decide.",
      summary:
        "We design practical digital and print assets that help businesses promote offers, explain services, and keep a consistent professional image.",
      bestFor: ["Restaurants", "Local service providers", "Events and promotions", "Entrepreneurs and growing brands"],
      deliverables: ["Flyers and posters", "Menus and catalogs", "Business cards", "Digital ads", "Promotional social graphics"],
      outcomes: ["More professional materials", "Consistent brand presentation", "Better offer clarity", "Assets ready for print and web"],
    },
    es: {
      headline: "Diseño gráfico para los materiales que tus clientes ven antes de decidir.",
      summary:
        "Diseñamos recursos digitales e impresos prácticos que ayudan a promover ofertas, explicar servicios y mantener una imagen profesional consistente.",
      bestFor: ["Restaurantes", "Proveedores de servicios locales", "Eventos y promociones", "Emprendedores y marcas en crecimiento"],
      deliverables: ["Flyers y carteles", "Menús y catálogos", "Tarjetas de presentación", "Anuncios digitales", "Gráficos promocionales para redes"],
      outcomes: ["Materiales más profesionales", "Presentación de marca consistente", "Ofertas más claras", "Recursos listos para web e impresión"],
    },
  },
  "website-design": {
    en: {
      headline: "Website design that explains your business and makes contacting you simple.",
      summary:
        "We build clear, modern web pages for small businesses that need stronger trust signals, service explanation, mobile usability, and conversion paths.",
      bestFor: ["Small businesses without a website", "Businesses with outdated websites", "Service companies", "Bilingual brands"],
      deliverables: ["Landing pages", "Service pages", "Contact-focused page structure", "Mobile-friendly layouts", "Website refreshes"],
      outcomes: ["Clearer services", "Better mobile experience", "More qualified inquiries", "A stronger SEO foundation"],
    },
    es: {
      headline: "Diseño web que explica tu negocio y facilita el contacto.",
      summary:
        "Creamos páginas web claras y modernas para pequeños negocios que necesitan más confianza, explicación de servicios, usabilidad móvil y rutas de conversión.",
      bestFor: ["Pequeños negocios sin sitio web", "Negocios con sitios desactualizados", "Empresas de servicio", "Marcas bilingües"],
      deliverables: ["Landing pages", "Páginas de servicio", "Estructura enfocada en contacto", "Diseños adaptables a móvil", "Renovación de sitios"],
      outcomes: ["Servicios más claros", "Mejor experiencia móvil", "Consultas más calificadas", "Una base SEO más fuerte"],
    },
  },
  "local-seo": {
    en: {
      headline: "Local SEO and Google visibility support for businesses that need to be found nearby.",
      summary:
        "We help local businesses strengthen the basics that influence discovery: service pages, local keywords, Google Business Profile direction, reviews, and location content.",
      bestFor: ["Local service businesses", "Restaurants", "Contractors", "Businesses serving bilingual communities"],
      deliverables: ["Local keyword direction", "Service page structure", "Google Business Profile guidance", "Review strategy", "Location content planning"],
      outcomes: ["Clearer local relevance", "Better Google Business Profile support", "More useful service pages", "A stronger base for organic discovery"],
    },
    es: {
      headline: "SEO local y visibilidad en Google para negocios que necesitan ser encontrados cerca.",
      summary:
        "Ayudamos a negocios locales a fortalecer las bases que influyen en el descubrimiento: páginas de servicio, palabras clave locales, Google Business Profile, reseñas y contenido de ubicación.",
      bestFor: ["Negocios locales de servicio", "Restaurantes", "Contratistas", "Negocios que atienden comunidades bilingües"],
      deliverables: ["Dirección de palabras clave locales", "Estructura de páginas de servicio", "Guía para Google Business Profile", "Estrategia de reseñas", "Planeación de contenido por ubicación"],
      outcomes: ["Relevancia local más clara", "Mejor apoyo para Google Business Profile", "Páginas de servicio más útiles", "Una base más fuerte para descubrimiento orgánico"],
    },
  },
};

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service: slug } = await params;
  const service = services.find((item) => item.slug === slug && item.published);
  const nicheService = !service ? getNicheServiceBySlug(slug) : undefined;
  const detail = service ? serviceDetails[service.slug] : undefined;

  if (nicheService) {
    const pageUrl = `${siteUrl}/services/${nicheService.slug}`;
    const schema = [
      buildServiceSchema({
        name: nicheService.title,
        description: nicheService.metaDescription,
        url: pageUrl,
        audience: nicheService.audiences,
      }),
      buildFaqSchema(nicheService.faqs),
      buildBreadcrumbSchema([
        { name: "Home", url: siteUrl },
        { name: "Services", url: `${siteUrl}/services` },
        { name: nicheService.title, url: pageUrl },
      ]),
    ];

    return (
      <main className="min-h-screen bg-background px-6 pb-24 pt-32 text-foreground md:pt-40">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <NicheServicePageContent service={nicheService} />
      </main>
    );
  }

  if (!service || !detail) notFound();

  const schema = buildServiceSchema({
    name: service.title.en,
    description: service.metadata.description.en,
    url: `${siteUrl}${service.href}`,
    serviceType: service.title.en,
  });

  return (
    <main className="min-h-screen bg-background px-6 pb-24 pt-32 text-foreground md:pt-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceDetailPageContent service={service} details={detail} />
    </main>
  );
}
