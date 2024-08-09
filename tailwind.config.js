import { withUt } from "uploadthing/tw";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default withUt({
  // Your existing Tailwind config
  content: ["./src/**/*.{ts,tsx,mdx}"],
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/button.js",
    "./node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        box: " 4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        contact: "0px 2px 2px 0px #0000002E",
        header: "0px 2px 1.9px 0px #00000045;",
        course: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
        exel: " -1px 2px 3.1px 0px #00000040;",
      },
      borderWidth: {
        0.4: "0.5px",
        0.3: "0.3px",
      },
      colors: {
        dark: "#c6aba6",
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
