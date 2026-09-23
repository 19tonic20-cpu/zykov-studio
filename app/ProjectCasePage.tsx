import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, type Locale, type Project } from "./site-data";

export default function ProjectCasePage({
  slug,
  locale,
}: {
  slug: string;
  locale: Locale;
}) {
  const project = projects[slug];

  if (!project) {
    notFound();
  }

  const copy = project.copy[locale];
  const prefix = locale === "ru" ? "/ru" : "";
  const oppositePrefix = locale === "ru" ? "" : "/ru";
  const caseRows =
    locale === "ru" && project.ruCaseRows
      ? project.ruCaseRows
      : project.caseRows;

  const nextProject = projects[project.nextProject.slug];

  const labels =
    locale === "ru"
      ? {
          back: "← Назад к работам",
          next: "Следующий проект",
          view: "Смотреть проект →",
          haveProject: "Есть проект?",
          worldwide: "По всему миру",
          talk: "Обсудить →",
          opposite: "EN",
        }
      : {
          back: "← Back to work",
          next: "Next Project",
          view: "View project →",
          haveProject: "Have a project?",
          worldwide: "Worldwide",
          talk: "Let's talk →",
          opposite: "RU",
        };

  return (
    <main className="min-h-screen bg-[#f3f1eb] text-[#111111]">
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-black/10 bg-[#f3f1eb]/90 px-6 py-5 backdrop-blur-md md:px-10">
        <Link
          href={prefix || "/"}
          className="text-sm font-semibold tracking-[-0.02em] transition-opacity hover:opacity-50"
        >
          ZYKOV
        </Link>

        <div className="flex items-center gap-4 text-sm md:gap-5">
          <Link
            href={`${oppositePrefix}/work/${slug}`}
            className="transition-opacity hover:opacity-50"
          >
            {labels.opposite}
          </Link>

          <Link
            href={`${prefix}/#work`}
            className="transition-opacity hover:opacity-50"
          >
            {labels.back}
          </Link>
        </div>
      </header>

      <section className="px-6 pb-12 pt-12 md:px-10 md:pb-20 md:pt-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="mb-6 text-sm uppercase tracking-[0.08em] opacity-60">
              {copy.category}
            </p>

            <h1 className="text-[13vw] font-medium leading-[0.82] tracking-[-0.07em] md:text-[8vw]">
              {project.title}
            </h1>
          </div>

          <div className="flex flex-col justify-end md:col-span-4">
            <p className="max-w-md text-base leading-relaxed">
              {copy.description}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-black/20 pt-4 text-xs leading-relaxed md:mt-12 md:text-sm">
          <span>{copy.projectType}</span>
          <span className="opacity-30">·</span>
          <span>{copy.role}</span>
          <span className="opacity-30">·</span>
          <span>{copy.projectStatus}</span>
          <span className="opacity-30">·</span>
          <span>{project.year}</span>

          {project.liveUrl && copy.liveLabel && (
            <>
              <span className="opacity-30">·</span>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 transition-opacity hover:opacity-50"
              >
                {copy.liveLabel}
              </a>
            </>
          )}
        </div>
      </section>

      <section
        style={{
          backgroundColor: project.caseBackground ?? "#f3f1eb",
        }}
        className="px-6 pb-20 md:px-10 md:pb-28"
      >
        <div className="flex flex-col gap-0">
          {caseRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={
                row.length > 1
                  ? "grid gap-0 md:grid-cols-2"
                  : "block"
              }
            >
              {row.map((image, imageIndex) => {
                const isFirstImage =
                  rowIndex === 0 && imageIndex === 0;

                return (
                  <img
                    key={image}
                    src={image}
                    alt={`${project.title} case study ${
                      rowIndex + imageIndex + 1
                    }`}
                    loading={isFirstImage ? "eager" : "lazy"}
                    decoding="async"
                    className="block h-auto w-full"
                  />
                );
              })}
            </div>
          ))}
        </div>
      </section>

      {copy.summaryItems && (
        <ProjectSummary
          project={project}
          locale={locale}
        />
      )}

      <NextProject
        title={nextProject.title}
        slug={project.nextProject.slug}
        image={nextProject.image}
        number={project.nextProject.number}
        locale={locale}
        label={labels.next}
        viewLabel={labels.view}
      />

      <ProjectCTA
        haveProject={labels.haveProject}
        worldwide={labels.worldwide}
        talk={labels.talk}
      />
    </main>
  );
}

function ProjectSummary({
  project,
  locale,
}: {
  project: Project;
  locale: Locale;
}) {
  const copy = project.copy[locale];

  return (
    <section className="border-t border-black/20 px-6 py-16 md:px-10 md:py-24">
      <div className="grid gap-12 md:grid-cols-12">
        <p className="text-sm uppercase tracking-[0.08em] md:col-span-4">
          {copy.summaryLabel}
        </p>

        <div className="md:col-span-8">
          {copy.summaryTitle && (
            <h2 className="max-w-4xl whitespace-pre-line text-4xl leading-[0.95] tracking-[-0.05em] md:text-6xl">
              {copy.summaryTitle}
            </h2>
          )}

          <div className="mt-14 border-t border-black/20">
            {copy.summaryItems?.map(([label, value]) => (
              <div
                key={`${label}-${value}`}
                className="flex items-end justify-between gap-8 border-b border-black/20 py-5"
              >
                <span className="text-sm opacity-50">
                  {label}
                </span>

                <span className="text-right text-xl tracking-[-0.03em] md:text-2xl">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function NextProject({
  title,
  slug,
  image,
  number,
  locale,
  label,
  viewLabel,
}: {
  title: string;
  slug: string;
  image: string;
  number: string;
  locale: Locale;
  label: string;
  viewLabel: string;
}) {
  const prefix = locale === "ru" ? "/ru" : "";

  return (
    <section className="border-t border-black/20 px-6 py-16 md:px-10 md:py-24">
      <div className="mb-10 flex items-end justify-between">
        <p className="text-sm uppercase tracking-[0.08em]">
          {label}
        </p>

        <span className="text-sm opacity-50">
          {number}
        </span>
      </div>

      <Link
        href={`${prefix}/work/${slug}`}
        className="group block"
      >
        <div className="relative mb-4 aspect-[16/9] overflow-hidden bg-black/5">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 768px) calc(100vw - 80px), calc(100vw - 48px)"
            quality={80}
            className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:brightness-[0.94]"
          />
        </div>

        <div className="flex items-center justify-between border-t border-black/20 pt-4">
          <h2 className="text-3xl tracking-[-0.04em] transition-transform duration-300 group-hover:translate-x-1 md:text-5xl">
            {title}
          </h2>

          <span className="text-sm">
            {viewLabel}
          </span>
        </div>
      </Link>
    </section>
  );
}

function ProjectCTA({
  haveProject,
  worldwide,
  talk,
}: {
  haveProject: string;
  worldwide: string;
  talk: string;
}) {
  return (
    <section className="bg-[#111111] px-6 py-16 text-[#f3f1eb] md:px-10 md:py-24">
      <div className="flex min-h-[45vh] flex-col justify-between">
        <div className="flex items-center justify-between">
          <p className="text-sm uppercase tracking-[0.08em] opacity-60">
            {haveProject}
          </p>

          <p className="text-sm opacity-40">
            {worldwide}
          </p>
        </div>

        <a
          href="mailto:hello@zykovstudio.com"
          className="mt-20 block text-[12vw] font-medium leading-[0.85] tracking-[-0.07em] transition-opacity hover:opacity-60 md:text-[8vw]"
        >
          {talk}
        </a>
      </div>
    </section>
  );
}
