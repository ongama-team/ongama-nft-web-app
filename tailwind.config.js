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
        mobile: { max: "649px" },
        "min-xl": { max: "1280px" },
        "min-lg": { max: "1024px" },
        "min-md": { max: "838px" },
      },
      fontFamily: {
        ibemPlexSans: ['"IBM Plex Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
