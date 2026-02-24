"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    image: "/projects/sample-portfolio.jpg",
    title: "Sample Project",
    description: "This is a sample project description.",
  },
  {
    image: "/projects/sample-portfolio.jpg",
    title: "Sample Project",
    description: "This is a sample project description.",
  },
  {
    image: "/projects/sample-portfolio.jpg",
    title: "Sample Project",
    description: "This is a sample project description.",
  },
];

export default function Portfolio() {
  return (
    <motion.main
      className="min-h-screen bg-black text-white p-6"
      initial={{ opacity: 0, backgroundColor: "rgba(0,0,0,1)" }}
      animate={{ opacity: 1, backgroundColor: "rgba(0,0,0,1)" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 w-full z-20 flex justify-center gap-10 py-6 text-white text-sm uppercase tracking-wide">
        <Link href="/" className="hover:opacity-70 transition">Home</Link>
        <Link href="/portfolio" className="hover:opacity-70 transition">Portafolio</Link>
        <Link href="/contact" className="hover:opacity-70 transition">Contact Us</Link>
      </nav>

      <div className="mt-32 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Our Portfolio</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <div key={idx} className="relative w-full h-64 overflow-hidden rounded-lg group">
              <img src={proj.image} alt={proj.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-4">
                <h3 className="text-xl font-bold">{proj.title}</h3>
                <p className="text-sm mt-2">{proj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.main>
  );
}