import type { Metadata } from "next";
import localFont from "next/font/local";
import { LanguageProvider } from "@/components/LanguageProvider";
import { PageTransitionProvider } from "@/components/PageTransitionProvider";
import TopNav from "@/components/TopNav";
import "./globals.css";
import { cookies } from "next/headers";
import { defaultLocale } from "@/lib/i18n";

const hostGrotesk = localFont({
  src: "../public/fonts/HostGrotesk-VariableFont_wght.woff2",
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
  title: "Lienzo Studio",
  description:
    "Creativity that crosses every border. Lienzo Studio is a digital marketing and graphic design agency helping brands communicate clearly, grow consistently, and stand out across every platform.",
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
    title: "Lienzo Studio",
    description:
      "Creativity that crosses every border. Lienzo Studio is a digital marketing and graphic design agency helping brands communicate clearly, grow consistently, and stand out across every platform.",
    images: [
      {
        url: "/logos/logo-circular-01.png",
        width: 1200,
        height: 1200,
        alt: "Lienzo Studio circular logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lienzo Studio",
    description:
      "Creativity that crosses every border. Lienzo Studio is a digital marketing and graphic design agency helping brands communicate clearly, grow consistently, and stand out across every platform.",
    images: ["/logos/logo-circular-01.png"],
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
    <html lang={initialLanguage}>
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0WNFWMW6KN"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-0WNFWMW6KN');`,
          }}
        />
        <script
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
      </head>
      <body className={`${hostGrotesk.variable} ${onlyGraphic.variable} antialiased font-sans`}>
        <noscript>
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
            <div className="pb-16 md:pb-0">{children}</div>
          </PageTransitionProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
