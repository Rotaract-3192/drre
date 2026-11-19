import Image from "next/image";
import SignalCrest from "@/components/SignalCrest";
import SiteHeader from "@/components/SiteHeader";

const FORM_SRC =
  "https://docs.google.com/forms/d/e/1FAIpQLSe8pH35-zrMPhHUHNT334troZfEkPApvx945Y2fRhETwdE9xg/viewform?embedded=true";

export default function Home() {
  return (
    <>
      <div className="signal-bg" aria-hidden="true" />

      <SiteHeader />

      <main className="flex-1">
        {/* HERO — brand + tagline only */}
        <section className="relative overflow-hidden px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-16">
          <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center opacity-70">
            <SignalCrest className="signal-crest h-24 w-48 sm:h-32 sm:w-64" />
          </div>

          <div className="relative mx-auto flex w-[min(920px,100%)] flex-col items-center text-center">
            <p className="animate-rise text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[var(--gold-soft)] sm:text-[0.75rem]">
              District Rotaract Representative Elect · RY 2027–28
            </p>

            <h1 className="animate-rise-delay-1 display-title mt-4 text-[clamp(3.4rem,14vw,7.5rem)] leading-[0.9]">
              NIMMA DRRE
            </h1>

            <div className="animate-rise-delay-2 gold-rule mx-auto mt-5 w-40 sm:w-56" />

            <p className="animate-rise-delay-2 mt-5 max-w-xl text-base font-light leading-relaxed text-[var(--muted)] sm:text-lg">
              From serving a club to shaping a district.
            </p>

            <div className="animate-rise-delay-3 mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
              <a
                href="#nominations"
                className="inline-flex min-h-12 w-full items-center justify-center bg-gradient-to-br from-[var(--gold)] to-[#d4a017] px-7 text-[0.78rem] font-bold uppercase tracking-[0.14em] text-[#1a1000] shadow-[0_10px_30px_rgba(245,197,24,0.2)] transition hover:-translate-y-0.5 sm:w-auto"
              >
                Council Nominations
              </a>
              <a
                href="#intro"
                className="inline-flex min-h-12 w-full items-center justify-center border border-[var(--line)] px-7 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[var(--text)] transition hover:border-[var(--lilac)] sm:w-auto"
              >
                His Journey
              </a>
            </div>
          </div>
        </section>

        {/* INTRO — about-style: copy + portrait, name/designation here */}
        <section
          id="intro"
          className="scroll-mt-20 border-t border-[var(--line)]/50 px-4 py-14 sm:px-6 sm:py-20"
        >
          <div className="mx-auto grid w-[min(1100px,100%)] items-end gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div className="order-2 lg:order-1">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[var(--lilac)]">
                Meet your DRRE
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-bebas)] text-4xl tracking-[0.06em] sm:text-5xl">
                PP Rtr. Rakshith K Shetty
              </h2>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">
                DRRE · RY 2027–28 · Dist. 3192
              </p>

              <div className="mt-6 space-y-4 text-[0.95rem] font-light leading-relaxed text-[var(--muted)] sm:text-base">
                <p>
                  DRR Rakshith’s journey with Rotaract began in 2020 with Rotaract Club of
                  Swarna Bengaluru, where he served as Editor, Public Image Director and
                  Joint Secretary. In RY 2021–22, he stepped into club leadership as
                  Secretary, followed by serving as the 9th Club President in 2022, earning
                  several recognitions along the way. In RY 2023–24, his journey expanded
                  beyond the club through roles as District Chair, Zonal Rotaract
                  Representative and Conference Secretary.
                </p>
                <p>
                  RY 2024–25 strengthened his focus on district administration as District
                  Secretary – Reporting, along with being recognised as an Exceptional
                  District Secretary by Rotaract India MDIO. In RY 2027–28, this journey
                  moves towards a larger responsibility — serving as the District Rotaract
                  Representative, carrying forward everything he has learned to shape and
                  strengthen District 3192.
                </p>
              </div>

              <p className="mt-6 font-[family-name:var(--font-bebas)] text-2xl tracking-[0.08em] text-[var(--lilac)] sm:text-3xl">
                From serving a club to shaping a district.
              </p>
            </div>

            <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
              <div className="relative w-full max-w-[320px] sm:max-w-[380px]">
                <div
                  className="portrait-glow absolute inset-x-0 bottom-0 h-[70%] rounded-full blur-2xl"
                  aria-hidden="true"
                />
                <div className="relative overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[rgba(12,6,20,0.55)] px-2 pt-4 shadow-[0_0_40px_rgba(124,58,237,0.2)] sm:rounded-[2rem] sm:px-3 sm:pt-5">
                  <Image
                    src="/assets/rakshith.png"
                    alt="PP Rtr. Rakshith K Shetty, District Rotaract Representative Elect"
                    width={570}
                    height={1142}
                    className="mx-auto h-auto w-full object-contain object-bottom"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NOMINATIONS — Google Form iframe */}
        <section
          id="nominations"
          className="scroll-mt-20 border-t border-[var(--line)]/50 px-3 py-14 sm:px-6 sm:py-20"
        >
          <div className="mx-auto w-[min(900px,100%)]">
            <div className="mb-8 text-center sm:mb-10">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">
                Legacy Executive Council
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-bebas)] text-4xl tracking-[0.06em] sm:text-5xl">
                Nominations
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm font-light leading-relaxed text-[var(--muted)] sm:text-base">
                Step forward for District Executive Council RY 2027–28. Complete the form
                below — it stays on this page.
              </p>
              <div className="gold-rule mx-auto mt-6 w-28" />
            </div>

            <div className="form-shell overflow-hidden rounded-2xl p-2 sm:p-4">
              <iframe
                title="Legacy Executive Council Nomination Form"
                src={FORM_SRC}
                className="block h-[1800px] w-full rounded-xl bg-white sm:h-[2200px] md:h-[2400px]"
                loading="lazy"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-auto border-t border-[var(--line)]/50 px-4 py-8 sm:px-6">
        <div className="mx-auto flex w-[min(1100px,100%)] flex-col items-center gap-4 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[0.7rem] uppercase tracking-[0.16em] text-[var(--muted)]">
            <span>#Rotaract3192</span>
            <span className="hidden text-[var(--line)] sm:inline">·</span>
            <span>#TeamLegacy</span>
            <span className="hidden text-[var(--line)] sm:inline">·</span>
            <span>#DRREConnect</span>
          </div>
          <p className="text-[0.72rem] text-[var(--muted)]">
            Rotaract District 3192 ·{" "}
            <span className="text-[var(--lilac)]">drre.rotaract3192.org</span>
          </p>
          <p className="text-[0.65rem] uppercase tracking-[0.14em] text-white/35">
            Social links — coming soon
          </p>
        </div>
      </footer>
    </>
  );
}
