/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Museo: ["Museo", ...defaultTheme.fontFamily.sans],
        Inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      primary: "#FF0000",
      secondary: "#00FF00",
      action: "#0000FF",
      btnGradientStart: "#3DC694",
      btnGradientEnd: "#38B1D7",
      txt: "#313131",
      textWhiteLight: "#BCBCBC",
      subtxt: "#444444",
      white: "#FFFFFF",
      black: "#000000",
    },
  },
  plugins: [],
};
