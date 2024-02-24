/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '#D0BFFF'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'pattaya': ['Pattaya', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors :{
        mainBg: '#0f172a',
        lightWhite: 'rgb(246,246,248)',
        softBg :'#1f273a',
        bgLight :'#303841',
        txtColor :'#ddd',
        softTxt : '#a6a6a6',
        purple :'#8E05C2',
        orange :'#FF9B50'
      }
    
    },
  },
  plugins: [],
}

