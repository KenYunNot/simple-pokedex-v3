import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        normal: '#aa9',
        fire: '#f42',
        water: '#39f',
        electric: '#fc3',
        grass: '#7c5',
        ice: '#6cf',
        fighting: '#b54',
        poison: '#a59',
        ground: '#db5',
        flying: '#89f',
        psychic: '#f59',
        bug: '#ab2',
        rock: '#ba6',
        ghost: '#66b',
        dragon: '#76e',
        dark: '#754',
        steel: '#aab',
        fairy: '#e9e'
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      },
      animation: {
        bounce: 'bounce 0.2s',
      },
    },
  },
  plugins: [],
};
export default config;
