<script>
	import Skills from '$lib/components/pages/Skills.svelte';
	import ProgressBarAnimation from '$lib/components/utils/ProgressBarAnimation.svelte';
	import StatsAnimation from '$lib/components/utils/StatsAnimation.svelte';
</script>

<svelte:head>
	<title>James Barnes - Web Developer</title>
</svelte:head>

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
		<a href="projects/murder-mystery" class="primary-btn">View Project</a>
	</div>
	<img
		src="/images/projects/featured-images/murder-mystery-guide-featured.jpg"
		alt="featured project image"
		class="curved"
	/>
</section>

<section id="my-skillset" class="container">
	<h2>My Skillset</h2>
	<div class="skillset-grid">
		<Skills skillPercent={90} skillName="Wordpress" imgSrc="wordpress.png" />
		<Skills skillPercent={90} skillName="HTML" imgSrc="html.png" />
		<Skills skillPercent={80} skillName="Figma" imgSrc="figma.png" />
		<Skills skillPercent={75} skillName="CSS" imgSrc="css.png" />
		<Skills skillPercent={90} skillName="Adobe Suite" imgSrc="adobe.png" />
		<Skills skillPercent={60} skillName="Javascript" imgSrc="javascript.png" />
		<Skills skillPercent={60} skillName="Webflow" imgSrc="webflow.png" />
		<Skills skillPercent={75} skillName="Svelte" imgSrc="svelte.png" />
		<Skills skillPercent={90} skillName="Tailwind" imgSrc="tailwind.png" />
		<Skills skillPercent={70} skillName="React" imgSrc="react.png" />
	</div>
</section>
<ProgressBarAnimation />
<section id="features" class="container">
	<div class="features">
		<div>
			<img src="/images/home/icons/web_development.png" alt="Web Development Icon" />
			<span>Web Development</span>
		</div>
		<div>
			<img src="/images/home/icons/ui_design.png" alt="UI Design Icon" />
			<span>UI Design</span>
		</div>
		<div>
			<img src="/images/home/icons/online_marketing.png" alt="Online Marketing Icon" />
			<span>Online Marketing</span>
		</div>
		<div>
			<img src="/images/home/icons/graphic_design.png" alt="Graphic Design Icon" />
			<span>Graphic Design</span>
		</div>
		<div>
			<img src="/images/home/icons/seo.png" alt="Web Visibility Icon" />
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
	<img src="/images/home/client.jpg" alt="Sarah Johnson profile" />
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
<StatsAnimation /> ```
