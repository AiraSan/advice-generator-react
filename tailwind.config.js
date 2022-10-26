/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          2: 'hsl(218, 23%, 16%)',
          1: 'hsl(217, 19%, 24%)'
        },
        'white': 'hsl(193, 38%, 86%)',
        'neon': 'hsl(150, 100%, 66%)',
      },
      fontFamily: {
        'display': ['Manrope', 'sans-serif']
      },
      fontSize: {
        'base': '1.75rem'
      },
      letterSpacing: {
        'base': '0.1875rem'
      },
      boxShadow: {
        'base': '0px 0px 30px 0px hsl(150, 100%, 66%)'
      },
      animation:{
        rotate: 'rotate 0.5s infinite cubic-bezier(0.455, 0.030, 0.515, 0.955) both'
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotateY(0)' },
          '100%': { transform: 'rotateY(360deg)' }
        }
      }
    },
  },
  plugins: [],
}
