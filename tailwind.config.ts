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
        fairy: '#e9e',
        pokeballred: '#FF1C1C',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        swell: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'delayed-fill': {
          '100%': { transform: 'translateY(-100%)' },
        }
      },
      animation: {
        bounce: 'bounce 0.2s',
        swell: 'swell 0.4s ease-in-out 1',
        'delayed-fill': 'delayed-fill 1s ease-out 1 0.5s forwards'
      },
    },
  },
  plugins: [],
};
export default config;
