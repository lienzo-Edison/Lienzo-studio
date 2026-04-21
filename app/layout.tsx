import type { Metadata } from "next";
import localFont from "next/font/local";
import { LanguageProvider } from "@/components/LanguageProvider";
import { PageTransitionProvider } from "@/components/PageTransitionProvider";
import TopNav from "@/components/TopNav";
import CornerIcon from "@/components/CornerIcon";
import FooterLink from "@/components/FooterLink";
import PageKey from "@/components/PageKey";
import "./globals.css";
import { cookies } from "next/headers";
import { defaultLocale } from "@/lib/i18n";
import Script from "next/script";

const hostGrotesk = localFont({
  src: "../public/fonts/hostgrotesk.woff2",
  variable: "--font-body",
  display: "swap",
});

const onlyGraphic = localFont({
  src: "../public/fonts/onlygraphic.woff2",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lienzo.studio"),
  title: {
    default: "Lienzo Studio | Social Media Management & Marketing Agency — Northern Colorado",
    template: "%s | Lienzo Studio",
  },
  description:
    "Social media management, paid ads, and brand identity for small and medium businesses in Northern Colorado and Mexico. Fort Lupton-based agency with affordable, results-driven marketing.",
  keywords: [
    "social media management Northern Colorado",
    "social media agency Fort Lupton CO",
    "paid ads agency Colorado",
    "digital marketing Northern Colorado",
    "brand identity Colorado",
    "logo design Northern Colorado",
    "marketing agency Greeley CO",
    "agencia de redes sociales Durango México",
    "manejo de redes sociales México",
  ],
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    url: "https://lienzo.studio",
    title: "Lienzo Studio | Social Media Management & Marketing Agency — Northern Colorado",
    description:
      "Social media management, paid ads, and brand identity for small and medium businesses in Northern Colorado and Mexico. Affordable agency based in Fort Lupton, CO.",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 1200,
        height: 1200,
        alt: "Lienzo Studio logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lienzo Studio | Social Media Management & Marketing Agency — Northern Colorado",
    description:
      "Social media management, paid ads, and brand identity for small and medium businesses in Northern Colorado and Mexico. Affordable agency based in Fort Lupton, CO.",
    images: ["/android-chrome-512x512.png"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const langCookie = cookieStore.get("lang")?.value;
  const initialLanguage = langCookie === "es" || langCookie === "en" ? langCookie : defaultLocale;

  return (
    <html lang={initialLanguage} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Lienzo Studio",
              "description": "Social media management, paid advertising, and brand identity agency serving Northern Colorado and Mexico.",
              "url": "https://lienzo.studio",
              "telephone": "+17209907795",
              "email": "sales@lienzo.studio",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Fort Lupton",
                "addressRegion": "CO",
                "addressCountry": "US",
              },
              "areaServed": [
                {
                  "@type": "State",
                  "name": "Colorado",
                  "containedInPlace": { "@type": "Country", "name": "United States" },
                },
                {
                  "@type": "Country",
                  "name": "Mexico",
                },
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Marketing Services",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Management" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Paid Advertising (Google & Meta Ads)" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Identity & Logo Design" } },
                ],
              },
              "openingHours": "Mo-Su 00:00-23:59",
              "priceRange": "$$",
              "sameAs": [
                "https://www.instagram.com/_lienzostudio/",
                "https://www.facebook.com/people/Lienzo-Studio/61588545936546/",
              ],
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
  try {
    const override = localStorage.getItem("theme-override");
    const legacy = localStorage.getItem("theme");
    if (!override && (legacy === "dark" || legacy === "light")) {
      localStorage.setItem("theme-override", legacy);
      localStorage.removeItem("theme");
    }
    const stored = localStorage.getItem("theme-override");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme =
      stored === "dark" || stored === "light"
        ? stored
        : prefersDark
          ? "dark"
          : "light";
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.setAttribute("data-theme", theme);
  } catch {}
})();`,
          }}
        />
      </head>
      <body className={`${hostGrotesk.variable} ${onlyGraphic.variable} antialiased font-sans`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0WNFWMW6KN"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-0WNFWMW6KN');`,
          }}
        />
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '3532162043624771');
fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://www.facebook.com/tr?id=3532162043624771&ev=PageView&noscript=1"
          />
        </noscript>
        <LanguageProvider initialLanguage={initialLanguage}>
          <PageTransitionProvider>
            <TopNav />
            <PageKey className="pb-16 md:pb-0">{children}</PageKey>
            <FooterLink />
            <CornerIcon />
          </PageTransitionProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
