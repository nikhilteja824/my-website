/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
	  "./dist/**/*.{html,js}" // ✅ Include built files for GitHub Pages
	],
	theme: {
	  extend: {},
	},
	plugins: [
	  require("@tailwindcss/typography"),
	  require("daisyui")
	],
	daisyui: {
	  themes: true,
	//   themes: ["light", "dark", "cupcake", "synthwave"], // Add or remove themes as needed
	  darkTheme: "dark", 
	  logs: false,
	  }
  };