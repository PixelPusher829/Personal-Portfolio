<script lang="ts">
</script>

<header class="hero-bg header-hero">
	<div class="color-overlay"></div>
	<div class="container hero-content">
		<img src="./images/home/profile.jpg" alt="profile picture of James Barnes" />
		<div>
			<h1>Crafting Unique Digital Experiences</h1>
			<p>
				Welcome to my digital world where I combine creativity and technology to bring ideas
				to life and make an impact. I'm James, a front-end developer and Web designer with a
				passion for creating fast, responsive, and visually appealing digital experiences.
			</p>
			<a href="./portfolio" class="primary-btn">My Work</a>
		</div>
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

	header.hero-bg.header-hero {
		height: 50rem;
	}

	header .hero-content {
		align-content: center;
		justify-content: start;
		flex-grow: 1;
		position: relative;
		top: 0.2rem;
		padding: clamp(2rem, 2rem + 2vw, 6rem) 2rem;
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

	.header-hero .hero-content {
		display: grid;
		align-items: center;
		gap: 4rem;
		grid-template-columns: 1fr 2fr;
		height: auto;
		background-size: cover;
		color: white;
	}

	:global(.hero-content div) {
		max-width: 42rem;
	}

	:global(.hero-content img) {
		border-radius: 100%;
	}

	@media screen and (max-width: 1200px) {
		header.hero-bg.header-hero {
			height: auto;
			transition: all 0s ease;
		}
		.header-hero .hero-content {
			padding: 8rem 2rem;
		}
	}

	@media screen and (max-width: 990px) {
		header.hero-bg.header-hero {
			height: auto;
		}
		.header-hero .hero-content {
			grid-template-columns: 1fr;
			justify-items: center;
			text-align: center;
			padding: 4rem 2rem;
			gap: 2rem;
		}
		.header-hero .hero-content :global(img) {
			max-width: clamp(5rem, 50%, 20rem);
			transition: max-width 0s ease;
		}
	}
</style>
