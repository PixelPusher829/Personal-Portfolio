import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import fs from 'fs';

function getPortfolioProjectIDsFromJSON() {
	const jsonFilePath = path.resolve(process.cwd(), 'src', 'lib', 'data', 'project-database.json');
	try {
		const fileContent = fs.readFileSync(jsonFilePath, 'utf-8');
		const projects = JSON.parse(fileContent);
		const ids = projects.map((project) => project.id);
		return ids;
	} catch (error) {
		console.error(error);
		return [];
	}
}

const yourPortfolioProjectIDs = getPortfolioProjectIDsFromJSON();

const config = {
	preprocess: [
		preprocess({
			scss: {
				includePaths: [path.resolve('./src/lib/styles')],
			},
		}),
		vitePreprocess(),
		mdsvex(),
	],

	kit: {
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/Personal-Portfolio' : '',
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false,
			strict: true,
		}),
		prerender: {
			entries: [
				'/',
				'/about',
				'/contact',
				'/portfolio',
				'/terms-of-service',
				...yourPortfolioProjectIDs.map((id) => `/portfolio/${id}`),
			],
		},
	},
	extensions: ['.svelte', '.svx'],
};

export default config;
