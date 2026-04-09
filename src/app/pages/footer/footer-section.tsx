import { Github, Linkedin, Twitter } from "lucide-react";
import { user } from "@/features/data/user";

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-border pb-8 pt-6">
      <div className="flex flex-col items-center gap-4">
        {/* Social links */}
        <div className="flex items-center gap-4">
          <a
            href={user.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="size-4" />
          </a>
          <a
            href={user.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href={user.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="X / Twitter"
          >
            <Twitter className="size-4" />
          </a>
        </div>

        <div className="flex flex-col items-center gap-1">
          <p className="text-muted-foreground text-sm">
            Designed & built by{" "}
            <span className="text-foreground font-semibold">Mayur Shelke</span>
          </p>
          <p className="text-muted-foreground/60 text-xs">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
