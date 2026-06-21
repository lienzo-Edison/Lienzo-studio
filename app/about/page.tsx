import AboutPageContent from "@/components/AboutPageContent";
import { buildBreadcrumbSchema, lienzoEntity, siteUrl } from "@/lib/schema";

export default function AboutPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About Lienzo Studio",
      url: `${siteUrl}/about`,
      mainEntity: lienzoEntity,
    },
    buildBreadcrumbSchema([
      { name: "Home", url: siteUrl },
      { name: "About", url: `${siteUrl}/about` },
    ]),
  ];

  return (
    <main className="min-h-screen bg-background px-6 pb-24 pt-32 text-foreground md:pt-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AboutPageContent />
    </main>
  );
}
