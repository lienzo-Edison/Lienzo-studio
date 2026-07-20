"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function ResetPasswordPage() {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const password = String(formData.get("password") ?? "");
    const confirmPassword = String(formData.get("confirmPassword") ?? "");

    if (password !== confirmPassword) {
      setMessage("The passwords do not match.");
      return;
    }

    setIsSubmitting(true);
    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setMessage("This reset link is no longer valid. Please request a new one.");
      setIsSubmitting(false);
      return;
    }

    router.replace("/portal");
    router.refresh();
  }

  return (
    <main className="mx-auto min-h-screen max-w-xl px-5 pb-20 pt-32 sm:px-8">
      <section className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-[0_25px_80px_-40px_rgba(0,0,0,0.45)] dark:border-white/10 dark:bg-white/[0.05] sm:p-9">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a61b00] dark:text-[#ff8f7a]">
          Lienzo client portal
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl">
          Choose a new password
        </h1>
        <p className="mt-4 text-sm leading-6 text-black/60 dark:text-white/60">
          Create a new password for your portal account, then continue to your dashboard.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <label className="grid gap-2 text-sm font-semibold">
            New password
            <input
              name="password"
              type="password"
              required
              minLength={6}
              autoComplete="new-password"
              className="rounded-xl border border-black/15 bg-transparent px-4 py-3 outline-none transition focus:border-[#a61b00] dark:border-white/20 dark:focus:border-[#ff8f7a]"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold">
            Confirm new password
            <input
              name="confirmPassword"
              type="password"
              required
              minLength={6}
              autoComplete="new-password"
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
            {isSubmitting ? "Updating…" : "Update password"}
          </button>
        </form>
      </section>
    </main>
  );
}
