"use client";
import Link from "next/link";
import { useState } from "react";
import ModeToggle from "../providers/theme-toggle";
import { Menu, X } from "lucide-react";
import { OPTIONS, options } from "@/features/data/header-options";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="border-border bg-background/80 sticky top-0 z-50 flex w-full items-center justify-between border-b px-4 py-4 backdrop-blur-md sm:py-5 md:px-6">
      <Link
        href="#home"
        className="text-foreground text-base font-bold tracking-tight transition-opacity duration-200 hover:opacity-75 sm:text-lg"
      >
        <span className="text-primary">M</span>ayur Shelke
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex md:items-center md:gap-1">
        {options.map((option: OPTIONS) => (
          <Link
            key={option.value}
            href={`/#${option.value}`}
            className="text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg px-3 py-1.5 text-sm font-medium transition-colors"
          >
            {option.label}
          </Link>
        ))}
        <div className="ml-2">
          <ModeToggle />
        </div>
      </div>

      {/* Mobile: theme toggle + hamburger */}
      <div className="flex items-center gap-2 md:hidden">
        <ModeToggle />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="border-border hover:bg-muted flex size-8 items-center justify-center rounded-lg border transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="bg-background border-border absolute top-full right-0 left-0 border-b shadow-md md:hidden">
          <div className="flex flex-col px-4 py-2">
            {options.map((option) => (
              <Link
                key={option.value}
                href={`/#${option.value}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg px-2 py-2.5 text-sm font-medium transition-colors"
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
