"use client";
import Link from "next/link";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-black text-white p-6">
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
      <h1 className="text-4xl font-bold mb-8 mt-24">Contact Us</h1>
      <form
        className="w-full max-w-md flex flex-col gap-4"
        onSubmit={async (e: FormEvent) => {
          e.preventDefault();
          setStatus("Sending...");
          try {
            const res = await fetch("/api/contact", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ name, email, message }),
            });
            const data = await res.json();
            if (data.success) {
              setStatus("Message sent!");
              setName("");
              setEmail("");
              setMessage("");
            } else {
              setStatus(`Error: ${data.error}`);
            }
          } catch (err) {
            setStatus("Error sending message.");
          }
        }}
      >
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 rounded bg-white/10 border border-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 rounded bg-white/10 border border-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-3 rounded bg-white/10 border border-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white h-32 resize-none"
        />
        <button
          type="submit"
          className="bg-white/10 hover:bg-white/20 border border-white/20 rounded p-3 mt-2 transition"
        >
          Submit
        </button>
        {status && <p className="mt-2 text-white">{status}</p>}
      </form>
    </main>
  );
}