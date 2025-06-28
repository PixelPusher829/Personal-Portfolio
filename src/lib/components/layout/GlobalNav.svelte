<script lang="ts">
	import NavMenu from '$lib/components/utils/NavMenu.svelte';

	// Initialize variables to null, as they won't be defined until the HTML elements mount
	let openMenuElement: HTMLElement | null = null;
	let closeMenuElement: HTMLElement | null = null;
	let navLinksElement: HTMLElement | null = null;
</script>

<nav>
	<NavMenu {openMenuElement} {closeMenuElement} {navLinksElement} />

	<a href="/">
		<img src="/images/global/jb_logo_dark.png" alt="James Barnes Logo" class="logo" />
	</a>

	<i class="fi fi-br-menu-burger open-menu" bind:this={openMenuElement}></i>
	<i class="fi fi-br-cross close-menu" bind:this={closeMenuElement}></i>
	<ul class="nav-links" bind:this={navLinksElement}>
		<li><a href="/" class="active">Home</a></li>
		<li><a href="/about">About</a></li>
		<li><a href="/portfolio">Portfolio</a></li>
		<li><a href="/contact" class="primary-btn">Contact</a></li>
	</ul>
</nav>
