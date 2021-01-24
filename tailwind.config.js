module.exports = {
	purge: ['./pages/**/*.js', './components/**/*.js'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'blue-accent': '#567dd8',
				'appbar': '#213153'
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
