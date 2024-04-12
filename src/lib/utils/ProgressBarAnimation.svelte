<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let observerProgress: IntersectionObserver | undefined;
	let intervals: NodeJS.Timeout[] = [];

	onMount(() => {
		const skillsetGrid = document.querySelector('.skillset-grid');
		if (skillsetGrid) {
			observerProgress = new IntersectionObserver(
				(entries) => {
					if (!entries[0].isIntersecting) return;

					const barsToReset = document.querySelectorAll<HTMLElement>('.progress-fill');
					for (let bar of barsToReset) {
						bar.style.width = '0%';
					}

					const bars = document.querySelectorAll<HTMLElement>('.progress-fill');
					for (let bar of bars) {
						const target = bar.getAttribute('data-target');
						if (target) {
							bar.style.width = `${target}%`;
						}
					}
				},
				{ rootMargin: '0px 0px -400px 0px' },
			);
			observerProgress.observe(skillsetGrid);
		}
	});

	onDestroy(() => {
		if (observerProgress) {
			observerProgress.disconnect();
		}
		intervals.forEach(clearInterval);
	});
</script>
