/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'first': '#F45502', 
        'alt': '#FF9900', 
        'bg': '#e2e0e6', 
        'dbg': '#2a2a35', 
        'body': '#ffffff', 
        'sbody': '#414353', 
        'txt': '#343339',
        'altxt': '#424145', 
        'dtxt': '#cccdd0', 
        'daltxt': '#d5d5e2', 
      },
    },
  },
  plugins: [],
}
