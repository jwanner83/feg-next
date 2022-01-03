const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
		screens: {
			xs: '0px',
			sm: '600px',
			md: '900px',
			lg: '1200px',
			xl: '1920px',
			max: '1600px'
		},
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
        'index-image': '60vh',
        'mobile-index': '40vh'
      },
      colors: {
        dark: '#171717',
        'info-warn': '#fff9d5',
        'info-danger': '#fde5e5',
        'info-neutral': '#e9f4ff'
      },
      gradientColorStops: (theme) => ({
        'black-transparent': '#000000d6'
      }),
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.4s'
      },
      transitionProperty: {
        'height': 'height'
      }
    },
    minHeight: {
      post: '60vh'
    }
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme('fontSize.4xl'), fontFamily: 'Playfair Display' },
        h2: { fontSize: theme('fontSize.2xl'), fontFamily: 'Playfair Display' },
        h3: { fontSize: theme('fontSize.lg'), fontFamily: 'Playfair Display' }
      })
    }),
    require('@tailwindcss/line-clamp')
  ]
}
