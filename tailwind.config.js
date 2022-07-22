/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      button: '#0BCC67',
      primary: '#101010',
      secondary: '#161D26',
      // primarytext : '#333333',
      primarytext : '#FFFFFF',
      secondarytext: '#F5F5F5',
      // transparent : 'rgba(0,0,0,0.2)'
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
