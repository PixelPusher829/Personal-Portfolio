<script lang="ts">
    import '$lib/styles/main.scss';
    import Footer from '$lib/components/layout/Footer.svelte';
    import GlobalNav from '$lib/components/layout/GlobalNav.svelte';
    import Header from '$lib/components/layout/Header.svelte';
	import ContactCta from '$lib/components/layout/ContactCta.svelte';
	import HeroBanner from '$lib/components/layout/HeroBanner.svelte';
    import { onMount } from 'svelte';
	import { page } from '$app/stores';
    
    let { children } = $props();

    onMount(() => {
        import('$lib/utils/global-effects');
    })

</script>

<div>
    <GlobalNav />
    {#if $page.url.pathname !== '/'}    
	<Header />
    {:else}
    <HeroBanner />
	{/if}
        <div class="container">
            {@render children()}
        </div>
		<ContactCta />
	 <Footer />
</div>