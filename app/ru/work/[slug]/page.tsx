import ProjectCasePage from "../../../ProjectCasePage";

export default async function RussianProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProjectCasePage slug={slug} locale="ru" />;
}
