"use client";
import { Briefcase } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import ExperienceItem from "./experience-item";
import { experiences } from "@/features/data/experience-data";

const ExperienceSection = () => {
  return (
    <section id="experience" className="mt-2 sm:mt-3 md:mt-4 lg:mt-6">
      {/* Section Header */}
      <div className="mb-4 flex items-center gap-2 sm:mb-5 sm:gap-3 md:mb-6">
        <div className="border-muted-foreground/15 bg-muted text-foreground/75 flex size-8 items-center justify-center rounded-lg border sm:size-9 md:size-10">
          <Briefcase className="text-muted-foreground size-4 sm:size-5" />
        </div>
        <h2 className="text-foreground text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl">
          Experience
        </h2>
      </div>

      {/* Experience List */}
      <div className="relative">
        {experiences.map((experience, index) => (
          <ExperienceItem
            key={index}
            {...experience}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>

      <Separator className="my-3 sm:my-4 md:my-5 lg:my-6" />
    </section>
  );
};

export default ExperienceSection;

