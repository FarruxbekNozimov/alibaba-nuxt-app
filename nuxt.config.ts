// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	modules: ["@nuxtjs/tailwindcss"],
	app: {
		head: {
			title: "Store",
			link: [
				{
					rel: "stylesheet",
					href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
				},
				{
					rel: "icon",
					href: "/logo-icon.png",
				},
			],
			meta: [
				{ name: "description", content: "My amazing site." },
				{ name: "author", content: "FarruxDEV" },
			],
		},
	},
});
