import Link from "next/link";
import React from "react";
import ModeToggle from "../providers/theme-toggle";
import Image from "next/image";
type OPTIONS = {
  label: string;
  value: string;
};
const options: OPTIONS[] = [
  { label: "Home", value: "home" },
  { label: "About", value: "about" },
  { label: "Projects", value: "projects" },
  { label: "Contact", value: "contact" },
];
const Header = () => {
  return (
    <div className="sticky top-0 flex items-center justify-between overflow-hidden bg-transparent px-2 py-6 backdrop-blur-xs">
      {/* image  */}

      <div className="rounded-xl">

        <img
          src="/MS-B.png"
          alt="Logo"
          className="transition-ease-in-out h-12 w-12 rounded-md object-top duration-300 hover:scale-105 dark:hidden"
        />
        <img
          src="/MS-w.png"
          alt="Logo"
          className="transition-ease-in-out hidden h-12 w-12 rounded-md object-top duration-300 hover:scale-105 dark:block"
        />
      </div>
      {/* nav  */}
      <div className="flex">
        {options.map((option) => (
          <Link
            key={option.value}
            href={`/#${option.value}`}
            className="text-foreground hover:text-foreground mr-4 text-lg font-medium"
          >
            {option.label}
          </Link>
        ))}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
