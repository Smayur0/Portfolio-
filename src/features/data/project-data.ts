import { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "DevTinder",
    description:
      "A social networking platform designed specifically for developers to connect, collaborate, and share their coding journey. Features include profile matching, project showcases, and real-time messaging to help developers find their perfect coding partner or mentor.",
    image: "/projects/DevTinder.png",
    githubUrl: "https://github.com/username/devtinder",
    deployedUrl: "https://devtinder-demo.com",
    technologies: [
      "React",
      "Node.js",
      "daisyui",
      "Stripe",
      "Socket.io",
      "MongoDB",
      "JavaScript",
    ],
    isDeployed: true,
  },
  {
    title: "E-Commerce (Mobile App)",
    description:
      "A comprehensive e-commerce solution with advanced features including product catalog management, secure payment processing, order tracking, and customer reviews. Built with scalability and performance in mind to handle high traffic volumes.",
    image: "/projects/Ecom-1.png",
    githubUrl: "https://github.com/username/ecommerce",
    deployedUrl: "https://ecommerce-demo.com",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "MySQL", "AWS"],
    isDeployed: true,
  },
  {
    title: "Jira",
    description:
      "A feature-rich project management application inspired by Jira, enabling teams to plan, track, and release software efficiently. Includes sprint planning, issue tracking, kanban boards, and comprehensive reporting features for agile development workflows.",
    image: "/projects/Jira-2.png",
    githubUrl: "https://github.com/username/jira-clone",
    deployedUrl: "https://jira-clone-demo.com",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB"],
    isDeployed: true,
  },
];
