"use client";

import { useActionState } from "react";
import {
  sendPasswordReset,
  type PasswordResetState,
} from "@/app/portal/admin/actions";

const initialState: PasswordResetState = { status: "idle", message: "" };

export default function PortalAdminResetButton({ userId }: { userId: string }) {
  const [state, formAction, isPending] = useActionState(
    sendPasswordReset,
    initialState,
  );

  return (
    <form action={formAction} className="flex items-center gap-2">
      <input type="hidden" name="userId" value={userId} />
      <button
        type="submit"
        disabled={isPending}
        className="rounded-full border border-black/15 px-3 py-2 text-xs font-bold uppercase tracking-[0.1em] transition hover:border-[#a61b00] disabled:cursor-wait disabled:opacity-60 dark:border-white/20"
      >
        {isPending ? "Sending…" : "Send reset email"}
      </button>
      {state.status !== "idle" && (
        <span
          className={`text-xs ${
            state.status === "success"
              ? "text-black/55 dark:text-white/55"
              : "text-[#a61b00] dark:text-[#ff8f7a]"
          }`}
        >
          {state.message}
        </span>
      )}
    </form>
  );
}
