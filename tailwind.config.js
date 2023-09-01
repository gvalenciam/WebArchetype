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
        Roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      primary: "#FF0000",
      secondary: "#00FF00",
      action: "#0000FF",
      txt: "#222222",
      subtxt: "#444444",
      white: "#FFFFFF",
      black: "#000000",
    },
  },
  plugins: [],
};
