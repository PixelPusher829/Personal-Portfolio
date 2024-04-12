<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	let currentYear: number; // Declare this as a Svelte reactive variable

	onMount(() => {
		// This code only runs in the browser
		const date = new Date();
		currentYear = date.getFullYear(); // Update the reactive variable
	});
</script>

<footer>
	<div>
		<a href="./" title="Homepage">
			<img src="{base}/images/global/jb_logo_light.png" alt="" />
		</a>
		<div>
			<ul class="footer-nav">
				<li><a href="{base}/">Home</a></li>
				<li><a href="{base}/about">About</a></li>
				<li><a href="{base}/portfolio">Portfolio</a></li>
				<li><a href="{base}/contact">Contact</a></li>
			</ul>
		</div>
		<div class="socials">
			<a href="https://www.facebook.com/jamesbarnes1990" title="Facebook">
				<i class="fi fi-brands-facebook"></i>
			</a>
			<a href="https://www.instagram.com/zollblade/" title="Instagram">
				<i class="fi fi-brands-instagram"></i>
			</a>
			<a href="https://twitter.com/jbarnes829" title="Twitter">
				<i class="fi fi-brands-twitter-alt"></i>
			</a>
			<a href="https://www.linkedin.com/in/jbarnes0829/" title="LinkedIn">
				<i class="fi fi-brands-linkedin"></i>
			</a>
			<a href="https://github.com/PixelPusher829" title="Github">
				<i class="fi fi-brands-github"></i>
			</a>
		</div>
	</div>
	<span class="copywrite">
		<span class="date">{currentYear}</span>
		James Barnes. All rights reserved.
	</span>
</footer>

<style>
	/* Footer */
	footer {
		background-color: hsl(221, 53%, 13%);
		padding: 4rem;
	}

	footer * {
		color: white;
		transition: 0.3s ease-in-out;
	}

	footer img {
		max-width: 17.8rem;
		height: 100%;
		justify-self: left;
	}

	footer > div {
		display: grid;
		grid-template: auto / repeat(3, minmax(auto, 1fr));
		grid-auto-flow: row;
		align-items: center;
		gap: 5rem;
		padding-bottom: 2rem;
		border-bottom: 1px solid white;

		& > *,
		& ul {
			overflow: visible;
		}
	}



	ul.footer-nav {
		display: flex;
		list-style: none;
		gap: 2rem;
		justify-content: center;
	}

	.footer-nav li {
		flex-shrink: 0;
	}

	footer > div > a {
		min-width: 17rem;
	}

	footer a,
	.socials * {
		font-size: 1.2rem;
		text-decoration: none;
	}

	.socials {
		display: flex;
		gap: 0.5rem;
	}

	footer .socials {
		justify-content: right;
	}

	span.copywrite {
		text-align: center;
		display: block;
		margin-top: 1.5rem;
	}

	@media screen and (max-width: 1045px) {
		footer > div {
			grid-template: auto / 1fr;
			justify-items: center;
			gap: 1rem;
			& > * {
				align-content: center;
			}
		}

		footer > div > a img {
			margin-bottom: 0.5rem;
		}

		footer > div > a {
			min-width: auto;
		}

		footer {
			background-color: hsl(221, 52%, 13%);
			padding: 2rem;
		}
	}

	@media screen and (max-width: 600px) {
		.footer-nav a{
			font-size: 1rem;
		}

		footer img {
			max-width: 15rem;
		}

	}

</style>
