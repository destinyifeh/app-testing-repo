/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,ts,tsx,jsx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#f0f0f0',
          200: '#e0e0e0',
          300: '#d0d0d0',
        },
      },
      fontFamily: {
        body: ['Roboto-Regular'],
        bold: ['Roboto-Bold'],
        semiBold: ['Roboto-Medium'],
        thin: ['Roboto-Thin'],
      },
      // spacing: {
      //   px: '1px',
      //   0: '0',
      //   1: '0.25rem',
      //   2: '0.5rem',
      //   3: '0.75rem',
      //   4: '1rem',
      //   5: '1.25rem',
      //   6: '1.5rem',
      //   8: '2rem',
      //   10: '2.5rem',
      //   12: '3rem',
      //   16: '4rem',
      //   20: '5rem',
      //   24: '6rem',
      //   32: '8rem',
      //   40: '10rem',
      //   48: '12rem',
      //   56: '14rem',
      //   64: '16rem',
      // },
    },
  },
  plugins: [],
};
