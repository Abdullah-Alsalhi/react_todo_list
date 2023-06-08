/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/tw-elements/dist/js/**/*.js",
	],
	theme: {
		extend: {},
	},
	darkMode: "class",
	// eslint-disable-next-line no-undef
	plugins: [require("tw-elements/dist/plugin.cjs")],
};
