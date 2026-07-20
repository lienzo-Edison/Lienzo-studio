"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function PortalAuthForm() {
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");
    const fullName = String(formData.get("fullName") ?? "").trim();
    const supabase = createClient();

    if (isCreatingAccount) {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: fullName },
          emailRedirectTo: `${window.location.origin}/auth/confirm`,
        },
      });

      if (error) {
        setMessage(error.message);
      } else if (data.session) {
        router.replace("/portal");
        router.refresh();
      } else {
        setMessage("Check your inbox to confirm your account, then sign in.");
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });

      if (error) {
        setMessage("We could not sign you in with those details.");
      } else {
        router.replace("/portal");
        router.refresh();
      }
    }

    setIsSubmitting(false);
  }

  return (
    <div className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-[0_25px_80px_-40px_rgba(0,0,0,0.45)] dark:border-white/10 dark:bg-white/[0.05] sm:p-9">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a61b00] dark:text-[#ff8f7a]">
        Lienzo client portal
      </p>
      <h1 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl">
        {isCreatingAccount ? "Create account" : "Welcome back"}
      </h1>
      <p className="mt-4 max-w-md text-sm leading-6 text-black/60 dark:text-white/60">
        {isCreatingAccount
          ? "Create your account to explore Lienzo services and keep your future work in one place."
          : "Sign in to see your project details, billing access, and Lienzo contact options."}
      </p>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
        {isCreatingAccount && (
          <label className="grid gap-2 text-sm font-semibold">
            Your name
            <input
              name="fullName"
              required
              autoComplete="name"
              className="rounded-xl border border-black/15 bg-transparent px-4 py-3 outline-none transition focus:border-[#a61b00] dark:border-white/20 dark:focus:border-[#ff8f7a]"
            />
          </label>
        )}
        <label className="grid gap-2 text-sm font-semibold">
          Email address
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="rounded-xl border border-black/15 bg-transparent px-4 py-3 outline-none transition focus:border-[#a61b00] dark:border-white/20 dark:focus:border-[#ff8f7a]"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Password
          <input
            name="password"
            type="password"
            required
            minLength={6}
            autoComplete={isCreatingAccount ? "new-password" : "current-password"}
            className="rounded-xl border border-black/15 bg-transparent px-4 py-3 outline-none transition focus:border-[#a61b00] dark:border-white/20 dark:focus:border-[#ff8f7a]"
          />
        </label>
        {message && (
          <p className="rounded-xl bg-[#a61b00]/10 px-4 py-3 text-sm text-[#781300] dark:bg-[#ff8f7a]/15 dark:text-[#ffb9ad]">
            {message}
          </p>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 rounded-full bg-black px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#a61b00] disabled:cursor-wait disabled:opacity-60 dark:bg-[#f6f1e7] dark:text-black dark:hover:bg-[#ff8f7a]"
        >
          {isSubmitting
            ? "Working…"
            : isCreatingAccount
              ? "Create account"
              : "Sign in"}
        </button>
      </form>

      <button
        type="button"
        onClick={() => {
          setIsCreatingAccount((value) => !value);
          setMessage("");
        }}
        className="mt-6 text-sm font-semibold underline underline-offset-4"
      >
        {isCreatingAccount
          ? "Already have an account? Sign in"
          : "New here? Create an account"}
      </button>
    </div>
  );
}
