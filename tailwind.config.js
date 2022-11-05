/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        primary: '#1f2937',
        secondary: '#4b5563',
      },
      screens: {
        '2xl': '1820px',
      },
    },
  },
  plugins: [],
};
