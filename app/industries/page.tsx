import IndustriesPageContent from "@/components/IndustriesPageContent";
import { siteUrl } from "@/lib/schema";
import { publicIndustries } from "@/lib/industries";

export default function IndustriesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Industries We Help",
    description:
      "Industry-specific marketing, branding, social media, website, and local SEO support from Lienzo Studio.",
    url: `${siteUrl}/industries`,
    mainEntity: publicIndustries.map((industry) => ({
      "@type": "Service",
      name: industry.schemaName,
      url: `${siteUrl}/industries/${industry.slug}`,
      provider: {
        "@type": "LocalBusiness",
        name: "Lienzo Studio",
      },
    })),
  };

  return (
    <main className="min-h-screen bg-background px-6 pb-24 pt-32 text-foreground md:pt-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <IndustriesPageContent />
    </main>
  );
}
