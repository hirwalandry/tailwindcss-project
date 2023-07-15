const openVariant = require("./plugins/openVariant");
const outlineSolid = require("./plugins/outlineSolid");
const animationDelay = require("./plugins/animationDelay")
const tableCaption = require("./plugins/tableCaption")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        wavey: {
          "0%, 100%": {
            transform: "scaleY(0.5)",
          },
          "50%": {
            transform: "scaleY(1.5)",
          },
        },
      },
      animation: {
        wavey: "wavey 1000ms linear infinite",
      },
    },
  },
  plugins: [openVariant, outlineSolid, animationDelay, tableCaption],
};
