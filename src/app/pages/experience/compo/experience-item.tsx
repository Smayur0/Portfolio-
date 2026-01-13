import { MapPin } from "lucide-react";
import React from "react";
import { Experience } from "@/features/types/experience";

import Image from "next/image";
import TechIcon from "@/features/utills/tech-icon";
import { getTechIcon } from "@/lib/utils";

export type ExperienceItemProps = Experience & {
  isLast?: boolean;
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  companyImage,
  location,
  startDate,
  endDate,
  current = false,
  description,
  technologies,
  isLast = false,
}) => {
  return (
    <div className="group relative">
      {/* Timeline connector line - hidden on mobile, visible on larger screens, hidden on last item */}
      {!isLast && (
        <div className="border-border absolute top-8 bottom-0 left-3 hidden border-l-2 sm:block md:left-4" />
      )}

      <div className="flex gap-3 sm:gap-4">
        {/* Timeline dot */}
        <div className="border-border bg-background relative z-10 flex size-6 shrink-0 items-center justify-center rounded-full border-2 sm:size-7 md:size-8">
          <div className="bg-primary size-2 rounded-full sm:size-2.5 md:size-3" />
        </div>

        {/* Content */}
        <div className="flex-1 pb-6 sm:pb-8 md:pb-10">
          {/* Header with company image, name, and date */}
          <div className="mb-2 flex items-start justify-between gap-3">
            <div className="flex items-center gap-2 sm:gap-3">
              {companyImage && (
                <div className="border-border flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border sm:size-12 md:size-14">
                  <Image
                    src={companyImage}
                    alt={company}
                    width={56}
                    height={56}
                    className="h-full w-full object-contain p-1.5"
                  />
                </div>
              )}
              <div className="flex flex-col">
                <h3 className="text-foreground text-sm font-semibold sm:text-base md:text-lg lg:text-xl">
                  {company}
                </h3>
                <p className="text-muted-foreground mt-0.5 text-xs font-medium sm:text-sm md:text-base">
                  {title}
                </p>
              </div>
            </div>
            <div className="text-muted-foreground flex shrink-0 flex-col items-end text-right text-xs sm:text-sm md:text-base">
              <span>
                {startDate}{" "}
                {endDate ? `to ${endDate}` : current ? "to Present" : ""}
              </span>
              {location && (
                <div className="mt-1 flex items-center gap-1">
                  <MapPin className="size-3 sm:size-3.5" />
                  <span>{location}</span>
                </div>
              )}
            </div>
          </div>

          {/* Tools and technologies used - below header container */}
          {technologies && technologies.length > 0 && (
            <div className="mt-2 mb-2 sm:mt-3">
              <p className="text-foreground mb-1.5 text-xs font-semibold sm:text-sm md:text-base">
                Tools and technologies used:
              </p>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {technologies.map((tech, index) => {
                  return (
                    <TechIcon
                      key={index}
                      img={getTechIcon(tech.toLowerCase())}
                      tech={tech}
                    />
                  );
                })}
              </div>
            </div>
          )}

          {/* Description */}
          {description && description.length > 0 && (
            <ul className="text-muted-foreground mt-2 space-y-1.5 text-xs sm:mt-3 sm:space-y-2 sm:text-sm md:space-y-2.5 md:text-base">
              {description.map((item, index) => (
                <li key={index} className="flex gap-2.5">
                  <span className="text-primary mt-0.5 shrink-0">•</span>
                  <span className="flex-1 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
