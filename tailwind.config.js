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
      primarytext : '#FFFFFF',
      secondarytext: '#F5F5F5',
    },
    fontFamily:{
      'baloo': ['Baloo2', 'cursive'],
      'merri': ['Merriweather Sans', 'sans-serif'],
      'noto': ['Noto Sans', 'sans-serif'],
      'ptsans': ['PT Sans', 'sans-serif'],
    },
    screens: {
      'phone': '300px',
      'normalphone': '355px',
      'minitablet':'450px',
      'tablet': '700px',
      'minilaptop':'850px',
      'laptop': '1024px',
    },
    extend: {},
  },
  plugins: [],
}
