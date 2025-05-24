/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          750: '#2D3748', // Custom color between gray-700 and gray-800
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.blue.600'),
              '&:hover': {
                color: theme('colors.blue.500'),
              },
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.300'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [],
};