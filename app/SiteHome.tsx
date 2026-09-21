import Image from "next/image";
import Link from "next/link";
import HeroReel from "./HeroReel";
import {
  featuredSlugs,
  homeCopy,
  moreSlugs,
  projects,
  type Locale,
} from "./site-data";

export default function SiteHome({ locale }: { locale: Locale }) {
  const copy = homeCopy[locale];
  const prefix = locale === "ru" ? "/ru" : "";
  const oppositeHref = locale === "ru" ? "/" : "/ru";
  const oppositeLabel = locale === "ru" ? "EN" : "RU";

  return (
    <main className="min-h-screen bg-[#f3f1eb] text-[#111111]">
      {/* HEADER */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-black/10 bg-[#f3f1eb]/90 px-6 py-5 backdrop-blur-md md:px-10">
        <div className="text-sm font-semibold tracking-[-0.02em]">
          ZYKOV
        </div>

        <div className="flex items-center gap-4 md:gap-5">
          <nav className="flex gap-4 text-xs sm:text-sm md:gap-5">
            <a
              href="#work"
              className="transition-opacity hover:opacity-50"
            >
              {copy.nav.work}
            </a>

            <a
              href="#services"
              className="hidden transition-opacity hover:opacity-50 sm:block"
            >
              {copy.nav.services}
            </a>

            <a
              href="#about"
              className="transition-opacity hover:opacity-50"
            >
              {copy.nav.about}
            </a>

            <a
              href="#contact"
              className="transition-opacity hover:opacity-50"
            >
              {copy.nav.contact}
            </a>
          </nav>

          <Link
            href={oppositeHref}
            className="border-l border-black/20 pl-4 text-xs transition-opacity hover:opacity-50 sm:text-sm"
          >
            {oppositeLabel}
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="flex min-h-[calc(100vh-64px)] flex-col justify-between px-6 pb-6 pt-10 md:px-10 md:pb-10 md:pt-14">
        <div className="grid items-start gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <p className="hero-kicker mb-6 text-sm uppercase tracking-[0.08em]">
              {copy.kicker}
            </p>

            <h1 className="hero-title max-w-[980px] text-[12vw] font-medium leading-[0.84] tracking-[-0.07em] md:text-[6.4vw]">
              {copy.headline}
            </h1>
          </div>

          <HeroReel locale={locale} />
        </div>

        <div className="hero-meta mt-16 grid gap-8 border-t border-black/20 pt-5 md:mt-10 md:grid-cols-3">
          <p className="max-w-md text-base leading-snug">
            {copy.intro}
          </p>

          <div className="text-sm leading-relaxed md:col-start-3">
            <p>{copy.worldwide}</p>

            <a
              href="mailto:hello@zykovstudio.com"
              className="underline underline-offset-4 transition-opacity hover:opacity-50"
            >
              {copy.startProject}
            </a>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section
        id="work"
        className="border-t border-black/20 px-6 py-10 md:px-10 md:py-14"
      >
        <div className="mb-14 flex items-end justify-between md:mb-20">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.1em] opacity-50">
              01 — 04
            </p>

            <h2 className="text-sm uppercase tracking-[0.08em]">
              {copy.selectedWork}
            </h2>
          </div>

          <p className="text-sm">2025—2026</p>
        </div>

        <div className="grid grid-cols-1 gap-y-16 md:grid-cols-12 md:gap-x-5 md:gap-y-16">
          {featuredSlugs.map((slug, index) => {
            const project = projects[slug];
            const projectCopy = project.copy[locale];

            const wrapperClass =
              index === 0
                ? "md:col-span-7"
                : index === 1
                  ? "md:col-span-5 md:pt-10"
                  : index === 2
                    ? "md:col-span-5 md:-mt-52"
                    : "md:col-span-7 md:-mt-8";

        const imageClass =
  slug === "timremont"
    ? "aspect-[4/3] md:aspect-[4/5]"
    : "aspect-[4/3] md:aspect-[16/10]";
            return (
              <Link
                key={project.title}
                href={`${prefix}/work/${slug}`}
                className={`group block cursor-pointer ${wrapperClass}`}
              >
                <div className="mb-4 flex items-center justify-between border-t border-black/20 pt-3 text-xs">
                  <span className="font-medium">
                    {String(index + 1).padStart(2, "0")} / 04
                  </span>

                  <span className="text-right opacity-40">
                    {projectCopy.category}
                  </span>
                </div>

                <div
                  className={`${imageClass} relative w-full overflow-hidden bg-black/5`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes={
                      index === 0 || index === 3
                        ? "(min-width: 768px) 58vw, 100vw"
                        : "(min-width: 768px) 42vw, 100vw"
                    }
                    quality={80}
                    className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.025] group-hover:brightness-[0.92]"
                  />
                </div>

                <div className="flex items-end justify-between gap-6 pt-4">
                  <h3 className="text-3xl leading-none tracking-[-0.05em] transition-transform duration-300 group-hover:translate-x-1 md:text-4xl">
                    {project.title}
                  </h3>

                  <span className="shrink-0 text-xs opacity-0 transition-all duration-300 group-hover:opacity-60">
                    {locale === "ru"
                      ? "Смотреть проект →"
                      : "View project →"}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* MORE WORK */}
      <section className="border-t border-black/20 px-6 py-10 md:px-10 md:py-14">
        <div className="mb-10 flex items-end justify-between">
          <p className="text-sm uppercase tracking-[0.08em]">
            {copy.moreWork}
          </p>

          <p className="text-sm opacity-50">
            {copy.archive}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {moreSlugs.map((slug) => {
            const project = projects[slug];
            const projectCopy = project.copy[locale];

            return (
              <Link
                key={project.title}
                href={`${prefix}/work/${slug}`}
                className="group block cursor-pointer"
              >
                <div className="relative mb-4 aspect-[16/9] overflow-hidden bg-black/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    quality={80}
                    className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.035] group-hover:brightness-[0.92]"
                  />
                </div>

                <div className="flex items-start justify-between gap-5 border-t border-black/20 pt-3">
                  <h3 className="text-xl tracking-[-0.03em] transition-transform duration-300 group-hover:translate-x-1">
                    {project.title}
                  </h3>

                  <p className="text-right text-xs leading-snug opacity-60">
                    {projectCopy.category}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="border-t border-black/20 px-6 py-16 md:px-10 md:py-24"
      >
        <div className="mb-20 grid gap-8 md:grid-cols-2">
          <p className="text-sm uppercase tracking-[0.08em]">
            {copy.services}
          </p>

          <h2 className="max-w-3xl text-4xl leading-[0.95] tracking-[-0.05em] md:text-6xl">
            {copy.servicesHeadline}
          </h2>
        </div>

        <div className="border-t border-black/20">
          {copy.serviceRows.map(
            ([number, title, text, label]) => (
              <div
                key={number}
                className="grid gap-6 border-b border-black/20 py-7 md:grid-cols-12"
              >
                <div className="text-sm opacity-50 md:col-span-1">
                  {number}
                </div>

                <h3 className="text-3xl tracking-[-0.04em] md:col-span-4 md:text-4xl">
                  {title}
                </h3>

                <p className="max-w-xl text-base leading-relaxed opacity-70 md:col-span-5">
                  {text}
                </p>

                <div className="text-sm md:col-span-2 md:text-right">
                  {label}
                </div>
              </div>
            ),
          )}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-black/20 px-6 py-20 md:px-10 md:py-28"
      >
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-sm uppercase tracking-[0.08em]">
              {copy.about}
            </p>
          </div>

          <div className="md:col-span-8">
            <h2 className="max-w-4xl text-4xl leading-[0.98] tracking-[-0.05em] md:text-6xl">
              {copy.aboutHeadline}
            </h2>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="max-w-lg text-base leading-relaxed">
                {copy.aboutBody1}
              </p>

              <p className="max-w-lg text-base leading-relaxed opacity-65">
                {copy.aboutBody2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-black/20 bg-[#111111] px-6 py-10 text-[#f3f1eb] md:px-10 md:py-12"
      >
        <div className="flex min-h-[65vh] flex-col justify-between">
          <div className="flex items-start justify-between">
            <p className="text-sm uppercase tracking-[0.08em]">
              {copy.contactLabel}
            </p>

            <p className="text-sm opacity-60">
              {copy.worldwide}
            </p>
          </div>

          <div className="py-20">
            <h2 className="max-w-6xl text-[12vw] font-medium leading-[0.82] tracking-[-0.07em] md:text-[8vw]">
              {copy.contactHeadline}
            </h2>
          </div>

         <div className="grid gap-8 border-t border-white/20 pt-5 md:grid-cols-2">
  <div>
    <p className="mb-1 text-xs uppercase tracking-[0.08em] opacity-50">
      {copy.email}
    </p>

    <a
      href="mailto:hello@zykovstudio.com"
      className="text-base underline underline-offset-4 transition-opacity hover:opacity-50"
    >
      hello@zykovstudio.com
    </a>
  </div>

  <div className="md:text-right">
    <p className="mb-1 text-xs uppercase tracking-[0.08em] opacity-50">
      ZYKOV
    </p>

    <p className="text-base">
      {copy.studio}
    </p>
  </div>
</div>
        </div>
      </section>
    </main>
  );
}