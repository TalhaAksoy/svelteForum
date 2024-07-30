/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode : 'class',
  theme: {
    extend: {
      colors: {
        dark : {
          primary: {
            100: '#892CDC',
            200: '#BC6FF1',
            300: '#fdf6fd',
          },
          accent: {
            100: '#D9ACF5',
            200: '#fff4ff',
          },
          text: {
            100: '#EEEEEE',
            200: '#FDEBED',
          },
          bg: {
            100: '#222831',
            200: '#393E46',
            300: '#454e59',
          },
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "dark", "cupcake" , "synthwave" , "cyberpunk"],
  },
};