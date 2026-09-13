import { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "Personal Tracker",
    description:
      "A simple PWA built as a personal space to keep everyday life organised in one place. Built with Next.js, it brings together money tracking, EMI tracking, event tracking and scheduling, along with several other utilities — installable on any device and designed for quick, distraction-free daily use.",
    image: "/projects/PersonalTracker.svg",
    githubUrl: "https://github.com/Smayur0/personal-tracker",
    deployedUrl: "https://personal-tracker-eight-virid.vercel.app/",
    technologies: [
      "Nextjs",
      "React",
      "TypeScript",
      "TailwindCSS",
      "MongoDB",
      "JavaScript",
    ],
    isDeployed: true,
  },
  {
    title: "DevTinder",
    description:
      "A social networking platform designed specifically for developers to connect, collaborate, and share their coding journey. Features include profile matching, project showcases, and real-time messaging to help developers find their perfect coding partner or mentor.",
    image: "/projects/DevTinder.png",
    githubUrl: "https://github.com/username/devtinder",
    deployedUrl: "https://devtinder-demo.com",
    technologies: [
      "React",
      "Nodejs",
      "daisyui",
      "Stripe",
      "Socketio",
      "MongoDB",
      "JavaScript",
    ],
    isDeployed: false,
  },
  {
    title: "E-Commerce (Mobile App)",
    description:
      "A comprehensive e-commerce solution with advanced features including product catalog management, secure payment processing, order tracking, and customer reviews. Built with scalability and performance in mind to handle high traffic volumes.",
    image: "/projects/Ecom-1.png",
    githubUrl: "https://github.com/username/ecommerce",
    deployedUrl: "https://ecommerce-demo.com",
    technologies: ["React", "Nextjs", "TypeScript", "Nodejs", "MySQL", "AWS"],
    isDeployed: true,
  },
  {
    title: "Jira",
    description:
      "A feature-rich project management application inspired by Jira, enabling teams to plan, track, and release software efficiently. Includes sprint planning, issue tracking, kanban boards, and comprehensive reporting features for agile development workflows.",
    image: "/projects/Jira-2.png",
    githubUrl: "https://github.com/username/jira-clone",
    deployedUrl: "https://jira-clone-demo.com",
    technologies: ["React", "Nextjs", "TypeScript", "Nodejs", "MongoDB"],
    isDeployed: false,
  },
];
