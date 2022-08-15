/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'coding-background': "url('/src/assets/coding-background.png')",
      },
    },
  },
  plugins: [],
};
