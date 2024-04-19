/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': 'poppins',
        'Inter' : 'Inter'
      },
      backgroundSize: {
        '100': '100% 100%'
      },
      backgroundImage:{
        'btn': 'linear-gradient(107.9deg, #0C5FD1 1.25%, #8703C5 93.71%)',
        'text':'linear-gradient(107.9deg, #0C5FD1 1.25%, #8703C5 93.71%)',
        'border': ' linear-gradient(107.9deg, #0C5FD1 1.25%, #8703C5 93.71%)',
        'btnEx' : 'linear-gradient(107.9deg, #0C5FD1 1.25%, #8703C5 93.71%)'
      }
    },
  },
  plugins: [],
}

