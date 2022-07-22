/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      button: '#E17217',
      primary: '#2B2A2F',
      secondary: '#27262B',
      // primarytext : '#333333',
      primarytext : '#FFFFFF',
      secondarytext: '#E17217',
      transparent : 'rgba(0,0,0,0.2)'
    },
    fontFamily:{
      'baloo': ['Baloo2', 'cursive'],
      'merri': ['Merriweather Sans', 'sans-serif'],
      'noto': ['Noto Sans', 'sans-serif'],
      'ptsans': ['PT Sans', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
