import { NextResponse } from "next/server";
import { DOWNLOADS } from "@/lib/downloads";

export async function GET() {
  return NextResponse.redirect(DOWNLOADS.windows.url, { status: 302 });
}

