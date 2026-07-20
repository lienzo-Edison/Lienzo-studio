"use client";

import { createClient } from "@/lib/supabase/client";

export default function PortalSignOut() {
  return (
    <button
      type="button"
      onClick={async () => {
        const supabase = createClient();
        await supabase.auth.signOut();
        window.location.assign("/portal/login");
      }}
      className="rounded-full border border-black/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] transition hover:border-[#a61b00] hover:text-[#a61b00] dark:border-white/20 dark:hover:border-[#ff8f7a] dark:hover:text-[#ff8f7a]"
    >
      Sign out
    </button>
  );
}
