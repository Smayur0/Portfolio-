"use client";
import { user } from "@/features/data/user";
import {
  CodeXmlIcon,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import TechIcon from "../../features/utills/tech-icon";
import { SocialIcon } from "../../features/utills/social-icons";
import { getTechIcon } from "@/features/utills/utils";
import { experiences } from "@/features/data/experience-data";

const Hero = () => {
  function linkOpener(sentense: string) {
    window.open(sentense, "_blank", "noopener,noreferrer");
  }

  const openLink = (url: string) => window.open(url, "_blank");

  return (
    <div className="mt-2 scroll-mt-24 sm:mt-3 sm:scroll-mt-28 md:mt-4 lg:mt-6">
      <div className="mb-3 flex items-center justify-center space-x-3 sm:mb-4 sm:justify-start sm:space-x-6 md:mb-6 md:space-x-8 lg:space-x-12">
        {/* img section */}
        <img
          src="/IMG-4.png"
          alt="Logo"
          className="border-border h-16 w-16 rounded-full border object-cover sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28"
        />
      </div>

      {/* Intro  */}
      <div className="mt-3 sm:mt-4 md:mt-5 lg:mt-6">
        <h1 className="text-foreground text-lg leading-tight font-bold tracking-wide sm:text-xl sm:leading-normal md:text-2xl md:leading-loose lg:text-3xl xl:text-4xl">
          Hi , I'm {user.firstName} —{" "}
          <span className="text-muted-foreground block sm:ml-1 sm:inline">
            A Full Stack web developer.
          </span>
        </h1>

        {/* bio intro  */}
        <h3 className="text-muted-foreground font-small mt-2 text-xs leading-relaxed tracking-wide sm:mt-3 sm:text-sm sm:leading-loose md:mt-4 md:text-base lg:text-lg xl:text-xl">
          I build interactive web/mobile apps using
          {"  "}
          <TechIcon img={getTechIcon("typescript")} tech={"Typescript"} />,
          {"  "}
          <TechIcon img={getTechIcon("react")} tech={"React.js"} /> ,{"  "}
          <TechIcon img={getTechIcon("nodejs")} tech={"Node.js"} /> ,{"  "}
          <TechIcon img={getTechIcon("nextjs")} tech={"Next.js"} />
          {"  "} and {"  "}
          <TechIcon img={getTechIcon("mysql")} tech={"MySQL"} /> .
        </h3>
      </div>

      <Separator className="my-3 sm:my-4 md:my-5 lg:my-6" />
      {/* text section */}

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 md:gap-4">
        {/* -------tech stack------- */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="border-muted-foreground/15 bg-muted text-foreground/75 hover:bg-muted/50 hover:text-foreground/90 flex size-6 cursor-pointer items-center justify-center rounded-lg border p-1 transition-colors sm:size-7 md:size-8">
            <CodeXmlIcon className="text-muted-foreground size-3 sm:size-4 md:size-5" />
          </div>
          <span className="cursor-pointer text-xs sm:text-sm md:text-base">
            {experiences[0].title} at{" "}
            <span className="font-semibold">{experiences[0].company}</span>
          </span>
        </div>
        {/* -------Location------- */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div
            onClick={() => linkOpener("https://maps.google.com/?q=Pune, India")}
            className="border-muted-foreground/15 bg-muted text-foreground/75 hover:bg-muted/50 hover:text-foreground/90 flex size-6 cursor-pointer items-center justify-center rounded-lg border p-1 transition-colors sm:size-7 md:size-8"
          >
            <MapPin className="text-muted-foreground size-3 sm:size-4 md:size-5" />
          </div>
          <span className="cursor-pointer text-xs sm:text-sm md:text-base">
            {user.address}
          </span>
        </div>
        {/* -------Portfolio site------- */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div
            onClick={() => linkOpener(user.website!)}
            className="border-muted-foreground/15 bg-muted text-foreground/75 hover:bg-muted/50 hover:text-foreground/90 flex size-6 cursor-pointer items-center justify-center rounded-lg border p-1 transition-colors sm:size-7 md:size-8"
          >
            <Globe className="text-muted-foreground size-3 sm:size-4 md:size-5" />
          </div>
          <span className="cursor-pointer text-xs break-all sm:text-sm md:text-base">
            {user.website}
          </span>
        </div>
        {/* -------mail------- */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div
            onClick={() => linkOpener(`mailto:${user.email}`)}
            className="border-muted-foreground/15 bg-muted text-foreground/75 hover:bg-muted/50 hover:text-foreground/90 flex size-6 cursor-pointer items-center justify-center rounded-lg border p-1 transition-colors sm:size-7 md:size-8"
          >
            <Mail className="text-muted-foreground size-3 sm:size-4 md:size-5" />
          </div>
          <span className="cursor-pointer text-xs break-all sm:text-sm md:text-base">
            {user.email}
          </span>
        </div>
      </div>
      {/* social links */}
      <div className="mt-3 flex items-center gap-2 sm:mt-4 sm:gap-3 md:mt-6">
        <SocialIcon
          icon={<Twitter className="size-4" />}
          onClick={() => openLink(user.socials.twitter)}
          iconName="X"
        />

        <SocialIcon
          icon={<Linkedin className="size-4" />}
          onClick={() => openLink(user.socials.linkedin)}
          iconName="LinkedIn"
        />

        <SocialIcon
          icon={<Github className="size-4" />}
          onClick={() => openLink(user.socials.github)}
          iconName="GitHub"
        />
      </div>
      <Separator className="my-3 sm:my-4 md:my-5 lg:my-6" />
    </div>
  );
};

export default Hero;
