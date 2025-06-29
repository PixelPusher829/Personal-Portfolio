<script>
	export let skillName = 'Skill Name';
	export let skillPercent = 100;
	export let imgSrc = 'svelte.png';
</script>

<div class="skill-item">
	<img src="./images/home/skillset-logos/{imgSrc}" alt="Adobe Logo" />
	<div>
		<div class="skill-data">
			{skillName}
			<span>{skillPercent}%</span>
		</div>
		<div class="progress-bar">
			<div class="progress-fill" data-target={skillPercent}></div>
		</div>
	</div>
</div>

<style lang="scss">
	@use 'variables' as *;

	.skill-item {
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}

	.skill-item img {
		object-fit: contain;
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
	}

	.skill-item > div {
		flex-grow: 1;
		width: auto;
		margin-right: 2rem;
	}

	.skill-data span {
		float: right;
	}

	.progress-bar {
		height: 0.6rem;
		background-color: hsl(0, 0%, 85%);
		border-radius: 1rem;
	}

	.progress-fill {
		height: 100%;
		border-radius: 1rem;
		background-color: $secondary;
		transition: width 1.2s ease;
		width: 0%;
	}

	.skill-data {
		margin-bottom: 0.5rem;
		font-weight: 500;
	}
</style>
