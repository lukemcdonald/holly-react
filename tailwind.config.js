const { fontFamily } = require(`tailwindcss/defaultTheme`)
const colors = require('tailwindcss/colors')
const twForms = require('@tailwindcss/forms')
const twTypography = require('@tailwindcss/typography')

module.exports = {
	purge: {
		content: ['./src/**/*.js', './src/**/*.css'],
	},
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
			black: '#000',
			white: '#fff',
			gray: colors.blueGray,
			primary: colors.indigo,
			secondary: colors.rose,
			tertiary: colors.teal,
		},
	},
	plugins: [twForms, twTypography],
	variants: {
		extend: {},
	},
}
