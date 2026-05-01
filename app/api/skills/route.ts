import { NextResponse } from "next/server";

import { addSkill, removeSkill } from "@/lib/portfolio-store";
import { parseSkillForm } from "@/lib/request";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const formData = await request.formData();

  try {
    const { category, skill, icon } = parseSkillForm(formData);
    addSkill(category, skill, icon);
    return new NextResponse(null, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Invalid request" },
      { status: 400 },
    );
  }
}

export async function DELETE(request: Request) {
  const params = new URL(request.url).searchParams;

  try {
    const { category, skill } = parseSkillForm(params);
    const removed = removeSkill(category, skill);
    return new NextResponse(null, { status: removed ? 200 : 404 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Invalid request" },
      { status: 400 },
    );
  }
}
