/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,handlebars}"],
  theme: {
    extend: {
      colors: {
        primary: '#334155',
        secondary: '#7dd3fc',
        accent: '#cbd5e1'
      },
      fontFamily: {
        blox: ['blox2', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
}