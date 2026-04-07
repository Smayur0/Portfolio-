import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTechIcon = (techName: string): string => {
  const techMap: Record<string, string> = {
    react: "/tech/REACT.png",
    nextjs: "/tech/Next.png",
    typescript: "/tech/TS.png",
    nodejs: "/tech/Node.png",
    "node.js": "/tech/Node.png",
    mysql: "/tech/MySQL.png",
    javascript: "/tech/JavaScript.png",
    aws: "/tech/AWS.png",
    daisyui: "/tech/daisyui.png",
    tailwindcss: "/tech/tailwind.png",
    socketio: "/tech/Socket.png",
    stripe: "/tech/Stripe.png",
    vercel: "/tech/Vercel.png",
    mongodb: "/tech/MongoDB.png",
    html: "/tech/html.png",
    css: "/tech/css.png",
    "github actions": "/tech/github-actions.png",
    husky: "/tech/husky.png",
    "pnpm workspace": "/tech/pnpm.png",
    pnpm: "/tech/pnpm.png",
  };

  return techMap[techName] || "/tech/Vercel.png";
};
