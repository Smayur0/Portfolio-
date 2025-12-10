// "use client";
// import React, { useEffect } from "react";
// import { MoonIcon, SunIcon } from "../../components/icons";
// import { useTheme } from "next-themes";

// const ModeToggle = () => {
//   const { theme, setTheme } = useTheme();
//   const [systemTheme, setSystemTheme] = React.useState<"light" | "dark">(
//     "light",
//   );
//   const SWITCH_THEME = () => {
//     switch (theme) {
//       case "light": {
//         setTheme("dark");
//         return;
//       }
//       case "dark": {
//         setTheme("light");
//         return;
//       }
//       case "system": {
//         setTheme(systemTheme === "dark" ? "light" : "dark");
//         return;
//       }
//     }
//   };

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
//     setSystemTheme(mediaQuery.matches ? "dark" : "light");

//     const handleChange = (e: MediaQueryListEvent) => {
//       setSystemTheme(e.matches ? "dark" : "light");
//     };

//     mediaQuery.addEventListener("change", handleChange);

//     return () => mediaQuery.removeEventListener("change", handleChange);
//   }, []);
//   return (
//     <button
//       className="flex size-8 cursor-pointer items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-800"
//       onClick={SWITCH_THEME}
//     >
//       <SunIcon className="inset-0 m-auto size-4 shrink-0 transition-all duration-300 dark:hidden" />
//       <MoonIcon className="inset-0 m-auto hidden size-4 shrink-0 transition-all duration-300 dark:block" />
//     </button>
//   );
// };

// export default ModeToggle;

"use client";
import React, { useEffect } from "react";
import { MoonIcon, SunIcon } from "../../components/icons";
import { useTheme } from "next-themes";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [systemTheme, setSystemTheme] = React.useState<"light" | "dark">(
    "light",
  );

  const SWITCH_THEME = (event: React.MouseEvent<HTMLButtonElement>) => {
    const x = event.clientX;
    const y = event.clientY;

    // Set the click position as CSS variables
    document.documentElement.style.setProperty("--x", `${x}px`);
    document.documentElement.style.setProperty("--y", `${y}px`);

    // Check if browser supports View Transitions
    if (!document.startViewTransition) {
      performThemeSwitch();
      return;
    }

    // Start the transition with animation
    document.startViewTransition(() => {
      performThemeSwitch();
    });
  };

  const performThemeSwitch = () => {
    switch (theme) {
      case "light": {
        setTheme("dark");
        return;
      }
      case "dark": {
        setTheme("light");
        return;
      }
      case "system": {
        setTheme(systemTheme === "dark" ? "light" : "dark");
        return;
      }
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemTheme(mediaQuery.matches ? "dark" : "light");

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <button
      className="flex size-8 cursor-pointer items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-800"
      onClick={SWITCH_THEME}
    >
      <SunIcon className="inset-0 m-auto size-4 shrink-0 transition-all duration-300 dark:hidden" />
      <MoonIcon className="inset-0 m-auto hidden size-4 shrink-0 transition-all duration-300 dark:block" />
    </button>
  );
};

export default ModeToggle;
