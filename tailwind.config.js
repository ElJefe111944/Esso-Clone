/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Open Sans"', 'sans-serif']
      },
      backgroundColor: {
        primaryGray: "#e0e0e0",
        primaryBlue: "#0e469b"
      },
      colors: {
        primaryBlack: "#2b2626",
      }
    },
  },
  plugins: [],
}