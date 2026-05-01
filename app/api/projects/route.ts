import { NextResponse } from "next/server";

import { removeProjectByTitle } from "@/lib/portfolio-store";

export const dynamic = "force-dynamic";

export async function DELETE(request: Request) {
  const title = new URL(request.url).searchParams.get("title");

  if (!title?.trim()) {
    return NextResponse.json({ error: "Missing required field: title" }, { status: 400 });
  }

  const removed = removeProjectByTitle(title);
  return new NextResponse(null, { status: removed ? 200 : 404 });
}
