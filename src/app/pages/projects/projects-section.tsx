"use client";
import { Code2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";

import { projects } from "@/features/data/project-data";
import ProjectCard from "./compo/project-card";
import SectionHeader from "@/registry/section-header";

const ProjectsSection = () => {
  return (
    <section id="projects" className="mt-2 sm:mt-3 md:mt-4 lg:mt-6">
      {/* Section Header */}
      <SectionHeader
        icon={<Code2 className="text-muted-foreground size-4 sm:size-5" />}
        label="Projects"
      />

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
