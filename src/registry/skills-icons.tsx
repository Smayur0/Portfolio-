import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getTechIcon } from "@/lib/utils";

type Props = {
  icons: string[];
};
const SkillsIcons = ({ icons }: Props) => {


  const ImagesForIcons = icons.reduce(
    (acc: { icon: string; label: string }[], icon) => {
      const imgSrc = getTechIcon(icon.toLowerCase());
      acc.push({ icon: imgSrc, label: icon });
      return acc;
    },
    [],
  );

  return (
    <div className="mt-4">
      {ImagesForIcons.map(({ icon, label }, index) => (
        <Tooltip key={index}>
          <TooltipTrigger className="mr-2 inline-block">
            <img src={icon} alt="" className="h-7 w-7" />
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-sm font-semibold">{label}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
};

export default SkillsIcons;
