import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customOkColor: 'oklch(30.698% 0.039 171.364)',
        darkOklch: 'oklch(18.522% 0.007 17.911)',
        okColor: 'oklch(72.06% 0.191 231.6)',
        dataColor: 'oklch(20.84% 0.008 17.911)',
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [ "cyberpunk",],
  },
}
