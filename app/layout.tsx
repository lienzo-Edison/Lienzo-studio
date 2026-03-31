import type { Metadata } from "next";
import localFont from "next/font/local";
import { LanguageProvider } from "@/components/LanguageProvider";
import { PageTransitionProvider } from "@/components/PageTransitionProvider";
import TopNav from "@/components/TopNav";
import "./globals.css";
import { cookies } from "next/headers";
import { defaultLocale } from "@/lib/i18n";

const hostGrotesk = localFont({
  src: "../public/Fonts/HostGrotesk-VariableFont_wght.woff2",
  variable: "--font-body",
  display: "swap",
});

const onlyGraphic = localFont({
  src: "../public/Fonts/onlygraphic.woff2",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lienzo Studio",
  description: "Digital marketing agency website",
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
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${hostGrotesk.variable} ${onlyGraphic.variable} antialiased font-sans`}>
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
