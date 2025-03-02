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
	  themes: ["light", "dark"], // ✅ Only include necessary themes (reduces CSS size)
	  darkTheme: "dark", // ✅ Ensure dark mode works properly
	  logs: false, // ✅ Hide DaisyUI build logs
	}
  };