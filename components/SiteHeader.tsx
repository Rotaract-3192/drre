import Image from "next/image";

export default function SiteHeader() {
  return (
    <header className="w-full border-b border-[var(--line)]/60">
      <div className="mx-auto flex w-[min(1100px,calc(100%-1.5rem))] items-center justify-between gap-3 py-4 sm:py-5">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/logo.png"
            alt="Rotaract District 3192"
            width={48}
            height={48}
            className="h-11 w-11 drop-shadow-[0_0_18px_rgba(124,58,237,0.45)] sm:h-12 sm:w-12"
            priority
          />
          <div className="flex flex-col leading-tight">
            <span className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--muted)] sm:text-[0.7rem]">
              Rotaract District 3192
            </span>
            <span className="font-[family-name:var(--font-bebas)] text-xl tracking-[0.08em] sm:text-2xl">
              Nimma DRRE
            </span>
          </div>
        </div>
        <nav className="flex items-center gap-2 sm:gap-3">
          <a
            href="#intro"
            className="hidden rounded-sm px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[var(--muted)] transition hover:text-white sm:inline-block"
          >
            Meet DRRE
          </a>
          <a
            href="#nominations"
            className="rounded-sm border border-[rgba(245,197,24,0.45)] bg-[rgba(245,197,24,0.08)] px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--gold)] transition hover:bg-[rgba(245,197,24,0.16)] sm:px-4 sm:text-[0.7rem]"
          >
            Nominate
          </a>
        </nav>
      </div>
    </header>
  );
}
