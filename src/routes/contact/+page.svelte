<script>
	import Header from '$lib/components/layout/Header.svelte';
	let pageTitle = 'Contact Me';
</script>

<svelte:head>
	<title>James Barnes - {pageTitle}</title>
</svelte:head>

<Header currentPageTitle={pageTitle} />

<section id="contact" class="container">
	<div>
		<form action="post">
			<div>
				<label for="name">Name</label>
				<input type="text" name="name" id="name" />
			</div>
			<div>
				<label for="email">Email</label>
				<input type="email" name="email" id="email" />
			</div>
			<div>
				<label for="message">Message</label>
				<textarea name="message" id="message" cols="30" rows="10"></textarea>
			</div>
			<div>
				<input type="checkbox" name="terms" id="terms" />
				<label for="terms">
					<a href="./terms-of-service">I agree to the terms and conditions</a>
				</label>
			</div>
			<button type="submit" class="primary-btn">Submit</button>
		</form>
	</div>
	<div class="contact-content">
		<h2>Get in touch</h2>
		<p class="body-large">
			Have a question, comment, or idea? Reach out, I'm eager to hear from you and ready to
			help in any way I can.
		</p>
		<ul class="contact-info">
			<li>
				<a href="mailto:contactme@gmail">
					<i class="fi fi-rr-envelope"></i>
					jbarnes.hello@gmail.com
				</a>
			</li>
			<li>
				<a href="tel:1234567890">
					<i class="fi fi-rr-phone-call"></i>
					(+1) 514 235 9794
				</a>
			</li>
			<li>
				<a href="https://www.google.co.za/maps">
					<i class="fi fi-rr-marker"></i>
					Montreal, Canada
				</a>
			</li>
		</ul>
	</div>
</section>

<style lang="scss">
	@use 'variables' as *;

	#contact {
		display: grid;
		grid: auto/1fr 1fr;
		gap: 4rem;
		margin-bottom: 5rem;
	}

	@media screen and (max-width: 900px) {
		#contact {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
		.contact-content {
			grid-row: 1;
		}
	}

	/* Form */
	form {
		transition: outline 0.3s ease-in-out;
	}

	form > div {
		margin-bottom: 1.8rem;
		&:not(:has([type='checkbox'])) {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}
	}

	[type='text'],
	[type='email'],
	textarea {
		background-color: var(--light-bg);
		padding: 0.6rem;
		border-radius: 5px;
		border: 1px solid hsl(0, 0%, 86%);
		outline: solid 2px transparent;
		resize: vertical;
		transition: 0.3s ease-in-out;
		&:focus {
			outline: solid 2px var(--secondary);
		}
	}

	textarea {
		field-sizing: content;
		min-height: 12rem;
		max-height: 30rem;
	}

	input[type='checkbox'] {
		margin-right: 0.5rem;
		accent-color: var(--secondary);
	}

	[type='submit'] {
		border: none;
		font-size: 1rem;
	}

	/* Contact Content */
	.contact-content {
		padding-top: 2rem;
		flex-direction: column;
		& .contact-info {
			margin-top: 1.75rem;
			& > li a {
				display: flex;
				align-items: center;
				gap: 0.75rem;
			}
		}
	}

	.contact-content .fi {
		position: relative;
		top: 0.2rem;
		align-self: flex-start;
	}

	.contact-content li {
		margin-bottom: 0.7rem;
		& :is(li a, li .fi) {
			font-size: 1.25rem;
			text-decoration: none;
		}
	}

	.contact-content li:hover .fi {
		color: var(--secondary);
	}

	@media screen and (max-width: 900px) {
		.contact-content {
			& .body-large {
				font-size: 1.3rem;
			}
			& li :is(li a, li .fi) {
				font-size: 1.2rem;
			}
		}
	}
</style>
