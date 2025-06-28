<script>
    export let featuredProject = {
        title: "Project Name",
        description: "An innovative project that combines cutting-edge technology with user-friendly design to create a seamless and engaging experience.",
        id: "project-id" 
    };


    $: ({ title, description, id } = featuredProject);

</script>

<div>
    <a href="/portfolio/{id}" title="View {title} Project" data-sveltekit-noscroll>
        <img src="/images/projects/thumbnails/{id}.jpg" alt="{title} thumbnail">
    </a>
    <span>{title}</span>
    <p>{description}</p>
    <a href="/portfolio/{id}" class="secondary-button" data-sveltekit-noscroll>View Project<i class="fi fi-bs-angle-right"></i></a>
</div>
