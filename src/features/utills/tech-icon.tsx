import Image from "next/image";

const TechIcon = ({ img, tech }: { img: string; tech: string }) => {
  return (
    <div className="border-muted-foreground/13 bg-muted-foreground/13 ml-1 inline-flex items-center gap-0.5 rounded-sm border border-dotted p-0.5 sm:gap-1 sm:p-1">
      <Image
        src={img}
        alt={tech}
        width={15}
        height={15}
        className="size-2 sm:size-2.5 md:size-3"
      />
      <span className="text-primary text-[9px] font-semibold sm:text-[10px] md:text-xs">
        {tech}
      </span>
    </div>
  );
};

export default TechIcon;
