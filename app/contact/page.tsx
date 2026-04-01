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
        <h1 className="text-4xl font-bold font-[var(--font-display)] mb-6">
          {t.contact.title}
        </h1>
        <p className="text-lg text-black/70 mb-8">
          {t.contact.intro}
        </p>

        <div className="bg-black/5 border border-black/10 rounded-lg p-6 text-left">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-black/50">Phone</p>
              <a
                href={`tel:${phoneNumber.replace(/[^+\\d]/g, "")}`}
                className="mt-2 inline-block text-lg font-medium text-black hover:text-black/70"
                onClick={() => trackContact("phone")}
              >
                {phoneNumber}
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-black/50">WhatsApp</p>
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
              <p className="text-xs uppercase tracking-[0.28em] text-black/50">Email</p>
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
          </div>
        </div>
      </div>
    </motion.main>
  );
}
