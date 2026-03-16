import type { Metadata } from "next";
import { LanguageProvider } from "@/components/LanguageProvider";
import { PageTransitionProvider } from "@/components/PageTransitionProvider";
import TopNav from "@/components/TopNav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lienzo Studio",
  description: "Digital marketing agency website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        <LanguageProvider>
          <PageTransitionProvider>
            <TopNav />
            <div className="pb-16 md:pb-0">{children}</div>
          </PageTransitionProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
