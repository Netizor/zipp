
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        brand: '#fc6104',
        eco: '#2e7d32' /* green accent for ecology */
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
        heading: ['Roboto', 'sans-serif']
      }
    }
  },
  plugins: []
}
