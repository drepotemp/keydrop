import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        bp: "1046px", // Custom breakpoint for 1046px
      },

       keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 0px #FFCB77' },
          '50%': { boxShadow: '0 0 14px #FFCB77, 0 0 12px #FFCB77' },
        },
      },
      animation: {
        glow: 'glow 1.5s infinite ease-in-out',
      },
    },
  },
  plugins: [],
} satisfies Config;
