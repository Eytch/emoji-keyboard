/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      main: '#5437DC',
      gradientMain: '#7456FF',
      secondary: '#232828',
      white: '#ffffff',
      grey: '#C5C5C5',
      midnight: '#161819',
    },
  },
  plugins: [],
};
