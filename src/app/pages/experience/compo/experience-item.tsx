import { MapPin } from "lucide-react";
import React from "react";
import { Experience } from "@/features/types/experience";

import Image from "next/image";
import TechIcon from "@/features/utills/tech-icon";
import { getTechIcon } from "@/features/utills/utils";

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
      {/* Timeline connector line */}
      {!isLast && (
        <div className="border-primary/30 absolute top-8 bottom-0 left-3 hidden border-l-2 sm:block md:left-4" />
      )}

      <div className="flex gap-3 sm:gap-4">
        {/* Timeline dot */}
        <div className="border-primary/40 bg-primary/5 relative z-10 flex size-6 shrink-0 items-center justify-center rounded-full border-2 sm:size-7 md:size-8">
          <div className="bg-primary size-2 rounded-full sm:size-2.5 md:size-3" />
        </div>

        {/* Content card */}
        <div className="border-border/60 bg-muted/20 hover:bg-muted/30 mb-4 flex-1 rounded-xl border p-4 transition-colors sm:mb-5 sm:p-5 md:mb-6">
          {/* Header with company image, name, and date */}
          <div className="mb-3 flex items-start justify-between gap-3">
            <div className="flex items-center gap-2 sm:gap-3">
              {companyImage && (
                <div className="border-border flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border bg-white sm:size-12 md:size-14">
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
                <h3 className="text-foreground text-sm font-semibold sm:text-base md:text-lg">
                  {company}
                </h3>
                <p className="text-primary mt-0.5 text-xs font-medium sm:text-sm">
                  {title}
                </p>
              </div>
            </div>
            <div className="text-muted-foreground flex shrink-0 flex-col items-end text-right text-xs sm:text-sm">
              <span>
                {startDate}{" "}
                {endDate ? `– ${endDate}` : current ? "– Present" : ""}
              </span>
              {location && (
                <div className="mt-1 flex items-center gap-1">
                  <MapPin className="size-3 sm:size-3.5" />
                  <span>{location}</span>
                </div>
              )}
            </div>
          </div>

          {/* Tools and technologies */}
          {technologies && technologies.length > 0 && (
            <div className="mb-3">
              <p className="text-muted-foreground mb-1.5 text-xs font-semibold uppercase tracking-wide sm:text-xs">
                Stack
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
            <ul className="text-muted-foreground space-y-1.5 text-xs sm:space-y-2 sm:text-sm">
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
