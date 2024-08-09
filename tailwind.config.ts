import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        primary: ["Poppins"]
      },
      boxShadow: {
        'left': '-4px 0px 8px rgba(0, 0, 0, 0.2)', 
      },
      keyframes: {
        animate: {
          '0%': {
            borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%',
          },
          '50%': {
            borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%',
          },
          '100%': {
            borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%',
          },
        },
      },
      animation: {
        animate: 'animate 5s ease-in-out infinite',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
};
export default config;
