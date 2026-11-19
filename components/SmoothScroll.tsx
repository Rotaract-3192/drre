"use client";

import { useEffect } from "react";

/** Ensures in-page #anchors scroll smoothly even when CSS scroll-behavior is ignored. */
export default function SmoothScroll() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a[href^='#']");
      if (!(link instanceof HTMLAnchorElement)) return;

      const id = link.getAttribute("href")?.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;

      event.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
