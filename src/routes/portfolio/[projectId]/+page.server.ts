import { error } from '@sveltejs/kit';
import projectData from '$lib/data/project-database.json';

export const prerender = true;

export const load = ({ params }) => {
	const projectId = params.projectId;

	const project = projectData.find((p) => p.id === projectId);
	if (!project) {
		throw error(404, `Project not found: ${projectId}`);
	}

	const currentProjectIndex = projectData.findIndex((p) => p.id === projectId);

	return {
		project,
		currentProjectIndex,
		projectData
	};
};
