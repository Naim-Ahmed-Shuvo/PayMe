const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    "./components/**/*.{js,ts,jsx,tsx}",
     "./pages/**/*.{js,ts,jsx,tsx}",
     "./layout/**/*.{js,ts,jsx,tsx}",
     "./overmind/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '300px',
      ...defaultTheme.screens,
      // => @media (min-width: 640px) { ... }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
