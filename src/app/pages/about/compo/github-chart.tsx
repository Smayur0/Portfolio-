"use client";
import { user } from "@/features/data/user";
import { useTheme } from "next-themes";
import { GitHubCalendar } from "react-github-calendar";

export default function GithubChart() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="w-full overflow-x-auto">
      <h2 className="mb-4 text-xl font-semibold">GitHub Activity</h2>
      <div className="border-muted-foreground/15 rounded-md border p-6">
        <GitHubCalendar
          username={user.gitUser || ""}
          blockSize={10}
          blockMargin={2}
          fontSize={14}
          colorScheme={theme === "dark" ? "dark" : "light"}
        />
      </div>
    </div>
  );
}
