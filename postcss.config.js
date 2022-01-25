module.exports = {
	plugins: [
		require(`postcss-import`),
		require(`tailwindcss/nesting`),
		require(`tailwindcss`),
		require('postcss-custom-properties'),
		require(`autoprefixer`),
	],
}
