"use client";
import { user } from "@/features/data/user";
import { FlipSentences } from "@/registry/flip-sentenses/flip-sentences";
import { useEffect } from "react";
import {
  BriefcaseBusinessIcon,
  CodeXmlIcon,
  Github,
  Globe,
  LightbulbIcon,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import TechIcon from "./tech-icon";
import { div } from "motion/react-client";
import { SocialIcon } from "./social-icons";

const Hero = () => {
  function linkOpener(sentense: string) {
    window.open(sentense, "_blank", "noopener,noreferrer");
  }

  const openLink = (url: string) => window.open(url, "_blank");

  return (
    <div className="mt-3">
      <div className="flex items-center space-x-20">
        {/* img section */}
        <img
          src="/IMG-4.PNg"
          alt="Logo"
          className="border-border h-25 w-25 rounded-full border"
        />
      </div>

      {/* Intro  */}
      <div className="mt-4">
        <h1 className="text-foreground text-3xl leading-loose font-bold tracking-wide">
          {/*  */}
          Hi , I'm {user.firstName} —-{" "}
          <span className="text-muted-foreground ml-1">
            A Full Stack web developer.
          </span>
        </h1>

        {/* bio intro  */}

        <h3 className="text-muted-foreground font-small mt-1 flex-wrap text-xl leading-loose tracking-wide text-wrap">
          I build interactive web/mobile apps using
          {"  "}
          <TechIcon img="/TS.png" tech="Typescript" /> ,{"  "}
          <TechIcon img="/REACT.png" tech="React.js" /> ,{"  "}
          <TechIcon img="/Node.png" tech="Node.js" /> ,{"  "}
          <TechIcon img="/Next.png" tech="Next.js" />
          {"  "} and {"  "}
          <TechIcon img="/MySQL.png" tech="MySQL" /> .
        </h3>
      </div>

      <Separator className="my-3" />
      {/* text section */}

      <div className="grid grid-cols-1 gap-4 space-y-1 sm:grid-cols-2">
        {/* -------tech stack------- */}
        <div className="flex items-center space-x-3">
          <div className="border-muted-foreground/15 bg-muted ring-edge ring-offset-background text-foreground/75 hover:bg-muted/50 hover:text-foreground/90 flex size-8 cursor-pointer items-center justify-center rounded-lg border p-1 transition-colors">
            <CodeXmlIcon size={"2em"} className="text-muted-foreground" />
          </div>
          <span className="cursor-pointer">
            Software Developer at{" "}
            <span className="font-semibold">iConnect solutions</span>
          </span>
        </div>
        {/* -------Location------- */}
        <div className="flex items-center space-x-3">
          <div
            onClick={() => linkOpener("https://maps.google.com/?q=Pune, India")}
            className="border-muted-foreground/15 bg-muted ring-edge ring-offset-background text-foreground/75 hover:bg-muted/50 hover:text-foreground/90 flex size-8 cursor-pointer items-center justify-center rounded-lg border p-1 transition-colors"
          >
            <MapPin size={"2em"} className="text-muted-foreground" />
          </div>
          <span className="cursor-pointer">Pune, India</span>
        </div>
        {/* -------Portfolio site------- */}
        <div className="flex items-center space-x-3">
          <div
            onClick={() => linkOpener("https://mayurshelke.dev")}
            className="border-muted-foreground/15 bg-muted ring-edge ring-offset-background text-foreground/75 hover:bg-muted/50 hover:text-foreground/90 flex size-8 cursor-pointer items-center justify-center rounded-lg border p-1 transition-colors"
          >
            <Globe size={"2em"} className="text-muted-foreground" />
          </div>
          <span className="cursor-pointer">mayurshelke.dev</span>
        </div>
        {/* -------mail------- */}
        <div className="flex items-center space-x-3">
          <div
            onClick={() => linkOpener("mailto:mayurshelke.dev@gmail.com")}
            className="border-muted-foreground/15 bg-muted ring-edge ring-offset-background text-foreground/75 hover:bg-muted/50 hover:text-foreground/90 flex size-8 cursor-pointer items-center justify-center rounded-lg border p-1 transition-colors"
          >
            <Mail size={"2em"} className="text-muted-foreground" />
          </div>
          <span className="cursor-pointer">mayurshelke.dev@gmail.com</span>
        </div>
      </div>
      {/* social links */}

      <div className="mt-4 flex items-center gap-3">
        <SocialIcon
          icon={<Twitter className="size-4" />}
          onClick={() => openLink("https://twitter.com/Smayur0")}
          iconName="X"
        />

        <SocialIcon
          icon={<Linkedin className="size-4" />}
          onClick={() => openLink("https://linkedin.com/in/Smayur0")}
          iconName="LinkedIn"
        />

        <SocialIcon
          icon={<Github className="size-4" />}
          onClick={() => openLink("https://github.com/Smayur0")}
          iconName="GitHub"
        />
      </div>
      <Separator className="my-3" />
    </div>
  );
};

export default Hero;
