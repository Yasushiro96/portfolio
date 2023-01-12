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
        primary : '#ffe4e6',
        secondary : '#881337',
        warna3 : '#71717a',
        dark: '#0f172a',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
