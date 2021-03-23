module.exports = {
  purge: {
    mode: 'all',
    preserveHtmlElements: true,
    content: [
      './templates/*.twig',
      './templates/blocks/partials/*.twig',
      './templates/partials/*.twig',
      './templates/partials/**/*.twig',
      './templates/blocks/*.twig',
      './templates/**/*.twig'
    ],
  },
  theme: {
    colors: {
      white: '#FFFFFF',
      off_white: '#f4f4f4',
      input_bg: '#F0F0F0',
      light_grey: '#D2D2D2',
      light_navy: '#E8EBEE',
      dark_opaque: '#e4e4e4',
      black: '#333333',
      opaque_white: 'rgba(255,255,255,0.05)',
      navy: '#0F2D52',
      mustard: '#CD8215',
      blue: '#005AAA',
      opaque_navy: '#293A5B',
      body_copy: '#5E7694',
      "red": {
        "50": "#f44c4c",
        "100": "#ea4242",
        "200": "#e03838",
        "300": "#d62e2e",
        "400": "#cc2424",
        "500": "#c21a1a",
        "600": "#b81010",
        "700": "#ae0606",
        "800": "#a40000",
        "900": "#9a0000"
      }
    },
    fontFamily: {
      'sans': ['Neutrif', 'Helvetica', 'Arial', 'sans-serif'],
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
