module.exports = {
	// or 'media' or 'class'
	theme: {
		nightwind: {
			transitionDuration: false // default '300ms'
		},
		fontFamily: {
			sans: ['IBM Plex Sans', 'Helvetica Neue', 'Arial', 'sans-serif']
		},
		grid: {},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: '#000',
			white: '#fff',
			basics: {
				50: '#ffffff',
				100: '#f4f4f4',
				200: '#e0e0e0',
				300: '#8d8d8d',
				400: '#797979',
				500: '#6f6f6f',
				600: '#525252',
				700: '#4c4c4c',
				800: '#393939',
				900: '#161616'
			},
			primary: {
				DEFAULT: '#0353e9',
				50: '#3585ff',
				100: '#2b7bff',
				200: '#2171ff',
				300: '#0f62fe',
				400: '#0d5df3',
				500: '#0353e9',
				600: '#0043ce',
				700: '#003fd5',
				800: '#0035cb',
				900: '#002d9c'
			},
			error: {
				DEFAULT: '#FF2E32',
				50: '#FFEBEC',
				100: '#FFCDCF',
				200: '#FFACAF',
				300: '#FF8B8F',
				400: '#FF7277',
				500: '#FF595F',
				600: '#FF5157',
				700: '#FF484D',
				800: '#FF3E43',
				900: '#FF2E32'
			},
			success: {
				DEFAULT: '#29C274',
				50: '#F5FDF9',
				100: '#EAFBF2',
				200: '#CBF5E0',
				300: '#ABEFCD',
				400: '#6CE4A7',
				500: '#2DD881',
				600: '#29C274',
				700: '#1B824D',
				800: '#14613A',
				900: '#0E462A'
			},
			yellow: {
				DEFAULT: '#FFC700'
			}
		},
		fontSize: {
			xs: '0.75rem',
			sm: '0.875rem',
			base: '1rem',
			lg: '1.75rem',
			xl: '2rem',
			'2xl': '2.625rem'
		},
		spacing: {
			1: '0.125rem',
			2: '0.25rem',
			3: '0.5rem',
			4: '0.75rem',
			5: '1rem',
			6: '1.5rem',
			7: '2rem',
			8: '3rem',
			9: '4rem',
			10: '5rem'
		},
		letterSpacing: {
			base: '0.16px'
		},

		extend: {
			padding: {
				calc: 'calc(0.875rem - 3px)',
				right: '63px',
				left: '15px'
			},
			minHeight: {
				8: '3rem'
			},
			maxWidth: {
				44: '44rem'
			},
			transitionProperty: {
				button: `background 70ms cubic-bezier(0, 0, 0.38, 0.9),
        box-shadow 70ms cubic-bezier(0, 0, 0.38, 0.9), border-color 70ms cubic-bezier(0, 0, 0.38, 0.9),
        outline 70ms cubic-bezier(0, 0, 0.38, 0.9)`
			}
		}
	}
};
