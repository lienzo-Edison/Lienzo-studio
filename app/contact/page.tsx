"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import { getTranslations } from "@/lib/i18n";

export default function Contact() {
  const [revealed, setRevealed] = useState(false);
  const { language } = useLanguage();
  const t = getTranslations(language);

  const emailUser = "ventas";
  const emailDomain = "lienzo.studio";
  const fullEmail = `${emailUser}@${emailDomain}`;

  return (
    <motion.main
      className="min-h-screen flex flex-col items-center justify-start bg-black text-white p-6"
      initial={{ opacity: 0, backgroundColor: "#000000" }}
      animate={{ opacity: 1, backgroundColor: "#000000" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="mt-32 text-center max-w-xl">
        <h1 className="text-4xl font-bold mb-6">{t.contact.title}</h1>
        <p className="text-lg text-white/80 mb-8">
          {t.contact.intro}
        </p>

        <div className="bg-white/10 border border-white/20 rounded-lg p-6">
          {!revealed ? (
            <>
              <p className="mb-4 text-white/70">
                {t.contact.revealPrompt}
              </p>
              <button
                onClick={() => setRevealed(true)}
                className="bg-white/10 hover:bg-white/20 border border-white/20 rounded px-6 py-3 transition"
              >
                {t.contact.revealButton}
              </button>
            </>
          ) : (
            <p className="text-lg font-medium">
              {fullEmail}
            </p>
          )}
        </div>
      </div>
    </motion.main>
  );
}
