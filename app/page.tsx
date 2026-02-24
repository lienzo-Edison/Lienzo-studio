"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

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
        <Link href="/" className="hover:opacity-70 transition">Home</Link>
        <Link href="/portfolio" className="hover:opacity-70 transition">Portafolio</Link>
        <Link href="/contact" className="hover:opacity-70 transition">Contact Us</Link>
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
          <img src="/icon_replay.svg" alt="Replay" className="w-6 h-6" />
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
        <div className="max-w-4xl mx-auto text-center space-y-6 py-32 px-6 text-black">
          <h2 className="text-4xl font-bold">Who We Are</h2>
          <p className="text-lg text-black/80">
            Lienzo Studio is a digital design and media agency specializing in crafting modern, engaging websites and digital experiences that elevate brands.
          </p>
          <h2 className="text-4xl font-bold mt-12">What We Do</h2>
          <p className="text-lg text-black/80">
            We provide end-to-end solutions including branding, web design, content creation, and social media strategy to help businesses connect with their audience effectively.
          </p>
        </div>
      </section>
    </motion.main>
  );
}