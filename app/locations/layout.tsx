import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Locations Served",
  description:
    "Lienzo Studio serves small and medium businesses across Northern Colorado and the Denver metro area. Social media management and brand identity in Greeley, Longmont, Brighton, Loveland, Fort Collins, Boulder, Thornton, Northglenn, Broomfield, and Commerce City.",
  openGraph: {
    title: "Locations Served | Lienzo Studio | Northern Colorado & Denver Metro",
    description:
      "Social media management and brand identity for businesses across Northern Colorado and the northern Denver metro. Based in Fort Lupton, CO.",
  },
};

export default function LocationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
