/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#3498db",
				secondary: "#2ecc71",
				accent: "#e74c3c",
				black: "#002147",
				gray: "rgb(100, 100, 100)"
			},
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1140px",
				"2xl": "1536px",
			},
		},
	},
	plugins: [],
};
