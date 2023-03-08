/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: 'true',
      padding: '0.9rem',
    },
    extend: {
      letterSpacing: {
        normal: '0.08rem',
        wide: '.025em',
        wider: '.05em',
        widest: '3px',
      },
    },
  },
  plugins: [],
}