import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, type Locale, type Project } from "./site-data";

export default function ProjectCasePage({ slug, locale }: { slug: string; locale: Locale }) {
  const project = projects[slug];

  if (!project) {
    notFound();
  }

  const copy = project.copy[locale];
  const prefix = locale === "ru" ? "/ru" : "";
  const oppositePrefix = locale === "ru" ? "" : "/ru";
  const caseRows = locale === "ru" && project.ruCaseRows ? project.ruCaseRows : project.caseRows;
  const nextProject = projects[project.nextProject.slug];

  const labels = locale === "ru"
    ? {
        back: "← Назад к работам",
        year: "Год",
        next: "Следующий проект",
        view: "Смотреть проект →",
        status: "Статус",
        haveProject: "Есть проект?",
        worldwide: "По всему миру",
        talk: "Обсудить →",
        opposite: "EN",
      }
    : {
        back: "← Back to work",
        year: "Year",
        next: "Next Project",
        view: "View project →",
        status: "Status",
        haveProject: "Have a project?",
        worldwide: "Worldwide",
        talk: "Let&apos;s talk →",
        opposite: "RU",
      };

  return (
    <main className="min-h-screen bg-[#f3f1eb] text-[#111111]">
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-black/10 bg-[#f3f1eb]/90 px-6 py-5 backdrop-blur-md md:px-10">
        <Link href={prefix || "/"} className="text-sm font-semibold tracking-[-0.02em] transition-opacity hover:opacity-50">
          ZYKOV
        </Link>

        <div className="flex items-center gap-4 text-sm md:gap-5">
          <Link href={`${oppositePrefix}/work/${slug}`} className="transition-opacity hover:opacity-50">
            {labels.opposite}
          </Link>
          <Link href={`${prefix}/#work`} className="transition-opacity hover:opacity-50">
            {labels.back}
          </Link>
        </div>
      </header>

      <section className="px-6 pb-12 pt-12 md:px-10 md:pb-20 md:pt-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="mb-6 text-sm uppercase tracking-[0.08em] opacity-60">{copy.category}</p>
            <h1 className="text-[13vw] font-medium leading-[0.82] tracking-[-0.07em] md:text-[8vw]">{project.title}</h1>
          </div>

          <div className="flex flex-col justify-end md:col-span-4">
            <p className="mb-8 max-w-md text-base leading-relaxed">{copy.description}</p>
            <div className="flex justify-between border-t border-black/20 pt-3 text-sm">
              <span>{labels.year}</span>
              <span>{project.year}</span>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{ backgroundColor: project.caseBackground ?? "#f3f1eb" }}
        className="px-6 pb-20 md:px-10 md:pb-28"
      >
        <div className="flex flex-col gap-0">
          {caseRows.map((row, rowIndex) => (
            <div key={rowIndex} className={row.length > 1 ? "grid gap-0 md:grid-cols-2" : "block"}>
              {row.map((image, imageIndex) => (
                <img
                  key={image}
                  src={image}
                  alt={`${project.title} case study ${rowIndex + imageIndex + 1}`}
                  className="block h-auto w-full"
                />
              ))}
            </div>
          ))}
        </div>
      </section>

      {copy.summaryItems && <ProjectSummary project={project} locale={locale} statusLabel={labels.status} />}

      <NextProject
        title={nextProject.title}
        slug={project.nextProject.slug}
        image={nextProject.image}
        number={project.nextProject.number}
        locale={locale}
        label={labels.next}
        viewLabel={labels.view}
      />

      <ProjectCTA locale={locale} haveProject={labels.haveProject} worldwide={labels.worldwide} talk={labels.talk} />
    </main>
  );
}

function ProjectSummary({ project, locale, statusLabel }: { project: Project; locale: Locale; statusLabel: string }) {
  const copy = project.copy[locale];

  return (
    <section className="border-t border-black/20 px-6 py-16 md:px-10 md:py-24">
      <div className="grid gap-12 md:grid-cols-12">
        <p className="text-sm uppercase tracking-[0.08em] md:col-span-4">{copy.summaryLabel}</p>

        <div className="md:col-span-8">
          {copy.summaryTitle && (
            <h2 className="max-w-4xl whitespace-pre-line text-4xl leading-[0.95] tracking-[-0.05em] md:text-6xl">
              {copy.summaryTitle}
            </h2>
          )}

          <div className="mt-14 border-t border-black/20">
            {copy.summaryItems?.map(([label, value]) => (
              <div key={`${label}-${value}`} className="flex items-end justify-between gap-8 border-b border-black/20 py-5">
                <span className="text-sm opacity-50">{label}</span>
                <span className="text-right text-xl tracking-[-0.03em] md:text-2xl">{value}</span>
              </div>
            ))}
          </div>

          {copy.status && (
            <div className="mt-12 flex items-center justify-between border-t border-black/20 pt-4 text-sm">
              <span className="opacity-50">{statusLabel}</span>
              <span>{copy.status}</span>
            </div>
          )}
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
        <p className="text-sm uppercase tracking-[0.08em]">{label}</p>
        <span className="text-sm opacity-50">{number}</span>
      </div>

      <Link href={`${prefix}/work/${slug}`} className="group block">
        <div className="mb-4 aspect-[16/9] overflow-hidden bg-black/5">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:brightness-[0.94]"
          />
        </div>

        <div className="flex items-center justify-between border-t border-black/20 pt-4">
          <h2 className="text-3xl tracking-[-0.04em] transition-transform duration-300 group-hover:translate-x-1 md:text-5xl">
            {title}
          </h2>
          <span className="text-sm">{viewLabel}</span>
        </div>
      </Link>
    </section>
  );
}

function ProjectCTA({ locale, haveProject, worldwide, talk }: { locale: Locale; haveProject: string; worldwide: string; talk: string }) {
  return (
    <section className="bg-[#111111] px-6 py-16 text-[#f3f1eb] md:px-10 md:py-24">
      <div className="flex min-h-[45vh] flex-col justify-between">
        <div className="flex items-center justify-between">
          <p className="text-sm uppercase tracking-[0.08em] opacity-60">{haveProject}</p>
          <p className="text-sm opacity-40">{worldwide}</p>
        </div>

        <a
          href="mailto:hello@zykovstudio.com"
          className="mt-20 block text-[12vw] font-medium leading-[0.85] tracking-[-0.07em] transition-opacity hover:opacity-60 md:text-[8vw]"
        >
          {locale === "ru" ? talk : <>Let&apos;s talk →</>}
        </a>
      </div>
    </section>
  );
}
