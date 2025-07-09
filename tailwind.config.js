const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'rei-blue': '#6aa9ff',
        'rei-gray': '#e6e6e6',
        'nerv-red': '#ff2e63',
        'entry-white': '#ffffff',
        'eva-dark': '#1a1a1a'
      },
      fontFamily: {
        rei: ['"Zen Maru Gothic"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};