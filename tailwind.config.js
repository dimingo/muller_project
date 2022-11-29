
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Manrope','sans-serif'],
      'sans-serif': ['Inter','sans-serif'],

    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "8rem",
      "9x1": "9rem",


    },
    container: {
      center: true,
    },

    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}