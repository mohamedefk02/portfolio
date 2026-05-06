import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ClientShell } from "@/components/client-shell";
import { findProjectBySlug, listProjects } from "@/lib/portfolio-store";
import { slugifyTitle } from "@/lib/utils";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = findProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Mohamed El Fankari",
    };
  }

  return {
    title: `${project.title} | Mohamed El Fankari`,
  };
}

export async function generateStaticParams() {
  return listProjects().map((project) => ({
    slug: slugifyTitle(project.title),
  }));
}

import { ProjectDetail } from "@/components/project-detail";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = findProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <ClientShell>
      <ProjectDetail project={project} />
    </ClientShell>
  );
}
