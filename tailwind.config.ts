import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        bug: "rgb(142, 165, 10)",
        dark: "rgb(29, 29, 29)",
        dragon: "rgb(54, 0, 202)",
        electric: "rgb(255, 204, 51)",
        fairy: "rgb(255, 152, 169)",
        fighting: "rgb(167, 30, 30)",
        fire: "#f42",
        flying: "rgb(142, 227, 255)",
        ghost: "rgb(65, 63, 129)",
        grass: "rgb(33, 194, 19)",
        ground: "rgb(206, 175, 0)",
        ice: "#6cf",
        normal: "#aa9",
        poison: "#800080",
        psychic: "rgb(221, 54, 82)",
        rock: "rgb(148, 148, 101)",
        steel: "rgb(199, 199, 199)",
        water: "rgb(17, 132, 247)",
      }
    },
    screens: {
      'xs': '520px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
export default config
