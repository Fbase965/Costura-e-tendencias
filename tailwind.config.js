/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
