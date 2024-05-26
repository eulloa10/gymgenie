import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        genie: {
          light: '#6B7280', // Adjust colors as needed
          DEFAULT: '#4B5563',
          dark: '#374151',
        },
      },
    },
  },
  plugins: [],
};
export default config;
