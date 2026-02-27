"use client";
import Image from "next/image";
import TransitionLink from "@/components/TransitionLink";
import { motion } from "framer-motion";

const projects = Array.from({ length: 16 }).map((_, i) => ({
  image: "/projects/sample-portfolio.jpg",
  title: `Project ${i + 1}`,
  description: "Brief description of the project goes here.",
}));

const mosaicPattern = [
  "row-span-4",
  "row-span-3",
  "row-span-4",
  "row-span-3",
  "row-span-5",
  "row-span-4",
  "row-span-3",
  "row-span-4",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Portfolio() {
  return (
    <motion.main
      className="min-h-screen p-6"
      style={{ backgroundColor: "#000000" }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 w-full z-20 flex justify-center gap-10 py-6 text-white/80 text-sm uppercase tracking-wide">
        <TransitionLink href="/" className="hover:opacity-70 transition">Home</TransitionLink>
        <TransitionLink href="/portfolio" className="hover:opacity-70 transition">Portafolio</TransitionLink>
        <TransitionLink href="/contact" className="hover:opacity-70 transition">Contact Us</TransitionLink>
      </nav>

      <div className="mt-32 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-16 text-center text-white">Portfolio</h1>

        {/* Mosaic Layout */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 grid-flow-dense auto-rows-[80px] sm:auto-rows-[86px] gap-3 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              className={`relative overflow-hidden group cursor-pointer bg-black rounded-sm col-span-1 ${
                mosaicPattern[idx % mosaicPattern.length]
              }`}
              variants={itemVariants}
            >
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-6">
                <h3 className="text-xl font-bold">{proj.title}</h3>
                <p className="text-sm mt-2">{proj.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.main>
  );
}
