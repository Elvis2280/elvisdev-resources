/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './public/**/*.html',
  ],
  plugins: [],
  theme: {
    colors: {
      mainBlack: '#222F2E',
      mainBlackLight: '#293635',
      main: {
        50: '#EFFEFB',
        100: '#C7FFF5',
        200: '#8FFFEB',
        300: '#4FF9E0',
        400: '#1BE6CE',
        500: '#03DAC5',
        600: '#00A296',
        700: '#048179',
        800: '#096661',
        900: '#0D5450',
      },
    },
  },
};
