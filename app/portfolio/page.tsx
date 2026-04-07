"use client";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import { getTranslations } from "@/lib/i18n";

type Project = {
  cover: string;
  title: string;
  description: string;
  gallery: string[];
};

export default function Portfolio() {
  const [openProject, setOpenProject] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const modalScrollRef = useRef<HTMLElement | null>(null);
  const openProjectRef = useRef<number | null>(null);
  const { language } = useLanguage();
  const t = getTranslations(language);

  const projects: Project[] = useMemo(
    () => [
      {
        cover: "/projects/P1/WicFix_1.jpg",
        title: t.portfolio.projectTitle(1),
        description: t.portfolio.projectDescPrimary,
        gallery: [
          "/projects/P1/WicFix_1.jpg",
          "/projects/P1/WicFix_2.jpg",
          "/projects/P1/WicFix_3.jpg",
          "/projects/P1/WicFix_4.jpg",
          "/projects/P1/WicFix_5.jpg",
          "/projects/P1/WicFix_6.jpg",
          "/projects/P1/WicFix_7.jpg",
          "/projects/P1/WicFix_8.jpg",
          "/projects/P1/WicFix_9.jpg",
        ],
      },
      {
        cover: "/projects/P2/Mass_1.jpg",
        title: t.portfolio.projectTitle(2),
        description: t.portfolio.projectDescSecondary,
        gallery: [
          "/projects/P2/Mass_1.jpg",
          "/projects/P2/Mass_2.jpg",
          "/projects/P2/Mass_3.jpg",
          "/projects/P2/Mass_4.jpg",
          "/projects/P2/Mass_5.jpg",
          "/projects/P2/Mass_6.jpg",
          "/projects/P2/Mass_7.jpg",
          "/projects/P2/Mass_8.jpg",
          "/projects/P2/Mass_9.jpg",
        ],
      },
      {
        cover: "/projects/P3/Dulce_01.png",
        title: t.portfolio.projectTitle(3),
        description: t.portfolio.projectDescTertiary,
        gallery: [
          "/projects/P3/Dulce_01.png",
          "/projects/P3/Dulce_02.png",
          "/projects/P3/Dulce_03.png",
          "/projects/P3/Dulce_04.png",
          "/projects/P3/Dulce_05.png",
          "/projects/P3/Dulce_06.png",
          "/projects/P3/Dulce_07.png",
          "/projects/P3/Dulce_08.png",
          "/projects/P3/Dulce_09.png",
          "/projects/P3/Dulce_10.png",
        ],
      },
    ],
    [t.portfolio],
  );

  const closeProject = () => {
    if (typeof window !== "undefined") {
      const state = window.history.state as { portfolioModal?: boolean } | null;
      if (state?.portfolioModal) {
        window.history.back();
        return;
      }
    }
    setOpenProject(null);
  };

  const handleProjectTap = (index: number) => {
    if (openProject === index) {
      closeProject();
      return;
    }
    setMobileMenuOpen(false);
    setOpenProject(index);
  };

  const selectedProject = openProject !== null ? projects[openProject] : null;

  useEffect(() => {
    openProjectRef.current = openProject;
    if (openProject === null) return;

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeProject();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onEscape);
    };
  }, [openProject]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onPopState = () => {
      if (openProjectRef.current !== null) {
        setOpenProject(null);
      }
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (openProject === null) return;
    const state = window.history.state as { portfolioModal?: boolean; index?: number } | null;
    if (!state?.portfolioModal) {
      window.history.pushState(
        { portfolioModal: true, index: openProject },
        "",
        window.location.pathname,
      );
    }
  }, [openProject]);

  return (
    <LayoutGroup>
      <motion.main
        className="relative min-h-screen overflow-hidden bg-background p-6 text-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        <div className="relative z-10 mt-32 mx-auto w-full px-4 sm:px-6 lg:px-10">
          <div className="mb-14 flex justify-center">
            <h1 className="text-4xl font-bold font-display text-center text-foreground tracking-wide">
              {t.portfolio.title}
            </h1>
          </div>
          <div className="mb-8 flex justify-center">
            <p className="max-w-3xl text-center text-sm leading-relaxed text-black/70 dark:text-white/70">
              {t.portfolio.intro}
            </p>
          </div>
          <div className="mb-10 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-black/55 dark:text-white/55"
            >
              <span>{t.portfolio.scrollHint}</span>
              <motion.span
                aria-hidden="true"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="text-base leading-none"
              >
                ↓
              </motion.span>
            </motion.div>
          </div>

          <section className="relative rounded-[28px] border border-black/10 bg-white/95 p-5 sm:p-8 md:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-white/5">
            <motion.div
              className="relative z-10 space-y-6 sm:space-y-8"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
              }}
            >
              {projects.map((project, idx) => (
                <motion.button
                  key={project.title}
                  type="button"
                  onClick={() => handleProjectTap(idx)}
                  className="group relative flex w-full flex-col overflow-hidden rounded-[24px] border border-black/10 bg-white text-left transition hover:border-black/30 dark:border-white/10 dark:bg-[#151c24] dark:hover:border-white/30"
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                  }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="relative w-full overflow-hidden bg-black">
                    <motion.div
                      layoutId={`project-image-${idx}`}
                      className="relative w-full"
                    >
                      <Image
                        src={project.cover}
                        alt={project.title}
                        width={1800}
                        height={1000}
                        sizes="(min-width: 1024px) 90vw, 100vw"
                        className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                        priority={idx === 0}
                      />
                    </motion.div>
                  </div>
                  <div className="flex flex-col gap-2 px-6 py-5 sm:px-8 sm:py-6">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                      {project.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-black/70 dark:text-white/70">
                      {project.description}
                    </p>
                    <span className="text-xs uppercase tracking-[0.3em] text-black/50 dark:text-white/50">
                      View project
                    </span>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </section>

          <div className="mt-10 flex justify-center">
            <p className="max-w-2xl text-center text-sm leading-relaxed text-black/70 dark:text-white/70">
              {t.portfolio.moreComing}
            </p>
          </div>

          <AnimatePresence>
            {selectedProject && openProject !== null && (
              <motion.div
                className="fixed inset-0 z-50 bg-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <button
                  type="button"
                  aria-label={t.portfolio.closeDetailsLabel}
                  onClick={closeProject}
                  className="absolute inset-0 bg-black/70"
                />

                <motion.section
                  className="relative z-10 h-full w-full overflow-y-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  ref={modalScrollRef}
                >
                  <button
                    type="button"
                    onClick={closeProject}
                    aria-label={t.portfolio.closeDetailsLabel}
                    className="fixed right-6 top-24 z-40 hidden rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-white/85 backdrop-blur transition hover:border-white/50 hover:bg-white/20 hover:text-white md:inline-flex"
                  >
                    Back to projects
                  </button>
                  <div className="fixed bottom-7 right-5 z-40 flex items-end gap-3 md:hidden">
                    {mobileMenuOpen && (
                      <div className="flex flex-col items-end gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            const target = modalScrollRef.current;
                            if (!target) return;
                            target.scrollTo({ top: 0, behavior: "smooth" });
                            setMobileMenuOpen(false);
                          }}
                          className="flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-white/90 backdrop-blur transition hover:border-white/50 hover:bg-white/20 hover:text-white"
                        >
                          <span className="text-sm leading-none">↑</span>
                          Navigate top
                        </button>
                        <button
                          type="button"
                          onClick={closeProject}
                          className="flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-white/90 backdrop-blur transition hover:border-white/50 hover:bg-white/20 hover:text-white"
                        >
                          <span className="text-sm leading-none">←</span>
                          Back to projects
                        </button>
                      </div>
                    )}
                    <button
                      type="button"
                      aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                      onClick={() => setMobileMenuOpen((prev) => !prev)}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur transition hover:border-white/60 hover:bg-white/25"
                    >
                      <span className="text-lg leading-none">
                        {mobileMenuOpen ? "×" : "≡"}
                      </span>
                    </button>
                  </div>

                  <div className="mt-16 space-y-0 pb-0">
                    {selectedProject.gallery.map((img, imgIndex) => (
                      <motion.div
                        key={`${img}-${imgIndex}`}
                        layoutId={imgIndex === 0 ? `project-image-${openProject}` : undefined}
                        className="relative w-full overflow-hidden bg-black"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: imgIndex * 0.05 }}
                      >
                        <Image
                          src={img}
                          alt={t.portfolioModal.detailAlt(selectedProject.title, imgIndex + 1)}
                          width={1920}
                          height={1080}
                          sizes="100vw"
                          priority={imgIndex === 0}
                          className="h-auto w-full object-contain"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.main>
    </LayoutGroup>
  );
}
