module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // ✅ MAKE Geist Mono GLOBAL
        sans: ["var(--font-geist-mono)", "monospace"],

        // ✅ Optional named fonts
        geist: ["var(--font-geist-sans)"],
        geistmono: ["var(--font-geist-mono)"],
        inter: ["var(--font-inter)"],
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};
