"use client";

const FORM_SRC =
  "https://docs.google.com/forms/d/e/1FAIpQLSe8pH35-zrMPhHUHNT334troZfEkPApvx945Y2fRhETwdE9xg/viewform?embedded=true";

/**
 * Viewport-sized Google Form embed.
 * Avoids huge fixed heights (blank white space) while keeping Next/Submit
 * reachable via scroll inside the frame on mobile + desktop.
 */
export default function NominationForm() {
  return (
    <div className="form-shell rounded-2xl p-2 sm:p-4">
      <div className="form-frame relative w-full overflow-hidden rounded-xl bg-white shadow-inner">
        <iframe
          title="Legacy Executive Council Nomination Form"
          src={FORM_SRC}
          className="block w-full border-0 bg-white"
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}
