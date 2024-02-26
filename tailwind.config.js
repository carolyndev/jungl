/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './features/**/*/components/**/*.{js,ts,jsx,tsx}',
    './features/**/*/pages/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Comfortaa', 'Lato', '"Helvetica Neue"', 'Helvetica', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    colors: {
      transparent: 'transparent',
      primary: {
        darkGreen: '#173932',
        green: '#0d402a',
        lightgreen: '#6dac7b',
      },
      tan: '#E8E3E3',
      grayscale: {
        black: '#333333',
        lightGray: '#E0E0E0',
        white: '#FCFCFC',
      }
    }
  },
  plugins: [],
};
