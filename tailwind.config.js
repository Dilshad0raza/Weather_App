/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        '20': 'repeat(2, minmax(1fr, 2fr))',
      }
    },
  },
  plugins: [],
}

