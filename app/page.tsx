"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
export default function Home() {
  const [fadeIn, setFadeIn] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(false), 600);
    return () => clearTimeout(timer);
  }, []);
  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 w-full z-20 flex justify-center gap-10 py-6 text-white text-sm uppercase tracking-wide">
        <Link href="/" className="hover:opacity-70 transition">
          Home
        </Link>
        <Link href="/portfolio" className="hover:opacity-70 transition">
          Portafolio
        </Link>
        <Link href="/contact" className="hover:opacity-70 transition">
          Contact Us
        </Link>
      </nav>
      {/* Background Video */}
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
      <div
        className={`absolute inset-0 bg-black z-30 transition-opacity duration-700 ${
          fadeIn ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-6xl font-bold tracking-wide">
          LIENZO STUDIO
        </h1>
      </div>
    </main>
  );
}