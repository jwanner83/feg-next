const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'serif': ['Playfair Display', 'serif']
    },
    extend: {
      gridTemplateColumns: {
       'archive': '3fr 4fr',
      }
    }
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.4xl'), fontFamily: 'Playfair Display' },
        'h2': { fontSize: theme('fontSize.2xl'), fontFamily: 'Playfair Display' },
        'h3': { fontSize: theme('fontSize.lg'), fontFamily: 'Playfair Display' },
      })
    })
  ]
}
