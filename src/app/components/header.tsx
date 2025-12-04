import Link from "next/link";
import React from "react";
import ModeToggle from "../providers/theme-toggle";
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
    <div className="sticky top-0 mx-auto flex max-w-3xl items-center justify-between overflow-hidden bg-transparent px-2 py-6 backdrop-blur-xs">
      {/* image  */}

      <div className="rounded-xl bg-black">
        <img
          src="/MAYUR_photo.jpg"
          alt="Logo"
          className="object-fit h-15 w-20 rounded-md object-top"
        />
      </div>
      {/* nav  */}
      <div className="flex ">
        {options.map((option) => (
          <Link
            key={option.value}
            href={`/#${option.value}`}
            className="mr-4 text-lg font-medium text-gray-700 hover:text-gray-900"
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
