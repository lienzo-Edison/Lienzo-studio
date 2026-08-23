"use client";

import Image from "next/image";
import TransitionLink from "@/components/TransitionLink";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "./page.module.css";

const WHATSAPP = "https://wa.me/message/LVLY6STJJOM4K1";

const copy = {
  en: {
    languageLabel: "Language",
    tagline: "Analyze. Explore. Create.",
    intro: "A bilingual marketing and creative studio working across the U.S. and Mexico.",
    about: "Visit the website",
    socialLabel: "Connect with Lienzo Studio",
    whatEyebrow: "What we do",
    whatTitle: "Ideas built to move business forward.",
    whatIntro: "Strategy, visibility, content, and design, all connected in one place.",
    services: [
      "SEO & search visibility",
      "Websites & landing pages",
      "Campaigns & content",
      "Social media management",
      "Brand identity",
      "Marketing & sales design",
    ],
    servicesButton: "Explore our services",
    teamEyebrow: "Meet the team",
    teamTitle: "Small team. Different strengths.",
    teamIntro: "Strategy, brand, and content brought together across Colorado and Durango.",
    roles: ["Founder & Director", "Brand Designer", "Graphic & Editorial Designer"],
    talk: "Start a conversation",
  },
  es: {
    languageLabel: "Idioma",
    tagline: "Analiza. Explora. Crea.",
    intro: "Un estudio bilingüe de marketing y creatividad que trabaja entre Estados Unidos y México.",
    about: "Visita el sitio completo",
    socialLabel: "Conecta con Lienzo Studio",
    whatEyebrow: "Lo que hacemos",
    whatTitle: "Ideas creadas para impulsar tu negocio.",
    whatIntro: "Estrategia, visibilidad, contenido y diseño conectados en un solo lugar.",
    services: [
      "SEO y visibilidad",
      "Sitios web y landing pages",
      "Campañas y contenido",
      "Manejo de redes sociales",
      "Identidad de marca",
      "Diseño para marketing y ventas",
    ],
    servicesButton: "Explorar servicios",
    teamEyebrow: "Conoce al equipo",
    teamTitle: "Equipo pequeño. Fortalezas distintas.",
    teamIntro: "Estrategia, marca y contenido conectados entre Colorado y Durango.",
    roles: ["Fundador y director", "Diseñador de marca", "Diseñadora gráfica y editorial"],
    talk: "Iniciar una conversación",
  },
} as const;

const quickLinks = [
  { name: "WhatsApp", href: WHATSAPP },
  { name: "Instagram", href: "https://www.instagram.com/_lienzostudio/" },
  { name: "Facebook", href: "https://www.facebook.com/people/Lienzo-Studio/61588545936546/" },
  { name: "TikTok", href: "https://www.tiktok.com/@lienzo.studio_?lang=es" },
] as const;

function SocialIcon({ name }: { name: (typeof quickLinks)[number]["name"] }) {
  if (name === "Instagram") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.7" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (name === "Facebook") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M13.7 21v-8h2.8l.4-3h-3.2V8.1c0-.9.3-1.5 1.6-1.5H17V4a23 23 0 0 0-2.5-.2c-2.5 0-4.2 1.5-4.2 4.3V10H7.5v3h2.8v8h3.4Z" />
      </svg>
    );
  }

  if (name === "TikTok") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M15.2 3c.3 2.1 1.7 3.5 3.8 3.8v3a7.3 7.3 0 0 1-3.8-1.2v6.2a6.1 6.1 0 1 1-5.3-6.1v3.1a3.1 3.1 0 1 0 2.2 3V3h3.1Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.5 11.8a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.3-4.4a8.5 8.5 0 1 1 15.7-4.3Z" />
      <path d="M8.5 8c.3-.7.7-.7 1-.7h.4c.2 0 .4.1.5.4l.9 2c.1.3.1.5-.1.7l-.7.8c-.2.2-.2.4-.1.6.5 1 1.3 1.8 2.3 2.3.2.1.4.1.6-.1l.9-1c.2-.2.5-.3.7-.1l1.9.9c.3.2.4.3.4.5 0 .3-.2 1.2-.8 1.7-.5.5-1.3.8-2.1.6-1-.2-2.2-.6-3.8-2-1.3-1.2-2.2-2.7-2.5-3.8-.3-1-.1-2 .5-2.8Z" />
    </svg>
  );
}

const team = [
  { name: "Edison Carrillo", image: "/pfp/edy.jpeg" },
  { name: "Eduardo Carrillo", image: "/pfp/eduardo.jpeg" },
  { name: "Michelle Portillo", image: "/pfp/mich.jpeg" },
] as const;

function trackContact(destination: string) {
  if (typeof window === "undefined") return;
  const trackedWindow = window as typeof window & {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  };

  trackedWindow.fbq?.("track", "Contact", { destination, source: "business-card" });
  trackedWindow.gtag?.("event", "contact", { destination, source: "business-card" });
}

export default function BusinessCardPage() {
  const { language, setLanguage } = useLanguage();
  const t = copy[language];

  return (
    <main className={styles.page}>
      <div className="relative z-10 mx-auto w-full max-w-[440px] px-4 pb-7 pt-4 sm:px-5 sm:pt-5">
        <header className="mb-4 flex items-center justify-between gap-4 px-1">
          <TransitionLink href="/" aria-label="Lienzo Studio home">
            <Image
              src="/logos/lienzo-compacto-b.svg"
              alt="Lienzo Studio"
              width={160}
              height={48}
              className="h-auto w-[112px]"
              priority
            />
          </TransitionLink>

          <div
            className="flex items-center rounded-full border border-white/15 bg-white/[0.06] p-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white/55"
            role="group"
            aria-label={t.languageLabel}
          >
            {(["en", "es"] as const).map((locale) => (
              <button
                key={locale}
                type="button"
                onClick={() => setLanguage(locale)}
                aria-pressed={language === locale}
                className={`rounded-full px-2.5 py-1 transition ${
                  language === locale ? "bg-[#f6f1e7] text-[#101419]" : "hover:text-white"
                }`}
              >
                {locale}
              </button>
            ))}
          </div>
        </header>

        <div className="grid gap-4">
          <section className={`${styles.card} ${styles.introCard} rounded-[1.75rem] border border-white/14 p-6`}>
            <div className="flex items-start justify-between gap-4">
              <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/46">CO · MX</p>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/18 text-xs text-white/70" aria-hidden="true">
                ✦
              </span>
            </div>

            <h1 className="sr-only">Lienzo Studio</h1>
            <div className="-mx-3 mt-10 flex justify-center">
              <Image
                src="/logos/lienzo-completo-b.svg"
                alt="Lienzo Studio"
                width={1350}
                height={358}
                sizes="(max-width: 640px) calc(100vw - 56px), 386px"
                className="h-auto w-full max-w-none"
                priority
              />
            </div>
            <p className="mt-5 text-center text-sm font-semibold text-white/76">✦ {t.tagline}</p>
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/62">{t.intro}</p>

            <nav aria-label={t.socialLabel} className="mt-6 flex gap-2.5">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.name}
                  onClick={() => trackContact(link.name.toLowerCase())}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/24 bg-black/15 text-white transition hover:border-[#ff8f7a] hover:bg-[#ff8f7a] hover:text-[#101419]"
                >
                  <SocialIcon name={link.name} />
                </a>
              ))}
            </nav>

            <TransitionLink
              href="/"
              className="mt-6 inline-flex min-h-11 w-full items-center justify-between rounded-full border border-white/20 bg-white/[0.07] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/[0.12]"
            >
              {t.about}
              <span aria-hidden="true">↗</span>
            </TransitionLink>
          </section>

          <section className={`${styles.card} ${styles.servicesCard} rounded-[1.75rem] border border-white/12 p-6 backdrop-blur-sm`}>
            <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#ff8f7a]">{t.whatEyebrow}</p>
            <h2 className="mt-3 max-w-sm font-display text-[2.35rem] uppercase leading-[0.9] tracking-[-0.035em] text-white">
              {t.whatTitle}
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/58">{t.whatIntro}</p>

            <ul className="mt-5 grid grid-cols-2 gap-2">
              {t.services.map((service) => (
                <li key={service} className="rounded-xl border border-white/10 bg-white/[0.045] px-3 py-3 text-[11px] font-semibold leading-4 text-white/76">
                  {service}
                </li>
              ))}
            </ul>

            <TransitionLink
              href="/services"
              className="mt-5 inline-flex min-h-11 w-full items-center justify-between rounded-full bg-[#f6f1e7] px-5 py-2.5 text-sm font-bold text-[#101419] transition hover:bg-white"
            >
              {t.servicesButton}
              <span aria-hidden="true">↗</span>
            </TransitionLink>
          </section>

          <section className={`${styles.card} ${styles.teamCard} rounded-[1.75rem] border border-black/8 p-6`}>
            <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#a61b00]">{t.teamEyebrow}</p>
            <h2 className="mt-3 max-w-sm font-display text-[2.35rem] uppercase leading-[0.9] tracking-[-0.035em]">
              {t.teamTitle}
            </h2>
            <p className="mt-4 text-sm leading-6 text-black/58">{t.teamIntro}</p>

            <ul className="mt-5 grid gap-2.5">
              {team.map((member, index) => (
                <li key={member.name} className="flex items-center gap-3 rounded-2xl border border-black/8 bg-white/55 p-2.5">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={52}
                    height={52}
                    sizes="52px"
                    className="h-[52px] w-[52px] rounded-xl object-cover grayscale"
                  />
                  <div className="min-w-0">
                    <p className="font-display text-base uppercase leading-tight">{member.name}</p>
                    <p className="mt-1 text-[11px] font-semibold text-black/48">{t.roles[index]}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackContact("whatsapp-team")}
              className="mt-5 inline-flex min-h-11 w-full items-center justify-between rounded-full bg-[#101419] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#254566]"
            >
              {t.talk}
              <span aria-hidden="true">↗</span>
            </a>
          </section>
        </div>

        <footer className="flex items-center justify-between gap-4 px-2 pb-1 pt-6 text-[10px] font-semibold text-white/42">
          <p>© {new Date().getFullYear()} Lienzo Studio</p>
          <TransitionLink href="/" className="transition hover:text-white">lienzo.studio ↗</TransitionLink>
        </footer>
      </div>
    </main>
  );
}
