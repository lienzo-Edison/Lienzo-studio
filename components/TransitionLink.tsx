"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import type { ComponentProps } from "react";
import { usePageTransition } from "@/components/PageTransitionProvider";

type TransitionLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

export default function TransitionLink({
  href,
  onClick,
  target,
  rel,
  ...props
}: TransitionLinkProps) {
  const { navigate } = usePageTransition();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented) {
      return;
    }

    const isModifiedClick =
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;

    const shouldBypassTransition =
      isModifiedClick || target === "_blank" || rel?.includes("external");

    if (shouldBypassTransition) {
      return;
    }

    event.preventDefault();
    navigate(href);
  };

  return <Link href={href} onClick={handleClick} target={target} rel={rel} {...props} />;
}
