module.exports = {
  purge: [],
  theme: {
    colors: {
      white: '#FFFFFF',
      navy: '#0F2D52',
      mustard: '#CD8215',
      blue: '#005AAA',
    },
    fontFamily: {
      'sans': ['"Neutrif Studio Regular"', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ]
}
