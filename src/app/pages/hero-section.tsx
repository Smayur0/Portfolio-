"use client";
import { user } from "@/features/data/user";
import {
  CodeXmlIcon,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SocialIcon } from "../../features/utills/social-icons";
import { experiences } from "@/features/data/experience-data";
import { FlipSentences } from "@/registry/flip-sentenses/flip-sentences";
import { CodingStatusDot } from "@/registry/coding-status/coding-status";
import { motion } from "motion/react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const Hero = () => {
  const openLink = (url: string) => window.open(url, "_blank");

  return (
    <div
      id="home"
      className="mt-2 scroll-mt-24 sm:mt-3 sm:scroll-mt-28 md:mt-4 lg:mt-6"
    >
      {/* Avatar + Status */}
      <motion.div
        className="mb-5 flex items-center gap-4 sm:mb-6 sm:gap-5"
        {...fadeUp}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          <div className="from-primary via-primary/60 to-primary/20 rounded-full bg-gradient-to-br p-[2.5px]">
            <img
              src="/IMG-4.png"
              alt={user.userName}
              className="bg-background h-20 w-20 rounded-full object-cover sm:h-24 sm:w-24 md:h-28 md:w-28"
            />
          </div>
          <CodingStatusDot />
        </div>

        <div className="flex flex-col gap-2">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-600 dark:text-green-400">
            <span className="size-1.5 animate-pulse rounded-full bg-green-500" />
            Available for opportunities
          </span>
          <span className="text-muted-foreground flex items-center gap-1 text-xs">
            <MapPin className="size-3" />
            {user.address}
          </span>
        </div>
      </motion.div>

      {/* Name + Animated Role */}
      <motion.div
        className="mb-4"
        {...fadeUp}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h1 className="text-foreground text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          {user.userName}
        </h1>
        <div className="text-primary mt-1.5 text-base font-semibold sm:text-lg md:text-xl">
          <FlipSentences interval={3}>
            {user.flipSentences.map((sentence, i) => (
              <span key={i}>{sentence}</span>
            ))}
          </FlipSentences>
        </div>
      </motion.div>

      {/* Bio */}
      <motion.p
        className="text-muted-foreground mb-5 max-w-2xl text-sm leading-relaxed sm:text-base sm:leading-7"
        {...fadeUp}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {user.bio}
      </motion.p>

      {/* Stats */}
      <motion.div
        className="mb-5 flex flex-wrap gap-6"
        {...fadeUp}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {[
          { value: "3+", label: "Years Experience" },
          { value: "10+", label: "Projects Built" },
          { value: "2", label: "Companies" },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col">
            <span className="text-primary text-2xl font-bold leading-none sm:text-3xl">
              {stat.value}
            </span>
            <span className="text-muted-foreground mt-0.5 text-xs">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Contact Info Pills */}
      <motion.div
        className="mb-4 flex flex-wrap gap-2"
        {...fadeUp}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <span className="border-border bg-muted/50 text-foreground/80 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs sm:text-sm">
          <CodeXmlIcon className="text-primary size-3.5" />
          {experiences[0].title} at{" "}
          <span className="font-semibold">{experiences[0].company}</span>
        </span>
        <span
          className="border-border bg-muted/50 text-foreground/80 inline-flex cursor-pointer items-center gap-1.5 rounded-full border px-3 py-1 text-xs transition-colors hover:bg-muted sm:text-sm"
          onClick={() => openLink(`mailto:${user.email}`)}
        >
          <Mail className="text-primary size-3.5" />
          {user.email}
        </span>
      </motion.div>

      {/* Social Links + CTAs */}
      <motion.div
        className="flex flex-wrap items-center gap-3"
        {...fadeUp}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <SocialIcon
          icon={<Github className="size-4" />}
          onClick={() => openLink(user.socials.github)}
          iconName="GitHub"
        />
        <SocialIcon
          icon={<Linkedin className="size-4" />}
          onClick={() => openLink(user.socials.linkedin)}
          iconName="LinkedIn"
        />
        <SocialIcon
          icon={<Twitter className="size-4" />}
          onClick={() => openLink(user.socials.twitter)}
          iconName="X"
        />

        <Separator orientation="vertical" className="!h-6" />

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-semibold shadow-sm transition-all hover:shadow-md sm:text-sm"
        >
          <Download className="size-3.5" />
          Resume
        </a>

        <a
          href={`mailto:${user.email}`}
          className="border-border text-foreground hover:bg-muted inline-flex items-center gap-1.5 rounded-lg border px-4 py-2 text-xs font-semibold transition-colors sm:text-sm"
        >
          <Mail className="size-3.5" />
          Contact
        </a>
      </motion.div>

      <Separator className="my-5 sm:my-6 md:my-8" />
    </div>
  );
};

export default Hero;
