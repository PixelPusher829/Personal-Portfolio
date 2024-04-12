<script>
	export let title = 'Project Name';
	export let id = 'project-id';
</script>

<div>
	<a href="portfolio/{id}">
		<img src="./images/projects/thumbnails/{id}.jpg" alt={title} />
		<span>{title}</span>
	</a>
</div>

<style lang="scss">
	@use 'variables' as *;
	img {
		background-color: $light-bg;
		border-radius: 0.8rem;
		width: 100%;
		object-fit: cover;
		aspect-ratio: 16/9;
		outline: 3px solid transparent;
		outline-offset: -1px;
	}

	div {
		padding-bottom: 2rem;
		width: 100%;
	}

	a {
		text-decoration: none;
	}

	span {
		margin-top: 0.75rem;
		font-size: 1.25rem;
		color: hsl(0, 0%, 13%);
		text-align: center;
		display: block;
	}

	
</style>
