module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/img/watch.jpg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
