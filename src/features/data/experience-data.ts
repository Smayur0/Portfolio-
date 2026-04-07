import { Experience } from "../types/experience";

export const experiences: Experience[] = [
  {
    title: "Open Source Contributor",
    company: "Team Shiksha",
    companyImage: "/team-shiksha-logo.webp",
    location: "Remote",
    startDate: "Dec-25",
    current: true,
    description: [
      "Contributed to the OpenLogo project, migrating authentication from JWT to session-based auth improving security and simplifying token management across the application",
      "Configured GitHub Actions workflows for automated testing and deployment, and integrated Husky with pre-commit hooks to enforce linting and code quality standards",
      "Led UI revamp efforts, redesigning key pages and components to improve usability, accessibility, and overall user experience",
      "Collaborated with contributors in a pnpm workspace monorepo, managing shared packages and ensuring consistent dependency resolution across services",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "JavaScript",
      "pnpm Workspace",
      "GitHub Actions",
      "Husky",
      "Vercel",
      "AWS",
    ],
  },
  {
    title: "Software Developer",
    company: "iConnect solutions",
    companyImage: "/iConnect-2.webp",
    location: "Pune, India",
    startDate: "Aug-23",
    current: true,
    description: [
      "Developed and maintained full-stack web applications using React, Next.js, and Node.js",
      "Built responsive user interfaces with modern CSS frameworks and component libraries",
      "Integrated RESTful APIs and worked with MySQL databases",
      "Collaborated with cross-functional teams to deliver high-quality software solutions",
    ],
    technologies: ["React", "Nextjs", "TypeScript", "Nodejs", "MySQL", "AWS"],
  },
  {
    title: "Associate Software Engineer",
    company: "Quinite",
    companyImage: "/Quinite-Logo-Black.svg",
    location: "Pune, India",
    startDate: "Jan-23",
    endDate: "Mar-23",
    description: [
      "Worked on frontend development using React and modern JavaScript",
      "Participated in code reviews and contributed to team best practices",
      "Assisted in building scalable web applications",
    ],
    technologies: ["React", "JavaScript", "HTML", "CSS"],
  },
];
