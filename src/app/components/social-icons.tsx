import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";

type SocialIconProps = {
  icon: React.ReactNode;
  onClick?: () => void;
  iconName: string;
};

export const SocialIcon: React.FC<SocialIconProps> = ({
  icon,
  onClick,
  iconName,
}) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={onClick}
          className="border-muted-foreground/20 bg-muted/40 text-muted-foreground hover:bg-background hover:text-foreground hover:ring-offset-background flex size-8 items-center justify-center rounded-lg border transition-all hover:scale-105 hover:ring-1 hover:ring-blue-300 hover:ring-offset-2"
        >
          {icon}
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{iconName}</p>
      </TooltipContent>
    </Tooltip>
  );
};
