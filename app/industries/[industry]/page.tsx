import { notFound } from "next/navigation";
import IndustryPageContent from "@/components/IndustryPageContent";
import { getIndustryBySlug } from "@/lib/industries";

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ industry: string }>;
}) {
  const { industry: slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: industry.schemaName,
    description: industry.metaDescription,
    url: `https://lienzo.studio/industries/${industry.slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: "Lienzo Studio",
      url: "https://lienzo.studio",
      areaServed: ["Colorado", "Mexico", "United States", "Latin America"],
    },
    serviceType: industry.title,
  };

  return (
    <main className="min-h-screen bg-background px-6 pb-24 pt-32 text-foreground md:pt-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <IndustryPageContent industry={industry} />
    </main>
  );
}
