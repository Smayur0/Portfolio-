import GithubChart from "./compo/github-chart";
import { UserRound } from "lucide-react";
import SectionHeader from "../../../registry/section-header";
import SkillsIcons from "../../../registry/skills-icons";
import { user } from "@/features/data/user";
const AboutSection = () => {
  return (
    <section id="experience" className="mt-2 sm:mt-3 md:mt-4 lg:mt-6">
      {/* Section Header */}
      <SectionHeader
        icon={<UserRound className="text-muted-foreground size-4 sm:size-5" />}
        label="About Me"
      />
      <div className="mb-4 flex flex-col md:flex-row">
        <div className="mr-4 flex">
          <img
            src="/IMG-4.png"
            alt="Mayur Shelke"
            className="h-50 w-50 rounded-md"
          />
        </div>

        <div className="mt-6 w-1/2">
          <h2 className="text-primary mb-3 text-2xl font-semibold">
            Mayur Shelke
          </h2>
          <p className="text-muted-foreground mb-3 text-sm leading-5">
            I'am a Full Stack web developer and Open Source Contributer, I love
            building products to solve real world problems.
          </p>
          <p className="text-muted-foreground text-sm font-semibold">Skills</p>
          <SkillsIcons icons={user.techStack} />
        </div>
      </div>

        <GithubChart />
    
    </section>
  );
};

export default AboutSection;
