<script lang="ts">
	import '$lib/styles/main.scss';
	import Footer from '$lib/components/layout/Footer.svelte';
	import GlobalNav from '$lib/components/layout/GlobalNav.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import ContactCta from '$lib/components/layout/ContactCta.svelte';
	import { page } from '$app/stores';
	import HeroBanner from '$lib/components/pages/home/HeroBanner.svelte';
	let { children } = $props();
	let currentPageTitle = 'Page Title';

	export const prerender = true;
</script>

<div>
	<GlobalNav />
	<div>
		{@render children()}
	</div>
	<ContactCta />
	<Footer />
</div>
