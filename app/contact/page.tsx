"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import { getTranslations } from "@/lib/i18n";

export default function Contact() {
  const [revealed, setRevealed] = useState(false);
  const { language } = useLanguage();
  const t = getTranslations(language);

  const fullEmail = language === "es" ? "ventas@lienzo.studio" : "sales@lienzo.studio";
  const phoneNumber = "+1 (720) 990-7795";
  const whatsappLink = "https://wa.me/message/LVLY6STJJOM4K1";

  const trackContact = (method: "phone" | "whatsapp" | "email_reveal") => {
    if (typeof window === "undefined") return;
    const fbq = (window as typeof window & { fbq?: (...args: unknown[]) => void }).fbq;
    if (typeof fbq !== "function") return;
    fbq("track", "Contact", { method });

    const gtag = (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag;
    if (typeof gtag === "function") {
      gtag("event", "contact", { method });
    }
  };

  return (
    <motion.main
      className="min-h-screen flex flex-col items-center justify-start bg-white text-black p-6"
      initial={{ opacity: 0, backgroundColor: "#ffffff" }}
      animate={{ opacity: 1, backgroundColor: "#ffffff" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="mt-32 text-center max-w-xl">
        <h1 className="text-4xl font-bold font-display mb-6">
          {t.contact.title}
        </h1>
        <p className="text-lg text-black/70 mb-8">
          {t.contact.intro}
        </p>

        <div className="bg-black/5 border border-black/10 rounded-lg p-6 text-left">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-xs font-display font-bold uppercase tracking-[0.28em] text-black/50">
                Phone
              </p>
              <a
                href={`tel:${phoneNumber.replace(/[^+\\d]/g, "")}`}
                className="mt-2 inline-block text-lg font-medium text-black hover:text-black/70"
                onClick={() => trackContact("phone")}
              >
                {phoneNumber}
              </a>
            </div>

            <div>
              <p className="text-xs font-display font-bold uppercase tracking-[0.28em] text-black/50">
                WhatsApp
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center justify-center rounded border border-black/15 bg-black/5 px-6 py-2 text-sm font-medium text-black transition hover:border-[#25d366] hover:text-black hover:shadow-[0_0_18px_rgba(37,211,102,0.55)]"
                onClick={() => trackContact("whatsapp")}
              >
                {t.contact.whatsappButton}
              </a>
            </div>

            <div>
              <p className="text-xs font-display font-bold uppercase tracking-[0.28em] text-black/50">
                Email
              </p>
              {!revealed ? (
                <>
                  <p className="mt-2 text-sm text-black/60">{t.contact.preferEmail}</p>
                  <button
                    onClick={() => {
                      setRevealed(true);
                      trackContact("email_reveal");
                    }}
                    className="mt-3 bg-black/5 hover:bg-black/10 border border-black/10 rounded px-5 py-2 text-sm transition"
                  >
                    {t.contact.revealButton}
                  </button>
                </>
              ) : (
                <p className="mt-2 text-lg font-medium text-black">{fullEmail}</p>
              )}
            </div>

            <div>
              <p className="text-xs font-display font-bold uppercase tracking-[0.28em] text-black/50">
                Social
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/_lienzostudio/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black transition hover:border-black/30 hover:text-black/80"
                  aria-label="Lienzo Studio on Instagram"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
                    <circle cx="17" cy="7" r="1.2" fill="currentColor" />
                  </svg>
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/people/Lienzo-Studio/61588545936546/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black transition hover:border-black/30 hover:text-black/80"
                  aria-label="Lienzo Studio on Facebook"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M14 8.5V7.2c0-.9.5-1.4 1.6-1.4h1.4V3.2c-.7-.1-1.7-.2-2.8-.2-2.7 0-4.4 1.6-4.4 4.4v1.1H7v3h2.8V21h3.2v-9.5h2.7l.4-3H14Z"
                      fill="currentColor"
                    />
                  </svg>
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
