import type { Metadata } from "next";
import localFont from "next/font/local";
import { LanguageProvider } from "@/components/LanguageProvider";
import { PageTransitionProvider } from "@/components/PageTransitionProvider";
import SiteFrame from "@/components/SiteFrame";
import "./globals.css";
import { cookies, headers } from "next/headers";
import { getLocaleFromAcceptLanguage, isLocale } from "@/lib/i18n";
import { buildSiteSchemaGraph, siteUrl } from "@/lib/schema";
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
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lienzo Studio | Marketing, SEO & Brand Agency",
    template: "%s | Lienzo Studio",
  },
  description:
    "Bilingual marketing, SEO, websites, campaigns, brand strategy, and design for established and growth-stage companies across the U.S., Mexico, and LATAM.",
  keywords: [
    "social media management Northern Colorado",
    "social media agency Fort Lupton CO",
    "paid ads agency Colorado",
    "digital marketing Northern Colorado",
    "brand identity Colorado",
    "logo design Northern Colorado",
    "content creation Colorado",
    "website design for established companies",
    "SEO agency for professional services",
    "SEO strategy Colorado",
    "content marketing agency",
    "brand strategy agency",
    "Google Business Profile optimization",
    "bilingual marketing support",
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
  applicationName: "Lienzo Studio",
  authors: [{ name: "Lienzo Studio", url: siteUrl }],
  creator: "Lienzo Studio",
  publisher: "Lienzo Studio",
  category: "Marketing",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: siteUrl,
    title: "Lienzo Studio | Marketing, SEO & Brand Agency",
    description:
      "Bilingual marketing, SEO, websites, campaigns, brand strategy, and design for ambitious companies across the U.S., Mexico, and LATAM.",
    type: "website",
    siteName: "Lienzo Studio",
    locale: "en_US",
    alternateLocale: "es_MX",
    images: [
      {
        url: "/og-image-logo.png",
        width: 1200,
        height: 630,
        alt: "Lienzo Studio logo — Design, Brand, Publicity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lienzo Studio | Marketing, SEO & Brand Agency",
    description:
      "Bilingual marketing, SEO, websites, campaigns, brand strategy, and design for ambitious companies across the U.S., Mexico, and LATAM.",
    images: ["/og-image-logo.png"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const langCookie = cookieStore.get("lang")?.value;
  const initialLanguage = isLocale(langCookie)
    ? langCookie
    : getLocaleFromAcceptLanguage(headerStore.get("accept-language"));

  return (
    <html lang={initialLanguage} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              ...buildSiteSchemaGraph(),
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
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0WNFWMW6KN"
          strategy="lazyOnload"
        />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-0WNFWMW6KN');`,
          }}
        />
        <Script
          id="facebook-pixel"
          strategy="lazyOnload"
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
            <SiteFrame>{children}</SiteFrame>
          </PageTransitionProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
