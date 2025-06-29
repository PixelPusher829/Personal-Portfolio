<script>
	import ExperienceCard from '$lib/components/pages/about/ExperienceCard.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	let pageTitle = 'About Me';

	const job = [
		{
			title: 'Graphic Designer',
			location: 'Wow Concepts',
			timeline: '2014 - 2016',
			description: 'Layout, Branding, Publishing, Posters & Flyers.',
		},
		{
			title: 'Web Developer',
			location: 'Crux Digital',
			timeline: '2016 - Present',
			description:
				'Brand Development, Web Design, Web Development, SEO, UI Design, Creative Direction & Operations Management.',
		},
		{
			title: 'Web Developer',
			location: 'TEC - Evaluation Center',
			timeline: '2021 - Present',
			description: 'Web Design, SEO, UI Design, Graphic Design, UI Design',
		},
	];

	const education = [
		{
			title: 'Primary School',
			location: 'St Davids',
			timeline: '1996 - 2005',
			description: 'Grade 0 - Grade 9',
		},
		{
			title: 'High School',
			location: 'British International',
			timeline: '2009 - 2011',
			description: 'International Matric A Levels & O Levels',
		},
		{
			title: 'Multimedia Design',
			location: 'City Varsity',
			timeline: '2012 - 2014',
			description: 'Web design, graphic design, video editing, 3D Modeling, Illustration',
		},
	];
</script>

<svelte:head>
	<title>James Barnes - {pageTitle}</title>
</svelte:head>

<Header currentPageTitle={pageTitle} />

<section id="about-intro" class="container">
	<div>
		<h2>Behind the Pixels</h2>
		<p>
			Hey there! I'm James Barnes, a web designer and developer with a deep passion for
			creating visually stunning and highly functional websites. With over a decade of
			experience in graphic design and web development, I've had the privilege of working with
			a diverse range of clients, each with their own unique vision and goals. My approach to
			web design is rooted in creativity and innovation, constantly pushing the boundaries to
			deliver exceptional results that exceed expectations. I believe in the power of
			collaboration and communication, working closely with clients to understand their needs
			and translate them into compelling digital experiences. Thanks for taking the time to
			learn a bit about me! I'm excited to connect with you and explore how we can bring your
			vision to life through captivating web design.
		</p>
		<p class="about-quote">
			“The best design is where form meets function seamlessly, telling a story through every
			interaction.”
		</p>
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
	<img src="./images/about/about_intro.jpg" alt="James coding on a laptop" class="curved" />
</section>
<section id="my-experience" class="container">
	<div>
		<h3>
			<i class="fi fi-rr-briefcase"></i>
			Expertise
		</h3>
		<div class="exp-column">
			<ExperienceCard experience={job[0]} />
			<ExperienceCard experience={job[1]} />
			<ExperienceCard experience={job[2]} />
		</div>
	</div>
	<div>
		<h3>
			<i class="fi fi-rr-graduation-cap"></i>
			Education
		</h3>
		<div class="exp-column">
			<ExperienceCard experience={education[0]} />
			<ExperienceCard experience={education[1]} />
			<ExperienceCard experience={education[2]} />
		</div>
	</div>
</section>
<section id="why-my-services" class="container">
	<h2>Why Choose My Services</h2>
	<div class="services-grid">
		<div>
			<img
				src="./images/about/service-logos/user-centric.png"
				alt="User centric Approach icon"
			/>
			<span class="service-title">User-Centric Approach</span>
			<p>Prioritizing user needs to create intuitive interfaces and engaging experiences.</p>
		</div>
		<div>
			<img
				src="./images/about/service-logos/precision-design.png"
				alt="Precision Design icon"
			/>
			<span class="service-title">Precision Design</span>
			<p>Delivering flawlessly designed user experiences tailored to you.</p>
		</div>
		<div>
			<img
				src="./images/about/service-logos/problem-solving.png"
				alt="Creative Problem Solving icon"
			/>
			<span class="service-title">Creative Problem Solving</span>
			<p>Offering innovative solutions tailored to your unique challenges and objectives.</p>
		</div>
	</div>
</section>
<section id="my-clients" class="container">
	<h2>My Clients</h2>
	<div class="clients-grid">
		<img src="./images/about/client-logos/Elixir-Projects-Logo.webp" alt="Exlixir Logo" />
		<img src="./images/about/client-logos/Jaltech-Logo.webp" alt="Jaltech Logo" />
		<img
			src="./images/about/client-logos/Lillian-Gray-Art-School-Logo-1-1.webp"
			alt="Lillian Gray Logo"
		/>
		<img src="./images/about/client-logos/SAASIE-logo.webp" alt="SAASIE Logo" />
		<img src="./images/about/client-logos/static1.squarespace-1.webp" alt="Living Room Logo" />
		<img src="./images/about/client-logos/Black_Opal_Logo-1.webp" alt="Black Opal Logo" />
	</div>
</section>

<style lang="scss">
	@use 'variables' as *;

	#about-intro {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		gap: 3rem;
		& img {
			height: 100%;
			object-fit: cover;
			object-position: 10% 50%;
		}
	}

	.socials{
		font-size: 1.4rem;
		display: flex;
		gap: 0.7rem;
		& a{
			text-decoration: none;
			
		}
	}

	.about-quote {
		font-size: clamp(1.2rem, 1rem + 1vw, 1.5rem);
		color: $dark-txt;
		margin-bottom: 2.5rem;
	}

	@media screen and (max-width: 1100px) {
		#about-intro {
			grid-template-columns: 2fr 1fr;
		}
	}

	@media screen and (max-width: 800px) {
		#about-intro {
			grid-template-columns: 1fr;
			img {
				object-fit: cover;
				grid-row: 1;
				aspect-ratio: 1/1;
				object-position: 50% 40%;
			}
		}
	}

	/* Expertise */
	#my-experience {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.8rem;
		margin: 6rem auto;
	}

	#my-experience .exp-column {
		display: grid;
		grid-template-rows: repeat(3, 16.6rem);
		gap: 1.8rem;
	}

	@media screen and (max-width: 800px) {
		#my-experience {
			grid-template-columns: 1fr;
			& .exp-column {
				grid-template-rows: repeat(3, minmax(16.6rem, auto));
			}
		}
	}

	#my-experience h3 > i {
		font-size: 2.4rem;
		color: $heading;
		text-align: end;
		margin-right: 1rem;
		position: relative;
		top: 0.3rem;
	}

	/* Why choose my services? */
	#why-my-services {
		text-align: center;
	}

	#why-my-services .services-grid {
		display: grid;
		grid: auto / repeat(3, 1fr);
		gap: 3rem;
		margin-top: 3rem;
		justify-items: center;
	}

	#why-my-services .service-title {
		font-size: 1.2rem;
		color: $heading;
		font-weight: 500;
	}

	.services-grid > div {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
		max-width: 19rem;
	}

	.services-grid img {
		width: 8rem;
		margin-bottom: 1rem;
	}

	@media screen and (max-width: 900px) {
		#why-my-services .services-grid {
			grid-template-columns: 1fr;
		}
	}

	/* My Clients */
	#my-clients {
		text-align: center;
		margin-bottom: 10rem;
	}

	#my-clients .clients-grid {
		display: grid;
		grid: auto/repeat(3, 1fr);
		align-items: center;
		justify-items: center;
		row-gap: 3rem;
		margin-top: 3rem;
	}

	#my-clients img {
		width: auto;
	}

	.clients-grid :nth-child(2) {
		height: 6rem;
	}

	.clients-grid :nth-child(3) {
		height: 5rem;
	}

	.clients-grid :nth-child(4) {
		height: 4rem;
	}

	.clients-grid :nth-child(5) {
		height: 6rem;
	}

	.clients-grid :nth-child(6) {
		height: 3rem;
	}

	@media screen and (max-width: 900px) {
		#my-clients .clients-grid {
			grid-template-columns: 1fr;
			gap: rem;
		}
	}
</style>
