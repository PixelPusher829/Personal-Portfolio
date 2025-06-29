<script>
import { base } from '$app/paths';
</script>

<div class="contact-cta">
	<div class="gray-filter">
		<div class="container">
			<h2>Let's start something great together!</h2>
			<span>
				Ready to elevate your project? Drop me a message below and let's collaborate to make
				your vision a reality.
			</span>
			<a href="{base}/contact" class="primary-btn">Contact Me</a>
		</div>
	</div>
</div>

<style lang="scss">
	@use 'variables' as *;

	.contact-cta {
		color: white;
		text-align: center;
		background: url('/images/global/contact_cta.jpg') center;
		background-size: cover;
	}

	.gray-filter {
		backdrop-filter: grayscale(100%);
	}
	.contact-cta h2,
	.contact-cta span {
		color: white;
	}

	.contact-cta > div {
		background-color: hsla(223, 93%, 22%, 0.84);
		opacity: 0.9;
		padding: 4rem 0;
	}

	.contact-cta span {
		display: block;
		margin-bottom: 1rem;
		font-weight: 200;
		font-size: 1.4rem;
	}

	a:hover:not(.primary-btn, .secondary-button) {
		color: $secondary;
	}

	@media screen and (max-width: 900px) {
		.contact-cta .body-large {
			font-size: 1.2rem;
		}
	}
</style>
