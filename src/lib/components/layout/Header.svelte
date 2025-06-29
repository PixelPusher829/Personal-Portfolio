<script lang="ts">
	export let currentPageTitle: string = 'Page Title';
	export let customClass: string = '';
</script>

<header class="hero-bg header-standard">
	<div class="color-overlay"></div>
	<div class="container hero-content {customClass}">
		<h1>{currentPageTitle}</h1>
	</div>
</header>

<style lang="scss">
	@use 'variables' as *;

	header {
		display: flex;
		position: relative;
	}

	header.hero-bg {
		height: auto;
		background: url('/images/global/header.jpg') no-repeat center center fixed;
		background-size: cover;
	}

	.header-standard {
		min-height: 15rem;
	}

	header .hero-content {
		align-content: center;
		justify-content: start;
		flex-grow: 1;
		position: relative;
		top: 0.2rem;
		padding: clamp(2rem, 2rem + 2vw, 6rem) 2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}

	:global(header h1),
	:global(header p) {
		color: white;
	}

	:global(header p) {
		font-size: 1.2rem;
	}

	.color-overlay {
		content: '';
		position: absolute;
		opacity: 0.7;
		overflow: hidden;
		width: 100%;
		height: 100%;
		background-color: $dark-bg;
		top: 0;
		left: 0;
		z-index: 0;
	}

	.hero-bg > * {
		z-index: 1;
	}
	.terms {
		max-width: 75ch;
	}
</style>
