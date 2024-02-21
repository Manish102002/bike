/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        darkBlack: '#0A0A0A',
        textColor: '#E5E3E3',
        brown:'#2D2D2D',
        darkbrown:"#414141",
        darkYellow: "#A6E22E",
        lightYellow: '#759F20'
      },
      backgroundColor:{
        bgDarkYellow: "#A6E22E",
        bgLightYellow: '#759F20'
      }
    },
  },
  plugins: [],
}

