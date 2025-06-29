// src/routes/portfolio/[projectId]/+page.server.js

import projectData from '$lib/data/project-database.json';
import featuredProjectData from '$lib/data/featured-projects.json';

export const load = ({ params }) => {
	const projectId = params.projectId;

	const projectFound = projectData.find((p) => p.id === params.projectId);
	const project = projectFound ? JSON.parse(JSON.stringify(projectFound)) : null;

	const featuredProject = JSON.parse(JSON.stringify(featuredProjectData));

	const currentProjectIndex = projectData.findIndex((p) => p.id === params.projectId);

	return {
		project,
		featuredProject,
		projectId,
		currentProjectIndex,
	};
};
