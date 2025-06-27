import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import preprocess from "svelte-preprocess";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		preprocess({
			scss: {
				includePaths: [path.resolve("./src/lib/styles")],
			},
		}),
		vitePreprocess(),
		mdsvex(),
	],

	kit: {
		adapter: adapter(),
	},
	extensions: [".svelte", ".svx"],
};

export default config;
