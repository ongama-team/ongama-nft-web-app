const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      ...colors,
      darkPrimary: "#041C32",
      darkLight: "#04293A",
    },
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
        ibmPlexSans: ["IBM Plex Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
