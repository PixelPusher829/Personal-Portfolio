<script>
	export let projectInfo = {
		projectName: "Project Name",
		leadText: "Project Title",
		id: "project-image",
		url: "https://example.com/",
		description: "This is a placeholder description for the project. It outlines the key features and offerings in a concise and informative manner, ensuring that potential clients understand the value and scope of the work."
	};

	$: ({leadText, id, url, description} = projectInfo); 

</script>

<div class="project-info">
	<img src="/images/projects/featured-images/{id}-featured.jpg" alt="">
	<div>
		<h2>{leadText}</h2>
		<p>{description}</p>
		<a href="{url}" rel="noopener" target="_blank" class="primary-btn">View Project</a>
	</div>
</div>
