const autoprefixer = require(`autoprefixer`)
const postcssImport = require(`postcss-import`)
const postcssNested = require(`postcss-nested`)
const postcssCustomProperties = require('postcss-custom-properties')

const tailwindcss = require(`tailwindcss`)

module.exports = {
	plugins: [
		postcssImport,
		tailwindcss,
		postcssNested,
		postcssCustomProperties,
		autoprefixer,
	],
}
