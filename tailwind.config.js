/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        ghostwhite: '#FAF7FF',
        limedspruce: '#37474F',
        lavenderindigo: '#9951FF',
        'lavenderindigo-80': '#8047D2',
        electricindigo: '#6900FF',
        rubberduckyellow: '#FFD700'
      }
    },
  },
  plugins: [],
}