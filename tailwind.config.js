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
        primaryBlue: "#0e469b",
        secondaryGray: '#f0f0f0',
        hoverGray: '#d9d9d9'
      },
      colors: {
        primaryBlack: "#2b2626",
        primaryGrayIcons: '#454545'
      }
    },
  },
  plugins: [],
}