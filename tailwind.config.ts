import daisyui from "daisyui";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#007bff",
          accent: "#202020",
          "accent-content": "#f2f2f2",
          "base-100": "#FFFFFF",
          "base-content": "#181818",
          success: "#28a745",
          warning: "#ffc107",
          info: "#17a2b8",
          error: "#dc3545",
        },
      },
    ],
  },
  plugins: [daisyui],
};
export default config;
