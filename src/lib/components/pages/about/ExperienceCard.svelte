<script>
	export let experience = {
		timeline: '1990 - Current',
		location: 'Big Biznis',
		title: 'Web Developer',
		description: 'UI Design, Web Design, Web Development, SEO, UI Design',
	};

	const { timeline, location, title, description } = experience;
</script>

<div class="exp-card">
	<span class="card-date">{timeline}</span>
	<span class="card-title">{title}</span>
	<p>{description}</p>
	<span class="card-location">{location}</span>
</div>

<style lang="scss">
	@use 'variables' as *;

	.card-date,
	.card-title {
		font-family: $text-display;
		color: rgb(50, 50, 50);
	}

	.card-date {
		font-size: 1.125rem;
		font-weight: 500;
	}

	.card-title {
		font-size: 1.8rem;
		font-weight: 500;
	}

	.card-location {
		font-weight: 500;
		flex-grow: 1;
		align-content: end;
	}

	.exp-card {
		display: flex;
		flex-direction: column;
		background-color: $light-bg;
		padding: 1.8rem;
		border-radius: 0.5rem;
		border: 1px solid hsl(0, 0%, 87%);
	}
</style>
