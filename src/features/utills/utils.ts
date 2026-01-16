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
    mysql: "/tech/MySQL.png",
    javascript: "/tech/JavaScript.png",
    aws: "/tech/AWS.png",
    daisyui: "/tech/daisyui.png",
    tailwindcss: "/tech/TailwindCSS.png",
    socketio: "/tech/Socket.png",
    stripe: "/tech/Stripe.png",
    vercel: "/tech/vercel.png",
    mongodb: "/tech/MongoDB.png",
    html: "/tech/html.png",
    css: "/tech/css.png",
  };

  return techMap[techName] || "/tech/vercel.png";
};
