<script>
    import FeaturedProject from '$lib/components/pages/FeaturedProject.svelte';
    import ProjectInfo from '$lib/components/pages/ProjectInfo.svelte';
    export let data;

    $: ({ project, featuredProject, projectId, currentProjectIndex } = data); 
    

    let displayedFeaturedProjects = [];

    $: {
        if (featuredProject && featuredProject.length > 0 && currentProjectIndex !== -1) {
            const totalFeatured = featuredProject.length;
            
            let startIndex = (currentProjectIndex + 1) % totalFeatured; 

            const tempFeatured = [];
            for (let i = 0; i < 3; i++) {
                const index = (startIndex + i) % totalFeatured; 
                tempFeatured.push(featuredProject[index]);
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

<section id="project-item" class="container">
    <ProjectInfo projectInfo={project} />
    <div class="featured-projects">
        <h2>Featured Projects</h2>
        <div> 
            {#each displayedFeaturedProjects as fp (fp.id)}
                <FeaturedProject featuredProject={fp} />
            {/each}
        </div>
    </div>
</section>
