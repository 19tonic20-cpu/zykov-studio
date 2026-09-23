import type { Metadata } from "next";
import ProjectCasePage from "../../ProjectCasePage";
import { projects } from "../../site-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} — ZYKOV`,
    description: project.copy.en.description,
    alternates: {
      canonical: `/work/${slug}`,
      languages: {
        en: `/work/${slug}`,
        ru: `/ru/work/${slug}`,
      },
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <ProjectCasePage slug={slug} locale="en" />;
}
