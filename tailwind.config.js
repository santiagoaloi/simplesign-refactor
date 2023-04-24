/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],

  darkMode: 'class', // Enable the "class" strategy for dark mode

  // This is needed to allow the usage
  // of classes in Vuetfiy Components.
  important: '#app'
}
