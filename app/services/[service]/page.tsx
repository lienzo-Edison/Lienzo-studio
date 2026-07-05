import { notFound, redirect } from "next/navigation";
import NicheServicePageContent from "@/components/NicheServicePageContent";
import ServiceDetailPageContent, {
  type LocalizedServiceDetail,
} from "@/components/ServiceDetailPageContent";
import {
  consolidatedAudienceServiceRedirects,
  getNicheServiceBySlug,
} from "@/lib/nicheServices";
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
      headline: "Campaigns and content that turn expertise into authority and demand.",
      summary:
        "We help companies turn expertise, customer evidence, launches, and commercial priorities into useful content across search, campaigns, sales, and social distribution.",
      bestFor: ["Professional service firms", "Technology companies", "Growth-stage teams", "Cross-border brands"],
      deliverables: ["Campaign concepts", "Thought leadership", "Case studies", "SEO content", "Multi-channel creative"],
      outcomes: ["Stronger authority", "More qualified visibility", "Clearer offers", "Reusable campaign systems"],
    },
    es: {
      headline: "Campañas y contenido que convierten experiencia en autoridad y demanda.",
      summary:
        "Ayudamos a empresas a convertir experiencia, evidencia de clientes, lanzamientos y prioridades comerciales en contenido útil para búsqueda, campañas, ventas y distribución social.",
      bestFor: ["Firmas de servicios profesionales", "Empresas de tecnología", "Equipos en crecimiento", "Marcas binacionales"],
      deliverables: ["Conceptos de campaña", "Liderazgo de opinión", "Casos de estudio", "Contenido SEO", "Creatividad multicanal"],
      outcomes: ["Mayor autoridad", "Visibilidad más calificada", "Ofertas más claras", "Sistemas de campaña reutilizables"],
    },
  },
  "graphic-design": {
    en: {
      headline: "Marketing and sales design that makes complex value easier to understand.",
      summary:
        "We design practical digital and print systems that help marketing and sales teams communicate capability, evidence, and offers with consistency.",
      bestFor: ["Sales teams", "Professional services", "Industrial companies", "Marketing teams with recurring needs"],
      deliverables: ["Sales presentations", "Capability materials", "Reports and publications", "Campaign systems", "Digital and print assets"],
      outcomes: ["Clearer value communication", "Stronger sales confidence", "Consistent brand presentation", "Reusable design systems"],
    },
    es: {
      headline: "Diseño para marketing y ventas que hace más fácil entender valor complejo.",
      summary:
        "Diseñamos sistemas digitales e impresos que ayudan a los equipos de marketing y ventas a comunicar capacidades, evidencia y ofertas con consistencia.",
      bestFor: ["Equipos de ventas", "Servicios profesionales", "Empresas industriales", "Equipos de marketing con necesidades recurrentes"],
      deliverables: ["Presentaciones de ventas", "Materiales de capacidades", "Reportes y publicaciones", "Sistemas de campaña", "Activos digitales e impresos"],
      outcomes: ["Valor más claro", "Mayor confianza comercial", "Presentación consistente", "Sistemas de diseño reutilizables"],
    },
  },
  "website-design": {
    en: {
      headline: "Strategic websites that turn attention into understanding and qualified action.",
      summary:
        "We build strategic websites for companies that need to explain complex services, support search visibility, establish trust, and create a clearer path to conversation.",
      bestFor: ["Established companies", "Professional service firms", "Technology teams", "Cross-border brands"],
      deliverables: ["Website strategy", "Service and industry architecture", "Landing pages", "Conversion paths", "SEO-ready content structure"],
      outcomes: ["Sharper positioning", "Better buyer experience", "More qualified inquiries", "A stronger SEO foundation"],
    },
    es: {
      headline: "Sitios estratégicos que convierten atención en entendimiento y acción calificada.",
      summary:
        "Construimos sitios estratégicos para empresas que necesitan explicar servicios complejos, apoyar búsqueda, generar confianza y crear una ruta más clara a la conversación.",
      bestFor: ["Empresas establecidas", "Firmas de servicios profesionales", "Equipos de tecnología", "Marcas binacionales"],
      deliverables: ["Estrategia web", "Arquitectura de servicios e industrias", "Landing pages", "Rutas de conversión", "Estructura preparada para SEO"],
      outcomes: ["Posicionamiento más claro", "Mejor experiencia del comprador", "Consultas más calificadas", "Una base SEO más fuerte"],
    },
  },
  "local-seo": {
    en: {
      headline: "SEO strategy that makes expertise visible wherever your buyers search.",
      summary:
        "We help companies build technical, structural, and content foundations around the services, problems, and markets their buyers research.",
      bestFor: ["Professional service firms", "Technology companies", "Multi-location organizations", "Companies entering new markets"],
      deliverables: ["Search opportunity research", "Technical SEO foundations", "Service and industry pages", "Content architecture", "Visibility measurement"],
      outcomes: ["More qualified organic visibility", "Stronger topical authority", "Better buyer journeys", "A scalable search foundation"],
    },
    es: {
      headline: "Estrategia SEO que hace visible tu experiencia donde buscan tus compradores.",
      summary:
        "Ayudamos a empresas a construir bases técnicas, estructurales y de contenido alrededor de los servicios, problemas y mercados que investigan sus compradores.",
      bestFor: ["Firmas de servicios profesionales", "Empresas de tecnología", "Organizaciones con múltiples ubicaciones", "Empresas entrando a nuevos mercados"],
      deliverables: ["Investigación de búsqueda", "Bases técnicas de SEO", "Páginas de servicios e industrias", "Arquitectura de contenido", "Medición de visibilidad"],
      outcomes: ["Mayor visibilidad orgánica calificada", "Más autoridad temática", "Mejores recorridos del comprador", "Una base escalable de búsqueda"],
    },
  },
};

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service: slug } = await params;
  const consolidatedTarget = consolidatedAudienceServiceRedirects[slug];

  if (consolidatedTarget) redirect(consolidatedTarget);

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
