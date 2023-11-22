/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*/.{html, js}', 'index.html', './**/*.{html, js}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins',
      },
      animation: {
        pop: 'pop 200ms ease-in-out'
      },
      keyframes: {
        pop: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' }
        }
      }
    },
  },
  plugins: [],
}

