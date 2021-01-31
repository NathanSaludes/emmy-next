module.exports = {
	purge: ['./pages/**/*.js', './components/**/*.js'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'dark-denim': '#121e38',
				'emmy-blue': '#3b82f6',
				'emmy-blue-accent': '#5793f5',
				'dark-denim-accent': '#213153',
				'main': '#8a9ab9',
				'primary': '#d2d9e9'
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
