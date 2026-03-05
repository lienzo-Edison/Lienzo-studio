"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import Masonry, { type MasonryItem } from "@/components/Masonry";
import Beams from "@/components/Beams";
import GlassSurface from "@/components/GlassSurface";

type Project = {
  image: string;
  title: string;
  description: string;
  details: {
    gallery: string[];
    overview: string;
    scope: string[];
  };
};

const projects: Project[] = Array.from({ length: 9 }).map((_, i) => ({
  image: "/projects/sample-portfolio.jpg",
  title: `Project ${i + 1}`,
  description:
    i === 0
      ? "Residential remodel with warm materials and natural light study."
      : "Brief description of the project goes here.",
  details: {
    gallery: [
      "/projects/sample-portfolio.jpg",
      "/projects/sample-portfolio.jpg",
      "/projects/sample-portfolio.jpg",
    ],
    overview:
      i === 0
        ? "Project 1 is a full-home design concept focused on balancing clean modern geometry with lived-in comfort. The goal was to create a layout that feels bright and calm while still supporting daily family routines."
        : `Project ${i + 1} expanded overview placeholder. Replace this with your full project story, design intent, and key outcomes.`,
    scope: [
      "Defined spatial concept, circulation, and furniture zoning.",
      "Refined palette and material direction for a cohesive look.",
      "Prepared visual studies to communicate mood and final intent.",
    ],
  },
}));

const masonryHeights = [420, 290, 560, 340, 470, 315, 510, 360, 445];

export default function Portfolio() {
  const [openProject, setOpenProject] = useState<number | null>(null);
  const [activeGalleryImage, setActiveGalleryImage] = useState(0);

  const handleProjectTap = (index: number) => {
    setOpenProject((prev) => (prev === index ? null : index));
    setActiveGalleryImage(0);
  };

  const selectedProject = openProject !== null ? projects[openProject] : null;
  const openProjectDetails = selectedProject?.details;
  const masonryItems: MasonryItem[] = projects.map((project, idx) => ({
    id: String(idx),
    img: project.image,
    url: project.details ? "#" : undefined,
    height: masonryHeights[idx % masonryHeights.length],
    title: project.title,
    description: project.description,
  }));

  useEffect(() => {
    if (openProject === null) return;

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenProject(null);
        setActiveGalleryImage(0);
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

  return (
    <LayoutGroup>
      <motion.main
        className="relative min-h-screen overflow-hidden p-6"
        style={{ backgroundColor: "#020202" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        <div className="absolute inset-0">
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <Beams
              beamWidth={1.1}
              beamHeight={30}
              beamNumber={12}
              lightColor="#ffffff"
              speed={2.6}
              noiseIntensity={1.75}
              scale={0.2}
              rotation={30}
            />
          </div>
          <div className="absolute inset-0 bg-black/52" />
        </div>

        <div className="relative z-10 mt-32 max-w-7xl mx-auto">
          <div className="mb-14 flex justify-center">
            <GlassSurface
              width="fit-content"
              height={84}
              borderRadius={24}
              displace={0.5}
              distortionScale={-180}
              redOffset={0}
              greenOffset={10}
              blueOffset={20}
              brightness={50}
              opacity={0.93}
              mixBlendMode="screen"
              className="px-5"
            >
              <h1 className="text-4xl font-bold text-center text-white tracking-wide">Portfolio</h1>
            </GlassSurface>
          </div>

          <section className="relative rounded-[28px]">
            <div className="pointer-events-none absolute inset-0">
              <GlassSurface
                width="100%"
                height="100%"
                borderRadius={28}
                displace={0.35}
                distortionScale={-120}
                redOffset={0}
                greenOffset={8}
                blueOffset={14}
                brightness={46}
                opacity={0.88}
                mixBlendMode="screen"
              />
            </div>

            <div className="relative z-10 p-3 md:p-4">
              <Masonry
                items={masonryItems}
                ease="power3.out"
                duration={0.6}
                stagger={0.05}
                animateFrom="random"
                scaleOnHover
                hoverScale={0.95}
                blurToFocus
                colorShiftOnHover
                layoutIdPrefix="project-image"
                onItemClick={(_, idx) => handleProjectTap(idx)}
              />
            </div>
          </section>

          <AnimatePresence>
            {openProjectDetails && selectedProject && openProject !== null && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <button
                  type="button"
                  aria-label="Close project details"
                  onClick={() => setOpenProject(null)}
                  className="absolute inset-0 bg-black/80 backdrop-blur-[2px]"
                />

                <motion.section
                  className="relative z-10 w-full max-w-6xl max-h-[88vh] overflow-y-auto rounded-xl border border-white/15 bg-[#0d0d0d] p-4 md:p-6"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: 12 }}
                  transition={{ duration: 0.24 }}
                >
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
                      <p className="mt-1 text-sm text-white/70">Expanded project view</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setOpenProject(null)}
                      className="rounded border border-white/20 px-3 py-1 text-xs text-white/80 transition hover:border-white/40 hover:text-white"
                    >
                      Close
                    </button>
                  </div>

                  <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
                    <div>
                      <motion.div
                        layoutId={`project-image-${openProject}`}
                        className="relative overflow-hidden rounded-md border border-white/10 bg-black/40 aspect-[4/3]"
                      >
                        <Image
                          src={openProjectDetails.gallery[activeGalleryImage]}
                          alt={`${selectedProject.title} detail image ${activeGalleryImage + 1}`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 58vw"
                          className="object-cover"
                        />
                      </motion.div>

                      <div className="mt-3 grid grid-cols-3 gap-2">
                        {openProjectDetails.gallery.map((img, imgIndex) => (
                          <button
                            key={`${img}-${imgIndex}`}
                            type="button"
                            onClick={() => setActiveGalleryImage(imgIndex)}
                            className={`relative overflow-hidden rounded-md border aspect-[4/3] ${
                              activeGalleryImage === imgIndex
                                ? "border-white/70"
                                : "border-white/20 hover:border-white/45"
                            }`}
                          >
                            <Image
                              src={img}
                              alt={`${selectedProject.title} thumbnail ${imgIndex + 1}`}
                              fill
                              sizes="(max-width: 1024px) 30vw, 15vw"
                              className="object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-md border border-white/10 bg-black/30 p-4 md:p-5">
                      <h3 className="text-lg font-semibold text-white">Project Overview</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/80">{openProjectDetails.overview}</p>

                      <h4 className="mt-5 text-sm font-semibold uppercase tracking-wide text-white/90">Scope</h4>
                      <ul className="mt-2 space-y-2 text-sm text-white/80">
                        {openProjectDetails.scope.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
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
