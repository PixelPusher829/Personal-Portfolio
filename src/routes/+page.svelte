<script>
	import Skillset from '$lib/components/pages/home/Skillset.svelte';
	import ProgressBarAnimation from '$lib/utils/ProgressBarAnimation.svelte';
	import StatsAnimation from '$lib/utils/StatsAnimation.svelte';
	import HeroBanner from '$lib/components/pages/home/HeroBanner.svelte';
</script>

<svelte:head>
	<title>James Barnes - Web Developer</title>
</svelte:head>

<HeroBanner />
<section id="featured-work" class="container">
	<div>
		<h2>Featured Project</h2>
		<span>Murder Mystery Guide</span>
		<p>
			This portfolio piece showcases my ability to design an engaging and interactive website
			for hosting Murder Mystery Dinner parties. By providing a comprehensive suite of
			resources like character descriptions and recipes, this project demonstrates my skills
			in creating memorable digital experiences that captivate and assist users in planning an
			unforgettable evening of intrigue.
		</p>
		<a href="portfolio/murder-mystery-guide" class="primary-btn">View Project</a>
	</div>
	<img
		src="./images/projects/featured-images/murder-mystery-guide-featured.jpg"
		alt="featured project image"
		class="curved"
	/>
</section>

<section id="my-skillset" class="container">
	<h2>My Skillset</h2>
	<div class="skillset-grid">
		<Skillset skillPercent={90} skillName="Wordpress" imgSrc="wordpress.png" />
		<Skillset skillPercent={90} skillName="HTML" imgSrc="html.png" />
		<Skillset skillPercent={80} skillName="Figma" imgSrc="figma.png" />
		<Skillset skillPercent={75} skillName="CSS" imgSrc="css.png" />
		<Skillset skillPercent={90} skillName="Adobe Suite" imgSrc="adobe.png" />
		<Skillset skillPercent={60} skillName="Javascript" imgSrc="javascript.png" />
		<Skillset skillPercent={60} skillName="Webflow" imgSrc="webflow.png" />
		<Skillset skillPercent={75} skillName="Svelte" imgSrc="svelte.png" />
		<Skillset skillPercent={90} skillName="Tailwind" imgSrc="tailwind.png" />
		<Skillset skillPercent={70} skillName="React" imgSrc="react.png" />
	</div>
</section>
<ProgressBarAnimation />
<section id="features" class="container">
	<div class="features">
		<div>
			<img src="./images/home/icons/web_development.png" alt="Web Development Icon" />
			<span>Web Development</span>
		</div>
		<div>
			<img src="./images/home/icons/ui_design.png" alt="UI Design Icon" />
			<span>UI Design</span>
		</div>
		<div>
			<img src="./images/home/icons/online_marketing.png" alt="Online Marketing Icon" />
			<span>Online Marketing</span>
		</div>
		<div>
			<img src="./images/home/icons/graphic_design.png" alt="Graphic Design Icon" />
			<span>Graphic Design</span>
		</div>
		<div>
			<img src="./images/home/icons/seo.png" alt="Web Visibility Icon" />
			<span>Web Visibility</span>
		</div>
	</div>
</section>
<div class="container">
	<div id="my-work-cta" class="curved">
		<div>
			<h2>Check out my work</h2>
			<div class="body-large">Explore my recent creative projects in my portfolio</div>
			<a href="portfolio" class="primary-btn">My Work</a>
		</div>
	</div>
</div>
<div id="testimonials" class="container">
	<div>
		<span class="client-name">Lillian Gray</span>
		<span class="client-company">Fine Artist</span>
		<p class="body-large">
			"From inception, James's web development skills built our online presence. The result is
			not only visually stunning and highly functional but has also far exceeded my
			expectations in driving success. His remarkable attention to detail, ability to
			translate my vision, and deep expertise in both front-end development and SEO, make him
			an incredibly valuable asset to any business."
		</p>
	</div>
	<img src="./images/home/client.jpg" alt="Sarah Johnson profile" />
</div>

<section id="stats" class="container">
	<h2>My results in numbers</h2>
	<div>
		<div>
			<span class="stat-number" data-target="99">0%</span>
			<span class="stat-title">Customer Satisfaction</span>
			<p>
				I'm driven by seeing my clients grow and thrive, and I measure my success by the
				positive impact I have on their businesses.
			</p>
		</div>
		<div>
			<span class="stat-number" data-target="65">65</span>
			<span class="stat-title">Past Clients</span>
			<p>
				I've had the privilege of working with an array of wonderful clients, each
				presenting unique challenges and opportunities for growth.
			</p>
		</div>
		<div>
			<span class="stat-number" data-target="240">0%</span>
			<span class="stat-title">Company Growth</span>
			<p>
				Proud to have contributed to significant client growth, our collaboration fueled
				success beyond expectations.
			</p>
		</div>
	</div>
</section>
<StatsAnimation />

<style lang="scss">
	@use 'variables' as *;

	/* My Skillset */
	.skillset-grid {
		display: grid;
		gap: 2.5rem 2rem;
		grid: auto / repeat(2, 1fr);
		margin-top: 2rem;
	}

	@media screen and (max-width: 700px) {
		.skillset-grid {
			grid: auto / 1fr;
		}
	}

	/* Featured Projects */
	section#featured-work {
		display: grid;
		align-items: center;
		gap: 2.7rem;
		grid-template: auto / 1fr 1fr;
	}

	#featured-work {
		img {
			object-fit: cover;
			height: 30rem;
		}
		div {
			margin-right: 8%;
		}
		span {
			font-size: clamp(1.2rem, 1.1rem + 0.5vw, 2rem);
			font-weight: 500;
			display: block;
			margin-bottom: 0.4rem;
		}
	}

	@media screen and (max-width: 990px) {
		section#featured-work {
			grid-template: auto / 1fr;
			gap: 2rem;
		}
		#featured-work img {
			grid-row: 1;
			height: auto;
			aspect-ratio: 16/9;
		}
	}

	/* Features */
	.features {
		display: grid;
		margin: 5rem 0 4rem;
		grid-template-columns: repeat(5, 1fr);
		gap: 2rem;
		row-gap: 4rem;
		justify-content: space-evenly;
		transition: all 0s ease;
		& img {
			max-height: 7rem;
		}
		& span {
			font-size: 1.2rem;
			font-weight: 500;
			color: $heading;
		}
	}

	.features > div {
		gap: 1rem;
		text-align: center;
		min-width: fit-content;
		align-self: start;
		& img {
			display: block;
			margin: auto;
			margin-bottom: 1rem;
		}
	}

	@media screen and (max-width: 1170px) {
		.features {
			gap: 1rem;
			margin: 5rem auto 4rem;
			& span {
				font-size: 1rem;
			}
		}
	}

	@media screen and (max-width: 920px) {
		.features {
			grid-template-columns: repeat(6, 1fr);
			row-gap: 3rem;
			width: min(650px, 100%);
			& div {
				grid-column: span 2;
				margin-bottom: 1rem;
			}
			& div:nth-child(4) {
				grid-column: 2 / 4;
			}
		}
	}

	@media screen and (max-width: 700px) {
		.features {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			gap: 2.5rem;
			& > div {
				flex: 1;
				margin-bottom: 1.5rem;
				max-width: 10rem;
			}
			& img {
				max-height: 7rem;
			}
		}
	}

	@media screen and (max-width: 555px) {
		.features {
			flex-direction: column;
			& > div {
				align-self: center;
			}

			& span {
				font-size: 1.1rem;
			}
		}
	}

	/* Testimonials */
	#testimonials {
		display: grid;
		grid: auto / 2fr 1fr;
		align-items: center;
		margin: 6rem auto;
	}

	#testimonials img {
		aspect-ratio: 1/1;
		object-fit: cover;
		object-position: 50% 10%;
		border-radius: 50%;
	}

	#testimonials > div {
		margin-right: 12%;
	}

	.client-name {
		font-weight: 500;
		font-size: 2.25rem;
		display: block;
		color: $heading;
		margin-bottom: 0.7rem;
	}

	.client-company {
		display: block;
		font-weight: 500;
		font-size: 1.1rem;
		color: hsl(0, 0%, 65%);
		letter-spacing: 0.3rem;
		text-transform: uppercase;
		margin-bottom: 1.5rem;
	}

	@media screen and (max-width: 1100px) {
		#testimonials {
			grid-template: auto / 1fr;
			text-align: center;
			align-items: center;
			justify-items: center;
			margin: 6rem auto;
			& > div {
				margin-right: 0;
			}
		}

		#testimonials img {
			grid-row: 1;
			max-width: 15rem;
			margin-bottom: 2rem;
		}
		#testimonials .body-large {
			font-size: 1.2rem;
		}
	}
	/* Statistics */
	#stats > div {
		margin-top: 2.2rem;
		display: grid;
		grid: auto / repeat(3, 1fr);
		gap: 4rem;
	}

	#stats span {
		display: block;
	}

	.stat-number {
		font-size: 4rem;
		color: $secondary;
		font-weight: 500;
		margin-bottom: 0.5rem;
	}

	.stat-title {
		color: $dark-txt;
		font-size: 1.5rem;
		font-weight: 500;
		margin-bottom: 0.6rem;
	}

	@media screen and (max-width: 700px) {
		#stats > div {
			grid-template: auto / 1fr;
		}
	}

	/* My Work CTA */
	#my-work-cta {
		text-align: center;
		background: url('/images/home/my_work_cta.jpg') center;
		background-size: cover;
	}

	#my-work-cta > div {
		padding: 4rem;
		background-color: hsla(0, 0%, 100%, 0.95);
	}

	@media screen and (max-width: 700px) {
		#my-work-cta > div {
			padding: 3rem 2rem;
		}
	}

	#my-work-cta .primary-btn {
		margin-top: 2rem;
	}
</style>
