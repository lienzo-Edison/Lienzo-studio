"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [revealed, setRevealed] = useState(false);

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

      <div className="mt-32 text-center max-w-xl">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-white/80 mb-8">
          If you're interested in working with us or have any questions,
          feel free to reach out via email.
        </p>

        <div className="bg-white/10 border border-white/20 rounded-lg p-6">
          {!revealed ? (
            <>
              <p className="mb-4 text-white/70">
                Click below to reveal our contact email.
              </p>
              <button
                onClick={() => setRevealed(true)}
                className="bg-white/10 hover:bg-white/20 border border-white/20 rounded px-6 py-3 transition"
              >
                Reveal Email
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