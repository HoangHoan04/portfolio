import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        insta: {
          bg: "#ffffff",
          darkBg: "#000000",
          border: "#dbdbdb",
          darkBorder: "#262626",
          textGrey: "#737373",
          linkBlue: "#00376b",
          buttonBlue: "#0095f6",
        },
      },
    },
  },
  plugins: [],
};
export default config;
