"use client";

import { useEffect, useRef } from "react";

const FORM_SRC =
  "https://docs.google.com/forms/d/e/1FAIpQLSe8pH35-zrMPhHUHNT334troZfEkPApvx945Y2fRhETwdE9xg/viewform?embedded=true";

/**
 * Fills its parent and scrolls *inside* the Google Form iframe.
 * Parent must give this component a definite height (flex-1 / fixed).
 *
 * On touch devices we briefly lock document scroll so the gesture goes
 * to the iframe instead of the page.
 */
export default function NominationForm() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const iframe = iframeRef.current;
    if (!wrap || !iframe) return;

    const syncHeight = () => {
      // Exact pixel height — required for iframe document scrolling on iOS
      const h = Math.max(Math.round(wrap.getBoundingClientRect().height), 420);
      iframe.style.height = `${h}px`;
      iframe.setAttribute("height", String(h));
    };

    syncHeight();

    const ro = new ResizeObserver(() => syncHeight());
    ro.observe(wrap);
    window.addEventListener("resize", syncHeight);
    window.visualViewport?.addEventListener("resize", syncHeight);

    const lockPage = () => {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    };
    const unlockPage = () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };

    wrap.addEventListener("touchstart", lockPage, { passive: true });
    wrap.addEventListener("touchend", unlockPage, { passive: true });
    wrap.addEventListener("touchcancel", unlockPage, { passive: true });

    return () => {
      unlockPage();
      ro.disconnect();
      window.removeEventListener("resize", syncHeight);
      window.visualViewport?.removeEventListener("resize", syncHeight);
      wrap.removeEventListener("touchstart", lockPage);
      wrap.removeEventListener("touchend", unlockPage);
      wrap.removeEventListener("touchcancel", unlockPage);
    };
  }, []);

  return (
    <div ref={wrapRef} className="form-embed">
      <iframe
        ref={iframeRef}
        title="Legacy Executive Council Nomination Form"
        src={FORM_SRC}
        className="form-embed-iframe"
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
      >
        Loading…
      </iframe>
    </div>
  );
}
