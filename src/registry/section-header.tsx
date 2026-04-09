import { ReactNode } from "react";

type SectionHeaderProps = {
  icon: ReactNode;
  label: string;
};

const SectionHeader = ({ icon, label }: SectionHeaderProps) => {
  return (
    <div className="mb-4 flex items-center gap-2 sm:mb-5 sm:gap-3 md:mb-6">
      <div className="bg-primary/10 text-primary flex size-8 items-center justify-center rounded-lg sm:size-9 md:size-10">
        {icon}
      </div>
      <h2 className="text-foreground text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl">
        {label}
      </h2>
    </div>
  );
};

export default SectionHeader;
