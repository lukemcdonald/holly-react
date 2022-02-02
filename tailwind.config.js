const { fontFamily } = require(`tailwindcss/defaultTheme`)
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fira Sans', ...fontFamily.sans],
      },
      screens: {
        xs: '420px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1280px',
        '2xl': '1440px',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.current'),
            },
          },
        },
      }),
    },
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#ffffff',
      gray: colors.slate,
      primary: colors.indigo,
      secondary: colors.rose,
      tertiary: colors.emerald,
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  variants: {
    extend: {},
  },
}
