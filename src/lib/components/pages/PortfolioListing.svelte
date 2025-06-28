<script>
    export let title = "Project Name";
    export let id = "project-id";
</script>

<div>
    <a href="portfolio/{id}">
        <img src="/images/projects/thumbnails/{id}.jpg" alt="{title}" />
        <span>{title}</span>
    </a>
</div>