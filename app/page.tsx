import { HomePage } from "@/components/home-page";
import { listProjects, listSkillCategories } from "@/lib/portfolio-store";

export const dynamic = "force-dynamic";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const sent = params.sent;
  const contactStatus = sent ? "Thank you, your message has been sent." : undefined;

  return (
    <HomePage
      projects={listProjects()}
      skillCategories={listSkillCategories()}
      contactStatus={contactStatus}
    />
  );
}
