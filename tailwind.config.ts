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
        teal: {
          DEFAULT: '#008080', // Shiny teal color
        },
        silver: {
          DEFAULT: '#C0C0C0', // Silver color
        },
        white: '#FFFFFF', // White color
        black: '#000000', // Black color
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Custom font family
      },
      fontSize: {
        '2xl': '1.5rem', // Custom heading size
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem', // Default padding for container
          sm: '2rem', // Padding for small screens (sm)
          lg: '4rem', // Padding for large screens (lg)
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

export default config;