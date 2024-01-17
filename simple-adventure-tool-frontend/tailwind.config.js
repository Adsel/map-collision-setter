/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: true,
  content: [],
  theme: {
    extend: {
      colors: {
        'primary-1': '#854c30',
        'primary-2': '#d27d2c',
        'primary-3': '#dad45e',
      },
      fontFamily: {
        sans: ['Chakra Petch', 'sans-serif'],
        serif: ['Chakra Petch', 'serif'],
      }
    },
  },
  plugins: [],
}

