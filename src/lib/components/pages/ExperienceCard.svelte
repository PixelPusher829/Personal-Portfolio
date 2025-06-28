<script>
    export let experience = {
        timeline: '1990 - Current',
        location: 'Big Biznis',
        title: 'Web Developer',
        description: 'UI Design, Web Design, Web Development, SEO, UI Design'
    };

    const { timeline, location, title, description } = experience;
    
</script>

<div class="exp-card">
    <span class="card-date">{timeline}</span><span class="card-title">{title}</span>
    <p>{description}</p>
    <span class="card-location">{location}</span>
</div>