/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*/.{html, js}', 'index.html', './**/*.{html, js}'],
  theme: {
    extend: {
      fontFamily : {
        poppins : 'Poppins',
      },
      animation : {
        download : 'download 1100ms ease-in-out infinite'
      },
      keyframes : {
        download : {
          '0%' : {transform : 'translateY(0px)'},
          '50%' : {transform : 'translateY(3.5px)'},
          '100%' : {transform : 'translateY(7px)'}
        }
      }
    },
  },
  plugins: [],
}

