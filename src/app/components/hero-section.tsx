"use client";
import { user } from "@/features/data/user";
import { FlipSentences } from "@/registry/flip-sentenses/flip-sentences";
import { useEffect } from "react";
import {
  BriefcaseBusinessIcon,
  CodeXmlIcon,
  Globe,
  LightbulbIcon,
  Mail,
  MapPin,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Hero = () => {
  const sentense = user.flipSentences;

  function flipWords(sentense: string[]) {
    console.log("SENTENSE", sentense);
  }
  useEffect(() => {
    flipWords(sentense);
  }, []);
  return (
    <div className="mt-10">
      {/* logo heading section  */}
      <div className="flex items-center space-x-20">
        {/* img section */}
        <img
          src="/IMG-4.PNg"
          alt="Logo"
          className="border-border h-45 w-45 rounded-full border object-cover"
        />
        {/* name  */}
        <div>
          <h1 className="text-foreground mt-6 text-3xl font-bold">
            {user.userName}
          </h1>
          <div className="border-edge mt-2 h-12.5 border-t py-1 pl-4 sm:h-9">
            <FlipSentences
              className="text-muted-foreground font-mono text-sm text-balance"
              variants={{
                initial: { y: -10, opacity: 0 },
                animate: { y: -1, opacity: 1 },
                exit: { y: 10, opacity: 0 },
              }}
            >
              {user.flipSentences}
            </FlipSentences>
          </div>
        </div>
      </div>
      {/* text section */}
      <Separator className="my-4" />
      <div className="grid grid-cols-1 gap-4 space-y-1 sm:grid-cols-2">
        {/* -------tech stack------- */}
        <div className="flex items-center space-x-3">
          <div className="border-muted-foreground/15 bg-muted ring-edge ring-offset-background text-foreground/75 hover:bg-muted/50 hover:text-foreground/90 flex size-8 items-center justify-center rounded-lg border p-1 transition-colors">
            <CodeXmlIcon size={"2em"} className="text-muted-foreground" />
          </div>
          <span>Full stack developer</span>
        </div>
        {/* -------tech stack------- */}
        <div className="flex items-center space-x-3">
          <div className="border-muted-foreground/15 bg-muted ring-edge ring-offset-background text-foreground/75 hover:bg-muted/50 hover:text-foreground/90 flex size-8 items-center justify-center rounded-lg border p-1 transition-colors">
            <MapPin size={"2em"} className="text-muted-foreground" />
          </div>
          <span>Pune, India</span>
        </div>
        {/* -------tech stack------- */}
        <div className="flex items-center space-x-3">
          <div className="border-muted-foreground/15 bg-muted ring-edge ring-offset-background text-foreground/75 hover:bg-muted/50 hover:text-foreground/90 flex size-8 items-center justify-center rounded-lg border p-1 transition-colors">
            <Globe size={"2em"} className="text-muted-foreground" />
          </div>
          <span>mayurshelke.dev</span>
        </div>
        {/* -------tech stack------- */}
        <div className="flex items-center space-x-3">
          <div className="border-muted-foreground/15 bg-muted ring-edge ring-offset-background text-foreground/75 hover:bg-muted/50 hover:text-foreground/90 flex size-8 items-center justify-center rounded-lg border p-1 transition-colors">
            <Mail size={"2em"} className="text-muted-foreground" />
          </div>
          <span>mayurshelke.dev@gmail.com</span>
        </div>
        {/* <p className="text-muted-foreground mt-2 text-lg"></p> */}
      </div>
    </div>
  );
};

export default Hero;
