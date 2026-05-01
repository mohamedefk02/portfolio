import { NextResponse } from "next/server";

import { addProject } from "@/lib/portfolio-store";
import { parseAddProjectForm } from "@/lib/request";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const formData = await request.formData();

  try {
    const project = parseAddProjectForm(formData);
    addProject({
      ...project,
      impact: "",
      highlights: [],
      techStack: [],
    });
    return new NextResponse(null, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Invalid request" },
      { status: 400 },
    );
  }
}
