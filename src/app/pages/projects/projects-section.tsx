"use client";
import { Code2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";

import { projects } from "@/features/data/project-data";
import ProjectCard from "./compo/project-card";

const ProjectsSection = () => {
  return (
    <section id="projects" className="mt-2 sm:mt-3 md:mt-4 lg:mt-6">
      {/* Section Header */}
      <div className="mb-4 flex items-center gap-2 sm:mb-5 sm:gap-3 md:mb-6">
        <div className="border-muted-foreground/15 bg-muted text-foreground/75 flex size-8 items-center justify-center rounded-lg border sm:size-9 md:size-10">
          <Code2 className="text-muted-foreground size-4 sm:size-5" />
        </div>
        <h2 className="text-foreground text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl">
          Projects
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <Separator className="my-3 sm:my-4 md:my-5 lg:my-6" />
    </section>
  );
};

export default ProjectsSection;
