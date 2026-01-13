import { Experience } from "../types/experience";

export const experiences: Experience[] = [
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
