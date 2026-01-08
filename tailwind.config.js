/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'font-tangerine',
    'font-geist',
    'font-geist-mono'
  ],
  theme: {
    extend: {
      fontFamily: {
        'montesrrat': ["var(--font-montesrrat)", "sans-serif"],
        'tangerine': ["var(--font-tangerine)", "cursive"],
      },
    },
  },
  plugins: [],
};
