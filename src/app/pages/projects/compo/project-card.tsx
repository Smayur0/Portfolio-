import { Globe, Github } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Project } from "@/features/types/project";
import SkillsIcons from "@/registry/skills-icons";

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  image,
  githubUrl,
  deployedUrl,
  technologies,
  isDeployed,
}) => {
  return (
    <div className="border-border bg-card group flex flex-col overflow-hidden rounded-xl border transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
      {/* Project Image */}
      <div className="relative h-48 w-full overflow-hidden sm:h-52 md:h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Status badge on image */}
        <div className="absolute top-3 right-3">
          {isDeployed ? (
            <span className="inline-flex items-center rounded-full bg-green-500/90 px-2.5 py-1 text-xs font-medium text-white shadow-sm backdrop-blur-sm">
              <span className="mr-1.5 size-1.5 rounded-full bg-white opacity-80" />
              Live
            </span>
          ) : (
            <span className="inline-flex items-center rounded-full bg-amber-500/90 px-2.5 py-1 text-xs font-medium text-white shadow-sm backdrop-blur-sm">
              <span className="mr-1.5 size-1.5 rounded-full bg-white opacity-80" />
              In Progress
            </span>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        {/* Header with Title and Icons */}
        <div className="mb-2 flex items-start justify-between gap-3">
          <h3 className="text-foreground flex-1 text-base font-semibold leading-snug sm:text-lg">
            {title}
          </h3>
          <div className="flex shrink-0 items-center gap-1.5">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground hover:bg-muted flex size-8 items-center justify-center rounded-lg transition-colors"
                aria-label="View on GitHub"
              >
                <Github className="size-4" />
              </a>
            )}
            {deployedUrl && (
              <a
                href={deployedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground hover:bg-muted flex size-8 items-center justify-center rounded-lg transition-colors"
                aria-label="Visit deployed site"
              >
                <Globe className="size-4" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="mt-auto">
          <p className="text-muted-foreground mb-1.5 text-xs font-semibold uppercase tracking-wide">
            Stack
          </p>
          <SkillsIcons icons={technologies} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
