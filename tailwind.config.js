module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "649px",
        md: "650px",
        min_xl: { max: "1280px" },
        min_lg: { max: "1024px" },
        min_md: { max: "838px" },
      },
      fontFamily: {
        IBEM_Plex_Sans: ['"IBM Plex Sans"', "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
