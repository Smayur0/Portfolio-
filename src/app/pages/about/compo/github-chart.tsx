"use client";
import { user } from "@/features/data/user";
import { Github } from "lucide-react";
import { useTheme } from "next-themes";
import { Component, type ErrorInfo, type ReactNode, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

class GitHubCalendarErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("GitHub Calendar failed to load:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

function GitHubFallback() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-8 text-muted-foreground">
      <Github className="h-10 w-10 opacity-50" />
      <p className="text-sm">Unable to load GitHub contributions right now.</p>
      <a
        href={`https://github.com/${user.gitUser}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-primary underline underline-offset-4 hover:opacity-80"
      >
        View profile on GitHub
      </a>
    </div>
  );
}

function GitHubCalendarWrapper() {
  const { theme } = useTheme();
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <GitHubFallback />;
  }

  return (
    <GitHubCalendarErrorBoundary fallback={<GitHubFallback />}>
      <GitHubCalendar
        username={user.gitUser || ""}
        blockSize={10}
        blockMargin={2}
        fontSize={14}
        colorScheme={theme === "dark" ? "dark" : "light"}
        transformData={(contributions) => {
          if (!contributions || contributions.length === 0) {
            setHasError(true);
          }
          return contributions;
        }}
      />
    </GitHubCalendarErrorBoundary>
  );
}

export default function GithubChart() {
  return (
    <div className="w-full overflow-x-auto">
      <h2 className="mb-4 text-xl font-semibold">GitHub Activity</h2>
      <div className="border-muted-foreground/15 rounded-md border p-6">
        <GitHubCalendarWrapper />
      </div>
    </div>
  );
}
