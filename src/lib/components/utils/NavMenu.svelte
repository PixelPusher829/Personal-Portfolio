<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	export let openMenuElement: HTMLElement | undefined;
	export let closeMenuElement: HTMLElement | undefined;
	export let navLinksElement: HTMLElement | undefined;

	// Declare functions outside to prevent recreation on every reactivity cycle
	function resetNav() {
		if (browser && window.innerWidth > 800) {
			navLinksElement?.classList.remove('active');
			closeMenuElement?.classList.remove('active');
			openMenuElement?.classList.remove('active');
		}
	}

	function handleOpenClick() {
		navLinksElement?.classList.add('active');
		closeMenuElement?.classList.add('active');
		openMenuElement?.classList.add('active');
	}

	function handleCloseClick() {
		navLinksElement?.classList.remove('active');
		closeMenuElement?.classList.remove('active');
		openMenuElement?.classList.remove('active');
	}

	// This reactive statement will run whenever openMenuElement or closeMenuElement changes (e.g., from null to an HTMLElement)
	$: if (openMenuElement && closeMenuElement) {
		// Remove existing listeners first to prevent duplicates if this block runs multiple times
		// (e.g., if elements are re-bound, though less common with layout components)
		openMenuElement.removeEventListener('click', handleOpenClick);
		closeMenuElement.removeEventListener('click', handleCloseClick);

		openMenuElement.addEventListener('click', handleOpenClick);
		closeMenuElement.addEventListener('click', handleCloseClick);
	}

	onMount(() => {
		if (browser) {
			window.addEventListener('resize', resetNav);
		}
		// Event listeners are now handled by the reactive block ($:)
	});

	onDestroy(() => {
		if (browser) {
			window.removeEventListener('resize', resetNav);
		}
		// Ensure listeners are removed to prevent memory leaks
		openMenuElement?.removeEventListener('click', handleOpenClick);
		closeMenuElement?.removeEventListener('click', handleCloseClick);
	});
</script>
