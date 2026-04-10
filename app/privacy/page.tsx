"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import { getTranslations } from "@/lib/i18n";

export default function PrivacyPolicy() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <motion.main
      className="min-h-screen flex flex-col items-center justify-start bg-background text-foreground p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="mt-32 w-full max-w-3xl">
        <h1 className="text-4xl font-bold font-display mb-2">
          {t.privacy.title}
        </h1>
        <p className="text-sm text-black/50 dark:text-white/50 mb-12 uppercase tracking-widest">
          {t.privacy.lastUpdated}
        </p>

        <div className="flex flex-col gap-10">
          {t.privacy.sections.map((section, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <h2 className="text-xl font-display font-bold uppercase tracking-wider text-black/80 dark:text-white/80">
                {section.title}
              </h2>
              {Array.isArray(section.content) ? (
                <div className="flex flex-col gap-2">
                  {section.content.map((paragraph, pIdx) => (
                    <p 
                      key={pIdx} 
                      className={`text-base leading-relaxed text-black/70 dark:text-white/70 ${paragraph.startsWith("—") ? "pl-4" : ""}`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-base leading-relaxed text-black/70 dark:text-white/70 whitespace-pre-wrap">
                  {section.content}
                </p>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-20 pt-10 border-t border-black/10 dark:border-white/10 mb-20 text-center">
          <p className="text-sm text-black/40 dark:text-white/40">
            © {new Date().getFullYear()} Lienzo Studio. All rights reserved.
          </p>
        </div>
      </div>
    </motion.main>
  );
}
