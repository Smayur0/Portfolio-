import GithubChart from "./compo/github-chart";
import { UserRound } from "lucide-react";
import SectionHeader from "../../../registry/section-header";
import SkillsIcons from "../../../registry/skills-icons";
import { user } from "@/features/data/user";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="mt-2 scroll-mt-24 sm:mt-3 sm:scroll-mt-28 md:mt-4 lg:mt-6"
    >
      <SectionHeader
        icon={<UserRound className="size-4 sm:size-5" />}
        label="About Me"
      />

      <div className="mb-6 flex flex-col gap-6 sm:flex-row sm:items-start">
        {/* Photo */}
        <div className="shrink-0">
          <img
            src="/IMG-4.png"
            alt="Mayur Shelke"
            className="h-40 w-40 rounded-xl object-cover sm:h-44 sm:w-44 md:h-48 md:w-48"
          />
        </div>

        {/* Bio + Skills */}
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-foreground mb-2 text-xl font-bold sm:text-2xl">
              {user.userName}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed sm:text-base sm:leading-7">
              {user.about}
            </p>
          </div>

          <div>
            <p className="text-muted-foreground mb-2 text-xs font-semibold uppercase tracking-wide">
              Tech Stack
            </p>
            <SkillsIcons icons={user.techStack} />
          </div>
        </div>
      </div>

      <GithubChart />
    </section>
  );
};

export default AboutSection;
