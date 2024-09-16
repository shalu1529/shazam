/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Include all JS/JSX/TS/TSX files inside the src folder
  ],
  theme: {
    extend: {
      colors: {
        'black-rgba': 'rgba(var(--color-black-rgb), 0.7)',
      },
    },
  },
  plugins: [],
};