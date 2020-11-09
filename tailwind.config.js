module.exports = {
  purge: [],
  theme: {
    colors: {
      white: '#FFFFFF',
      light_grey: '#D2D2D2',
      input_bg: '#F3F3F3',
      black: '#333333',
      opaque_white: 'rgba(255,255,255,0.05)',
      navy: '#0F2D52',
      mustard: '#CD8215',
      blue: '#005AAA',
      opaque_navy: '#293A5B'
    },
    fontFamily: {
      'sans': ['"Neutrif Studio Regular"', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      backgroundOpacity: {
        '10': '0.1',
        '20': '0.2',
        '30': '0.3',
        '40': '0.4',
        '50': '0.5',
        '60': '0.6',
        '70': '0.7',
        '80': '0.8',
        '90': '0.9',
        '100': '1',
}
    },
  },
  variants: {
    display: ['responsive', 'hover', 'focus', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    visibility: ['responsive', 'hover', 'focus', 'group-hover'],
    transitionProperty: ['responsive', 'hover', 'focus'],
    cursor: ['responsive', 'hover', 'focus'],
    padding: ['responsive', 'hover', 'focus'],
  },
  plugins: [
    require('@tailwindcss/ui'),
  ],
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
