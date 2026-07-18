import { notFound, redirect } from "next/navigation";
import IndustryPageContent from "@/components/IndustryPageContent";
import {
  consolidatedAudienceIndustryRedirects,
  getIndustryBySlug,
} from "@/lib/industries";
import { buildBreadcrumbSchema, buildServiceSchema, siteUrl } from "@/lib/schema";

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ industry: string }>;
}) {
  const { industry: slug } = await params;
  const consolidatedTarget = consolidatedAudienceIndustryRedirects[slug];

  if (consolidatedTarget) redirect(consolidatedTarget);

  const industry = getIndustryBySlug(slug);

  if (!industry) notFound();

  const pageUrl = `${siteUrl}/industries/${industry.slug}`;
  const schema = [
    buildServiceSchema({
      name: industry.schemaName,
      description: industry.metaDescription,
      url: pageUrl,
      serviceType: industry.title,
    }),
    buildBreadcrumbSchema([
      { name: "Home", url: siteUrl },
      { name: "Industries", url: `${siteUrl}/industries` },
      { name: industry.title, url: pageUrl },
    ]),
  ];

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
