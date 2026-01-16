import { Globe, Github } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Project } from "@/features/types/project";
import TechIcon from "@/features/utills/tech-icon";
import { getTechIcon } from "@/features/utills/utils";
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
    <div className="border-border bg-card group flex flex-col overflow-hidden rounded-lg border transition-shadow hover:shadow-lg">
      {/* Project Image */}
      <div className="relative h-48 w-full overflow-hidden sm:h-56 md:h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">
        {/* Header with Title and Icons */}
        <div className="mb-3 flex items-start justify-between gap-3 sm:mb-4">
          <h3 className="text-foreground flex-1 text-base font-semibold sm:text-lg md:text-xl">
            {title}
          </h3>
          <div className="flex shrink-0 items-center gap-2">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground border-border bg-muted flex size-8 items-center justify-center rounded-md border transition-colors sm:size-9"
                aria-label="View on GitHub"
              >
                <Github className="size-4 sm:size-4.5" />
              </a>
            )}
            {deployedUrl && (
              <a
                href={deployedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground border-border bg-muted flex size-8 items-center justify-center rounded-md border transition-colors sm:size-9"
                aria-label="Visit deployed site"
              >
                <Globe className="text-muted-foreground size-3 sm:size-4 md:size-5" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed sm:mb-5 sm:text-base">
          {description}
        </p>

        <div className="mb-4">
          <p className="text-muted-foreground text-sm font-semibold">
            Technologies
          </p>
          <SkillsIcons icons={technologies} />
        </div>

        {/* Deployed Tag */}

        <div className="border-border mt-auto border-t pt-2">
          {isDeployed ? (
            <>
              <span className="inline-flex items-center rounded-md bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-600 sm:text-sm dark:text-green-400">
                <span className="mr-1.5 size-2 rounded-full bg-green-500"></span>
                Operational
              </span>
            </>
          ) : (
            <>
              <span className="text-primary dark:text-primary inline-flex items-center rounded-md bg-red-500/10 px-2.5 py-1 text-xs font-medium sm:text-sm">
                <span className="mr-1.5 size-2 rounded-full bg-red-500"></span>
                Building
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
