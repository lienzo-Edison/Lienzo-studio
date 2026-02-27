"use client";
import Image from "next/image";
import TransitionLink from "@/components/TransitionLink";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const teamMembers = Array.from({ length: 4 }).map((_, i) => ({
  name: `Team Member ${i + 1}`,
  role: "Role Placeholder",
  bio: "Short profile description placeholder. Replace this with each member's bio.",
}));

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const sectionViewport = { once: true, amount: 0.2 };

export default function Home() {
  const [fadeIn, setFadeIn] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(false), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (videoRef.current) {
        videoRef.current.style.transform = `translateY(${offset * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.main
      className="relative w-full h-full overflow-x-hidden bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 w-full z-20 flex justify-center gap-10 py-6 text-white text-sm uppercase tracking-wide">
        <TransitionLink href="/" className="hover:opacity-70 transition">Home</TransitionLink>
        <TransitionLink href="/portfolio" className="hover:opacity-70 transition">Portafolio</TransitionLink>
        <TransitionLink href="/contact" className="hover:opacity-70 transition">Contact Us</TransitionLink>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>

        {/* Replay Button */}
        <button
          onClick={() => {
            if (videoRef.current) {
              videoRef.current.currentTime = 0;
              videoRef.current.play();
            }
          }}
          className="absolute bottom-6 left-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 opacity-80 hover:opacity-100 hover:bg-white/20 transition-all duration-300"
          aria-label="Replay background video"
        >
          <Image src="/icon_replay.svg" alt="Replay" width={24} height={24} className="w-6 h-6" />
        </button>

        {/* Initial Fade From Black */}
        <div className={`absolute inset-0 bg-black z-30 transition-opacity duration-700 ${fadeIn ? "opacity-100" : "opacity-0 pointer-events-none"}`}></div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full w-full text-center">
          <h1 className="text-white text-6xl font-bold tracking-wide mx-auto">LIENZO STUDIO</h1>
        </div>
      </section>

      {/* About Section */}
      <section className="relative" style={{ backgroundColor: '#eae5d9' }}>
        <div className="max-w-4xl mx-auto text-center py-32 px-6 text-black">
          <motion.article
            className="space-y-6"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold">Who We Are</h2>
            <p className="text-lg text-black/80">
              Lienzo Studio is a digital design and media agency specializing in crafting modern, engaging websites and digital experiences that elevate brands.
            </p>
          </motion.article>

          <motion.article
            className="space-y-6 mt-16"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          >
            <h2 className="text-4xl font-bold">What We Do</h2>
            <p className="text-lg text-black/80">
              We provide end-to-end solutions including branding, web design, content creation, and social media strategy to help businesses connect with their audience effectively.
            </p>
          </motion.article>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative bg-black text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold">Meet The Team</h2>
            <p className="mt-4 text-white/70">
              Placeholder cards for the four current team members.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <motion.article
                key={member.name}
                className="rounded-2xl border border-white/15 bg-white/5 p-6 text-center"
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={sectionViewport}
                transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.08 }}
              >
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-white/25 bg-white/10 text-[10px] uppercase tracking-[0.2em] text-white/60">
                  Photo
                </div>
                <h3 className="mt-5 text-lg font-semibold">{member.name}</h3>
                <p className="mt-1 text-sm text-white/55">{member.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-white/70">{member.bio}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  );
}
