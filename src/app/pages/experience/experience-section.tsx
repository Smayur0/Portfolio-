"use client";
import { Briefcase } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { experiences } from "@/features/data/experience-data";
import ExperienceItem from "./compo/experience-item";
import SectionHeader from "@/registry/section-header";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="mt-2 scroll-mt-24 sm:mt-3 sm:scroll-mt-28 md:mt-4 lg:mt-6"
    >
      {/* Section Header */}

      <SectionHeader
        icon={<Briefcase className="text-muted-foreground size-4 sm:size-5" />}
        label="Experience"
      />

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
