"use client";

import { usePathname } from "next/navigation";
import CornerIcon from "@/components/CornerIcon";
import FooterLink from "@/components/FooterLink";
import SiteFooter from "@/components/SiteFooter";
import TopNav from "@/components/TopNav";

const standaloneRoutes = new Set(["/business-card"]);

export default function SiteFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStandaloneRoute = standaloneRoutes.has(pathname);

  return (
    <>
      {!isStandaloneRoute && <TopNav />}
      <div id="main-content" tabIndex={-1}>
        {children}
        {!isStandaloneRoute && <SiteFooter />}
      </div>
      {!isStandaloneRoute && (
        <>
          <FooterLink />
          <CornerIcon />
        </>
      )}
    </>
  );
}
