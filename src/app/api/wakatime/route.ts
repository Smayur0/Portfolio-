import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const apiKey = process.env.WAKATIME_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "No API key configured" }, { status: 500 });
  }

  const encoded = Buffer.from(apiKey).toString("base64");
  const headers = { Authorization: `Basic ${encoded}` };

  try {
    const today = new Date().toISOString().split("T")[0];

    const [heartbeatRes, statsRes] = await Promise.all([
      fetch(
        `https://wakatime.com/api/v1/users/current/heartbeats?date=${today}`,
        { headers, next: { revalidate: 60 } },
      ),
      fetch(`https://wakatime.com/api/v1/users/current/status_bar/today`, {
        headers,
        next: { revalidate: 60 },
      }),
    ]);

    const [heartbeatData, statsData] = await Promise.all([
      heartbeatRes.json(),
      statsRes.json(),
    ]);

    const heartbeats: { time: number }[] = heartbeatData.data ?? [];
    const lastHeartbeat = heartbeats[heartbeats.length - 1];
    const lastHeartbeatTime = lastHeartbeat?.time ?? null;

    const todayTotal: string = statsData.data?.grand_total?.text ?? null;

    return NextResponse.json({ lastHeartbeatTime, todayTotal });
  } catch {
    return NextResponse.json({ error: "Failed to fetch WakaTime data" }, { status: 500 });
  }
}
