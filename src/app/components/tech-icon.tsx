import Image from "next/image";

const TechIcon = ({ img, tech }: { img: string; tech: string }) => {
  return (
    <div className="bg-muted-foreground/13 border-muted-foreground/13 ml-1 inline-flex items-center gap-1 rounded-sm border border-dotted p-1">
      <Image
        src={img}
        // src={"/TS.png"}
        alt="img"
        width={15}
        height={5}
        className="size-3"
      />
      <span className="text-primary text-xs font-semibold">{tech}</span>
      {/* <span className="text-xs font-semibold">Typescript</span> */}
    </div>
  );
};

export default TechIcon;
