/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#b29a81',
        'secondary': '#ef9a4d',
        'tertiary': '#ef2616'
      },
      fontFamily: {
        Poppins: ['Poppins'],
      }
    },
  },
  plugins: [],
}

