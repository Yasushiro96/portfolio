/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center : true,
      padding : '16px',
    },
    extend: {
      colors: {
        main : '#0c4a6e'
      },
      screens : {
        '2xl' : '1320px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
