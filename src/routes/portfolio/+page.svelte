<script>
    import PortfolioListing from '$lib/components/pages/PortfolioListing.svelte';
</script>

<svelte:head>
    <title>James Barnes - Project Archive</title>
</svelte:head>

<section id="portfolio" class="container">
    <h2>Explore my work</h2>
    <p class="body-large">
        Here are some projects I've worked on recently, showcasing my skills in web development,
        UI/UX design, and brand identity. I'm always looking for new challenges and opportunities to
        grow, so if you have a project in mind, or want to talk about how I can help with an
        existing one, I'd love to chat. Let's explore how we can work together to make something
        amazing happen!
    </p>
    <div class="portfolio-grid">
        <PortfolioListing title="FlexFit" id="flexfit" />
        <PortfolioListing title="Vibrant Visions" id="vibrant-visions" />
        <PortfolioListing title="Flower Cafe" id="flowercafe" />
        <PortfolioListing title="Murder Mystery Guide" id="murder-mystery-guide" />
        <PortfolioListing title="Lillian Gray Art School" id="lillian-gray-art-school" />
        <PortfolioListing title="Pharmacentrix" id="pharmacentrix" />
    </div>
</section>
