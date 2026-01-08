"use client";
import Link from "next/link";
import { useState } from "react";
import ModeToggle from "../providers/theme-toggle";
import { Menu, X } from "lucide-react";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="border-border bg-background/40 sticky top-0 z-50 flex w-full items-center justify-between border-b px-2 py-6 backdrop-blur-sm sm:py-6 md:px-6">
      {/* image  */}
      <div className="rounded-xl">
        <img
          src="/MS-B.png"
          alt="Logo"
          className="h-9 w-9 rounded-md object-top transition-all duration-300 hover:scale-105 sm:h-10 sm:w-10 md:h-12 md:w-12 dark:hidden"
        />
        <img
          src="/MS-w.png"
          alt="Logo"
          className="hidden h-9 w-9 rounded-md object-top transition-all duration-300 hover:scale-105 sm:h-10 sm:w-10 md:h-12 md:w-12 dark:block"
        />
      </div>

      {/* Desktop nav */}
      <div className="hidden md:flex md:items-center md:gap-4">
        {options.map((option: OPTIONS) => (
          <Link
            key={option.value}
            href={`/#${option.value}`}
            className="text-foreground hover:text-foreground text-sm font-medium transition-colors md:text-base"
          >
            {option.label}
          </Link>
        ))}
        <ModeToggle />
      </div>

      {/* Mobile menu button and theme toggle */}
      <div className="flex items-center gap-2 md:hidden">
        <ModeToggle />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="border-border hover:bg-muted flex size-8 items-center justify-center rounded-md border transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="bg-background border-border absolute top-full right-0 left-0 border-b md:hidden">
          <div className="flex flex-col gap-2 px-4 py-3 sm:gap-3 sm:py-4">
            {options.map((option) => (
              <Link
                key={option.value}
                href={`/#${option.value}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-foreground py-2 text-sm font-medium transition-colors sm:text-base"
              >
                {option.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
