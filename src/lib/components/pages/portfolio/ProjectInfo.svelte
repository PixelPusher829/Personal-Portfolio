<script>
	import { base } from '$app/paths';
	let {
		projectName = 'Project Name',
		leadText = 'Project Title',
		id = 'project-image',
		url = 'https://example.com/',
		description =
			'This is a placeholder description for the project. It outlines the key features and offerings in a concise and informative manner, ensuring that potential clients understand the value and scope of the work.'
	} = $props() ;


</script>

<div class="project-info">
	<img src="{base}/images/projects/featured-images/{id}-featured.jpg" alt="" />
	<div>
		<h2>{leadText}</h2>
		<p>{description}</p>
		<a href={url} rel="noopener" target="_blank" class="primary-btn">View Project</a>
	</div>
</div>

<style>
	.project-info {
		gap: 3rem;
		display: flex;
		align-items: center;
	}

	.project-info img {
		object-fit: cover;
		border-radius: 0.8rem;
		aspect-ratio: 1/1;
		width: 50%;
	}

	@media screen and (max-width: 900px) {
		.project-info {
			flex-direction: column;
		}
		.project-info img {
			width: 100%;
			aspect-ratio: 16/9;
		}
	}
</style>
