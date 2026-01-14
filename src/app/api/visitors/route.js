import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

export async function POST() {
  const count = await kv.incr("visitors");
  return NextResponse.json({ count });
}
