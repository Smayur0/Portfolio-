"use client";

import { Eye } from "lucide-react";
import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(0);

  useEffect(() => {
    fetch("/api/visitors", { method: "POST" })
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="border-muted-foreground/10 bg-muted/30 mx-auto flex max-w-80 items-center justify-center rounded-md border px-4 py-3">
      <p className="text-muted-foreground text-md flex items-center gap-2 font-medium">
        <span className="bg-muted rounded-md p-1">
          <Eye className="size-6" />
        </span>
        <span>
          You are the <span className="font-bold">{count ?? 0}th</span> visitor
        </span>
      </p>
    </div>
  );
}
