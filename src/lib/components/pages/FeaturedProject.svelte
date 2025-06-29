<script>
	export let featuredProject = {
		title: 'Project Name',
		description:
			'An innovative project that combines cutting-edge technology with user-friendly design to create a seamless and engaging experience.',
		id: 'project-id',
	};

	$: ({ title, description, id } = featuredProject);
</script>

<div>
	<a href="/portfolio/{id}" title="View {title} Project" data-sveltekit-noscroll>
		<img src="/images/projects/thumbnails/{id}.jpg" alt="{title} thumbnail" />
	</a>
	<span>{title}</span>
	<p>{description}</p>
	<a href="/portfolio/{id}" class="secondary-button" data-sveltekit-noscroll>
		View Project
		<i class="fi fi-bs-angle-right"></i>
	</a>
</div>

<style lang="scss">
	span {
		font-size: 1.25rem;
		font-weight: 500;
	}
	p {
		display: -webkit-box;
		line-height: 1.5;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	img {
		border-radius: 0.8rem;
		object-fit: cover;

		aspect-ratio: 16/9;
		outline: 3px solid transparent;
		outline-offset: -1px;
	}
	div {
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 1rem;
		margin-top: 1.5rem;
		color: #333;
	}
</style>
