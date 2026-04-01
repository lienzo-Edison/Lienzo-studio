"use client";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import Masonry, { type MasonryItem } from "@/components/Masonry";
import { useLanguage } from "@/components/LanguageProvider";
import { getTranslations } from "@/lib/i18n";

type Project = {
  cover: string;
  title: string;
  description: string;
  gallery: string[];
};

const masonryHeights = [420, 290, 560, 340, 470, 315, 510, 360, 445];

export default function Portfolio() {
  const [openProject, setOpenProject] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const modalScrollRef = useRef<HTMLElement | null>(null);
  const { language } = useLanguage();
  const t = getTranslations(language);

  const projects: Project[] = useMemo(
    () =>
      Array.from({ length: 9 }).map((_, i) => ({
        cover:
          i === 0
            ? "/projects/P1/WicFix_1.jpg"
            : i === 1
              ? "/projects/P2/Mass_1.jpg"
              : "/projects/sample-portfolio.jpg",
        title: t.portfolio.projectTitle(i + 1),
        description:
          i === 0
            ? t.portfolio.projectDescPrimary
            : i === 1
              ? t.portfolio.projectDescSecondary
              : t.portfolio.projectDescOther,
        gallery:
          i === 0
            ? [
                "/projects/P1/WicFix_1.jpg",
                "/projects/P1/WicFix_2.jpg",
                "/projects/P1/WicFix_3.jpg",
                "/projects/P1/WicFix_4.jpg",
                "/projects/P1/WicFix_5.jpg",
                "/projects/P1/WicFix_6.jpg",
                "/projects/P1/WicFix_7.jpg",
                "/projects/P1/WicFix_8.jpg",
                "/projects/P1/WicFix_9.jpg",
              ]
            : i === 1
              ? [
                  "/projects/P2/Mass_1.jpg",
                  "/projects/P2/Mass_2.jpg",
                  "/projects/P2/Mass_3.jpg",
                  "/projects/P2/Mass_4.jpg",
                  "/projects/P2/Mass_5.jpg",
                  "/projects/P2/Mass_6.jpg",
                  "/projects/P2/Mass_7.jpg",
                  "/projects/P2/Mass_8.jpg",
                  "/projects/P2/Mass_9.jpg",
                ]
            : [
                "/projects/sample-portfolio.jpg",
                "/projects/sample-portfolio.jpg",
                "/projects/sample-portfolio.jpg",
              ],
      })),
    [t.portfolio],
  );

  const handleProjectTap = (index: number) => {
    setOpenProject((prev) => (prev === index ? null : index));
  };

  const selectedProject = openProject !== null ? projects[openProject] : null;
  const masonryItems: MasonryItem[] = useMemo(
    () =>
      projects.map((project, idx) => ({
        id: String(idx),
        img: project.cover,
        url: project.gallery.length ? "#" : undefined,
        height: masonryHeights[idx % masonryHeights.length],
        title: project.title,
        description: project.description,
        alt: t.masonry.projectImageAlt(idx + 1),
      })),
    [projects, t.masonry],
  );

  useEffect(() => {
    if (openProject === null) return;

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenProject(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setMobileMenuOpen(false);
    window.addEventListener("keydown", onEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onEscape);
    };
  }, [openProject]);

  return (
    <LayoutGroup>
      <motion.main
        className="relative min-h-screen overflow-hidden bg-white p-6 text-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        <div className="relative z-10 mt-32 max-w-7xl mx-auto">
          <div className="mb-14 flex justify-center">
            <h1 className="text-4xl font-bold font-display text-center text-black tracking-wide">
              {t.portfolio.title}
            </h1>
          </div>

          <section className="relative rounded-[28px] border border-black/10 bg-white p-3 md:p-4">
            <div className="relative z-10">
              <Masonry
                items={masonryItems}
                ease="power3.out"
                duration={0.6}
                stagger={0.05}
                animateFrom="random"
                scaleOnHover
                hoverScale={0.95}
                blurToFocus
                layoutIdPrefix="project-image"
                onItemClick={(_, idx) => handleProjectTap(idx)}
              />
            </div>
          </section>

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
                  onClick={() => setOpenProject(null)}
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
                    onClick={() => setOpenProject(null)}
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
                          onClick={() => setOpenProject(null)}
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
