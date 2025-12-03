/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				'data-stream': 'dataStream 1s ease-in-out infinite',
			},
			colors: {
				'cyber-cyan': '#00f3ff',
				'cyber-magenta': '#ff0080',
				'cyber-gold': '#ffed4e',
				'dark-void': '#0a0a0f',
				white: '#f8f9fa'
			},
			fontFamily: {
				body: ['Manrope', ...defaultTheme.fontFamily.sans],
				orbitron: ['Orbitron', 'sans-serif'],
				rajdhani: ['Rajdhani', 'sans-serif'],
			},
			gridTemplateColumns: {
				list: 'repeat(auto-fill, minmax(400px, max-content))'
			},
			keyframes: {
				dataStream: {
					'0%, 100%': { transform: 'translateX(0)' },
					'50%': { transform: 'translateX(4px)' },
				},
			},
		}
	},
	plugins: [require('@tailwindcss/typography')]
}
