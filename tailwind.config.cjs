const theme = require('./theme.cjs');

const config = {
	mode: 'jit',
	presets: [theme],
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: []
};

module.exports = config;
