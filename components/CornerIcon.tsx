"use client";

import Image from "next/image";

export default function CornerIcon() {
  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center md:bottom-6 md:right-6 md:h-14 md:w-14">
      <Image
        src="/android-chrome-192x192.png"
        alt="Lienzo Studio mark"
        width={96}
        height={96}
        className="h-full w-full opacity-70 transition dark:invert dark:brightness-110 dark:opacity-80"
      />
    </div>
  );
}
