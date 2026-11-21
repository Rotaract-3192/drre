import Image from "next/image";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto w-[min(1100px,calc(100%-1.25rem))] pt-4 sm:pt-5">
        <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-[rgba(5,3,8,0.55)] px-4 py-3 backdrop-blur-xl sm:gap-4 sm:px-6 sm:py-3.5">
          <a href="/" className="group relative flex min-w-0 items-center gap-3 no-underline sm:gap-4">
            <div
              className="pointer-events-none absolute inset-0 rounded-full bg-[rgba(124,58,237,0.18)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden="true"
            />
            {/* Same treatment as rotaract3192.org Navbar: height-driven, natural aspect */}
            <Image
              src="/assets/logo.png"
              alt="Rotaract District 3192"
              width={800}
              height={291}
              className="relative z-10 h-11 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.25)] sm:h-[3.25rem] md:h-16"
              priority
            />
            <span className="relative z-10 hidden h-8 w-px bg-white/15 sm:block" aria-hidden="true" />
            <span className="relative z-10 font-[family-name:var(--font-bebas)] text-lg tracking-[0.1em] text-white sm:text-xl md:text-2xl">
              Nimma DRRE
            </span>
          </a>

          <nav className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href="#intro"
              className="hidden rounded-sm px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[var(--muted)] transition hover:text-white sm:inline-block"
            >
              Meet DRRE
            </a>
            <a
              href="#nominations"
              className="rounded-xl border border-[rgba(245,197,24,0.45)] bg-[rgba(245,197,24,0.08)] px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--gold)] transition hover:bg-[rgba(245,197,24,0.16)] sm:px-4 sm:text-[0.7rem]"
            >
              Nominate
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
