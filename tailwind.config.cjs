/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],
	daisyui: {
		blaze: [
			{
				mytheme: {
					primary: '#d61b06',
					secondary: '#cb60f2',
					accent: '#681ace',
					neutral: '#212A36',
					'base-100': '#F2EFF5',
					info: '#4AC2ED',
					success: '#7BEAC5',
					warning: '#F9B11F',
					error: '#F02854'
				}
			},
			'valentine',
			'dark',
      'dracula'
		]
	}
};
