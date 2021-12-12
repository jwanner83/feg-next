const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      serif: ['Playfair Display', 'serif']
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      huge: '10rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem'
    },
    extend: {
      gridTemplateColumns: {
        archive: '3fr 4fr'
      },
      margin: {
        '-2/4': '-50%'
      },
      height: {
        index: '70vh',
        'index-image': '60vh'
      },
      colors: {
        dark: '#171717'
      }
    },
    minHeight: {
      post: '60vh'
    },
    gradientColorStops: (theme) => ({
      'black-transparent': '#000000d6'
    })
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme('fontSize.4xl'), fontFamily: 'Playfair Display' },
        h2: { fontSize: theme('fontSize.2xl'), fontFamily: 'Playfair Display' },
        h3: { fontSize: theme('fontSize.lg'), fontFamily: 'Playfair Display' }
      })
    })
  ]
}
