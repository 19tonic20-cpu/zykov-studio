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
  const projectMail =
    locale === "ru"
      ? "mailto:hello@zykovstudio.com?subject=%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82"
      : "mailto:hello@zykovstudio.com?subject=Project%20inquiry";

  return (
    <main className="min-h-screen bg-[#f3f1eb] text-[#111111]">
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-black/10 bg-[#f3f1eb]/90 px-6 py-5 backdrop-blur-md md:px-10">
        <div className="text-sm font-semibold tracking-[-0.02em]">
          ZYKOV
        </div>

        <div className="flex items-center gap-4 md:gap-5">
          <nav className="flex gap-4 text-xs sm:text-sm md:gap-5">
            <a href="#work" className="transition-opacity hover:opacity-50">
              {copy.nav.work}
            </a>

            <a
              href="#services"
              className="hidden transition-opacity hover:opacity-50 sm:block"
            >
              {copy.nav.services}
            </a>

            <a href="#about" className="transition-opacity hover:opacity-50">
              {copy.nav.about}
            </a>

            <a href="#contact" className="transition-opacity hover:opacity-50">
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
      <section className="px-6 pb-12 pt-10 md:px-10 md:pb-16 md:pt-14">
        <div className="grid items-start gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <p className="hero-kicker mb-6 text-sm uppercase tracking-[0.08em]">
              {copy.kicker}
            </p>

            <h1 className="hero-title max-w-[980px] text-[12vw] font-medium leading-[0.86] tracking-[-0.045em] md:text-[6.4vw]">
              {copy.headline}
            </h1>

            <p className="mt-8 max-w-xl text-base leading-relaxed md:mt-10 md:text-lg">
              {copy.intro}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <a
                href={projectMail}
                className="underline underline-offset-4 transition-opacity hover:opacity-50"
              >
                {copy.startProject}
              </a>

              <span className="opacity-45">{copy.worldwide}</span>
            </div>
          </div>

          <HeroReel locale={locale} />
        </div>
      </section>

      {/* SELECTED WORK */}
      <section
        id="work"
        className="border-t border-black/20 px-6 py-10 md:px-10 md:py-14"
      >
        <div className="mb-14 flex items-end justify-between gap-8 md:mb-20">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.1em] opacity-50">
              01 — 04
            </p>

            <h2 className="text-sm uppercase tracking-[0.08em]">
              {copy.selectedWork}
            </h2>

            <p className="mt-3 max-w-md text-sm leading-relaxed opacity-60">
              {copy.selectedWorkIntro}
            </p>
          </div>

          <p className="shrink-0 text-sm">2025—2026</p>
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
                  <h3 className="text-3xl leading-none tracking-[-0.04em] transition-transform duration-300 group-hover:translate-x-1 md:text-4xl">
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

          <p className="text-sm opacity-50">{copy.archive}</p>
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
        <div className="grid gap-12 md:grid-cols-12">
          <p className="text-sm uppercase tracking-[0.08em] md:col-span-4">
            {copy.services}
          </p>

          <div className="border-t border-black/20 md:col-span-8">
            {copy.serviceRows.map(([number, title]) => (
              <div
                key={number}
                className="flex items-center justify-between gap-8 border-b border-black/20 py-6 md:py-7"
              >
                <span className="text-sm opacity-40">{number}</span>

                <h3 className="text-right text-3xl tracking-[-0.035em] md:text-5xl">
                  {title}
                </h3>
              </div>
            ))}
          </div>
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
            <h2 className="max-w-4xl text-4xl leading-[0.98] tracking-[-0.04em] md:text-6xl">
              {copy.aboutHeadline}
            </h2>

            <div className="mt-12 grid gap-12 border-t border-black/20 pt-6 md:grid-cols-2">
              <p className="max-w-lg text-base leading-relaxed">
                {copy.aboutBody1}
              </p>

              <div>
                <h3 className="mb-4 text-sm uppercase tracking-[0.08em] opacity-50">
                  {copy.aboutProcessHeadline}
                </h3>

                <p className="max-w-lg text-base leading-relaxed">
                  {copy.aboutBody2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-black/20 bg-[#111111] px-6 py-12 text-[#f3f1eb] md:px-10 md:py-16"
      >
        <div className="flex min-h-[58vh] flex-col justify-between">
          <div className="flex items-start justify-between">
            <p className="text-sm uppercase tracking-[0.08em]">
              {copy.contactLabel}
            </p>

            <p className="text-sm opacity-50">{copy.worldwide}</p>
          </div>

          <div className="py-14 md:py-20">
            <h2 className="max-w-6xl text-[11vw] font-medium leading-[0.86] tracking-[-0.05em] md:text-[7vw]">
              {copy.contactHeadline}
            </h2>
          </div>

          <div className="grid gap-10 border-t border-white/20 pt-6 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="max-w-lg text-base leading-relaxed">
                {copy.contactBody}
              </p>

              <p className="mt-4 max-w-lg text-sm leading-relaxed opacity-55">
                {copy.contactResponse}
              </p>
            </div>

            <div className="md:col-span-7 md:text-right">
              <a
                href={projectMail}
                className="inline-block text-3xl tracking-[-0.04em] underline decoration-1 underline-offset-8 transition-opacity hover:opacity-60 md:text-5xl"
              >
                {copy.startProject}
              </a>

              <p className="mt-5 text-sm opacity-50">
                hello@zykovstudio.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
