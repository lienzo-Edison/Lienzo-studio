import type { Metadata } from "next";
import Link from "next/link";
import PortalAuthForm from "@/components/PortalAuthForm";

export const metadata: Metadata = {
  title: "Client portal",
  robots: { index: false, follow: false },
};

export default function PortalLoginPage() {
  return (
    <main className="min-h-screen bg-[#e6e1d5] text-[#0f1418]">
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-32 sm:px-8 lg:flex lg:min-h-screen lg:items-center lg:gap-20 lg:py-32">
      <section className="mb-12 max-w-xl lg:mb-0">
        <Link
          href="/"
          className="text-xs font-bold uppercase tracking-[0.2em] text-black/55 transition hover:text-black"
        >
          ← Lienzo Studio
        </Link>
        <p className="mt-14 font-display text-5xl font-bold uppercase leading-[0.88] tracking-tight sm:text-7xl">
          A clearer way to work together.
        </p>
        <p className="mt-7 max-w-lg text-base leading-7 text-black/65">
          New to Lienzo? Start by exploring our services and getting in touch.
          Existing clients can follow project progress and open Stripe billing from
          their account.
        </p>
      </section>
      <section className="w-full max-w-xl">
        <PortalAuthForm />
      </section>
      </div>
    </main>
  );
}
