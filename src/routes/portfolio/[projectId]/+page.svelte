<script>
	import Header from '$lib/components/layout/Header.svelte';
	import FeaturedProject from '$lib/components/pages/portfolio/FeaturedProject.svelte';
	import ProjectInfo from '$lib/components/pages/portfolio/ProjectInfo.svelte';
	export let data;
	
	$: ({ project, projectData, currentProjectIndex } = data);

	let displayedFeaturedProjects = [];

	$: {
		if (projectData && projectData.length > 0 && currentProjectIndex !== -1) {
			const totalFeatured = projectData.length;

			let startIndex = (currentProjectIndex + 1) % totalFeatured;

			const tempFeatured = [];
			for (let i = 0; i < 3; i++) {
				const index = (startIndex + i) % totalFeatured;
				tempFeatured.push(projectData[index]);
			}
			displayedFeaturedProjects = tempFeatured;
		} else {
			displayedFeaturedProjects = [];
		}
	}
</script>

<svelte:head>
	<title>James Barnes - {project.projectName}</title>
</svelte:head>

<Header currentPageTitle={project.projectName} />

<section id="project-item" class="container">
	<ProjectInfo {...project} />
	<div class="featured-projects">
		<h2>Featured Projects</h2>
		<div>
			{#each displayedFeaturedProjects as fp (fp.id)}
				<FeaturedProject featuredProject={fp} />
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	/* Project Layout */

	.featured-projects {
		margin-top: 5rem;

		& > div {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 3rem;
		}
	}

	@media screen and (max-width: 900px) {

		.featured-projects > div {
			grid-template-columns: 1fr;
		}
	}
</style>
