<script>
	import PortfolioListing from '$lib/components/pages/portfolio/PortfolioListing.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import projectData from '$lib/data/project-database.json'; 
	let pageTitle = 'Project Archive';
</script>

<svelte:head>
	<title>James Barnes - {pageTitle}</title>
</svelte:head>

<Header currentPageTitle={pageTitle} />

<section id="portfolio" class="container">
	<h2>Explore my work</h2>
	<p class="body-large">
		Here are some projects I've worked on recently, showcasing my skills in web development,
		UI/UX design, and brand identity. I'm always looking for new challenges and opportunities to
		grow, so if you have a project in mind, or want to talk about how I can help with an
		existing one, I'd love to chat. Let's explore how we can work together to make something
		amazing happen!
	</p>
	<div class="portfolio-grid">
		{#each projectData as project (project.id)}
			<PortfolioListing title={project.projectName} id={project.id} />
		{/each}
	</div>
</section>

<style lang="scss">
	@use 'variables' as *;

	.portfolio-grid {
		margin-top: 4rem;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
	}

	@media screen and (max-width: 900px) {
		#portfolio .body-large {
			font-size: 1.2rem;
		}
	}

	@media screen and (max-width: 900px) {
		.portfolio-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media screen and (max-width: 600px) {
		.portfolio-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
