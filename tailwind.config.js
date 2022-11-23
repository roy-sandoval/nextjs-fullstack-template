/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    borderRadius: {
      '100vw': '100vw',
      full: '100%',
    },
    fontFamily: {
      fhOscar: ['FH Oscar', 'sans-serif'],
    },
    fontSize: {
      sm: [
        //14px, 16px
        '1rem',
        {
          letterSpacing: '-0.01em',
          lineHeight: 1.2,
          margin: 0,
          fontWeight: 500,
        },
      ],
      base: [
        //16px, 18px
        '1.125rem',
        {
          lineHeight: 1.2,
          margin: 0,
          fontWeight: 500,
        },
      ],
      lg: [
        // 18px, 24px, 30px
        'clamp(1.25rem, 1rem + 0.56vw, 1.875rem)',
        {
          letterSpacing: '-0.01em',
          fontWeight: 600,
        },
      ],
      xl: [
        // 24px, 33px, 41px
        'clamp(1.5rem, 1.17rem + 1vw, 2.56rem)',
        {
          letterSpacing: '-0.015em',
          fontWeight: 600,
        },
      ],
      '2xl': [
        // 33px, 41px, 51px
        'clamp(2.05rem, 1.5rem + 1.2vw, 3.18rem)',
        {
          letterSpacing: '-0.015em',
          fontWeight: 600,
        },
      ],
      '3xl': [
        // 41px, 54px, 67px
        'clamp(2.56rem, 1.58rem + 2vw, 4.18rem)',
        {
          letterSpacing: '-0.015em',
          lineHeight: 1.12,
          fontWeight: 600,
        },
      ],
      '4xl': [
        // 54px, 72px, 90px
        'clamp(3.375rem, 2.7rem + 2vw, 5.62rem)',
        {
          letterSpacing: '-0.015em',
          fontWeight: 600,
        },
      ],
      '5xl': [
        // 62px, 96px, 120px
        'clamp(3.875rem, 3.3rem + 3vw, 7.5rem)',
        {
          letterSpacing: '-0.015em',
          lineHeight: 1.1,
          fontWeight: 600,
        },
      ],
      '6xl': [
        //216px
        '15vw',
        {
          lineHeight: 1,
          fontWeight: 600,
        },
      ],
    },
    extend: {
      colors: {
        bblack: '#19181D',
        bwhite: '#F9FBFA',
      },
    },
  },
  plugins: [],
};
