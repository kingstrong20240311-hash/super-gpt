import { NextResponse } from "next/server";

const disabledResponse = NextResponse.json(
  { error: "Login/register has been removed" },
  { status: 410 }
);

export async function GET() {
  return disabledResponse;
}

export async function POST() {
  return disabledResponse;
}
