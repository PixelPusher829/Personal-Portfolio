<script>
   export let skillName = "Skill Name";
   export let skillPercent = 100;
   export let imgSrc = "svelte.png";
</script>


<div class="skill-item">
    <img src="/images/home/skillset-logos/{imgSrc}" alt="Adobe Logo" />
    <div>
        <div class="skill-data">{skillName}<span>{skillPercent}%</span></div>
        <div class="progress-bar">
            <div class="progress-fill" data-target='{skillPercent}'></div>
        </div>
    </div>
</div>