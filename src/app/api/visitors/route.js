// import { kv } from "@vercel/kv";
// import { NextResponse } from "next/server";

// export async function POST() {
//   const count = await kv.incr("visitors");
//   return NextResponse.json({ count });
// }

import redis from "../../../features/utills/redis";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST() {
  try {
    // Atomic increment
    const count = await redis.incr("visitors");

    return NextResponse.json({ count }, { status: 200 });
  } catch (error) {
    console.error("Visitor counter error:", error);

    return NextResponse.json(
      { error: "Failed to update visitor count" },
      { status: 500 },
    );
  }
}
