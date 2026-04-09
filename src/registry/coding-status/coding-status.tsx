"use client";

import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Status = "online" | "offline";

function getStatus(lastHeartbeatTime: number | null): Status {
  if (!lastHeartbeatTime) return "offline";
  const secondsAgo = Date.now() / 1000 - lastHeartbeatTime;
  return secondsAgo < 5 * 60 ? "online" : "offline";
}

export function CodingStatusDot() {
  const [status, setStatus] = useState<Status>("offline");

  const fetchStatus = async () => {
    try {
      const res = await fetch("/api/wakatime");
      if (!res.ok) throw new Error();
      const json = await res.json();
      setStatus(getStatus(json.lastHeartbeatTime));
    } catch {
      setStatus("offline");
    }
  };

  useEffect(() => {
    fetchStatus();
    const interval = setInterval(fetchStatus, 60_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span
          className={`border-background absolute right-1 bottom-1 size-3.5 cursor-default rounded-full border-2 sm:size-4 ${
            status === "online" ? "bg-green-500" : "bg-gray-400"
          }`}
        />
      </TooltipTrigger>
      <TooltipContent side="right">
        <p>{status === "online" ? "Online" : "Offline"}</p>
      </TooltipContent>
    </Tooltip>
  );
}
