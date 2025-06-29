<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let observerStats: IntersectionObserver | undefined;
	let intervalIds: NodeJS.Timeout[] = [];

	onMount(() => {
		const statsSection = document.querySelector('#stats');
		if (statsSection) {
			observerStats = new IntersectionObserver(
				(entries) => {
					if (!entries[0].isIntersecting) {
						const statsToReset = document.querySelectorAll<HTMLElement>('.stat-number');
						for (let stat of statsToReset) {
							const originalText = stat.getAttribute('data-original-text');
							if (originalText) stat.textContent = originalText;
						}
						intervalIds.forEach(clearInterval);
						intervalIds = [];
						return;
					}

					const stats = document.querySelectorAll<HTMLElement>('.stat-number');
					for (let stat of stats) {
						const originalText = stat.textContent;
						stat.setAttribute('data-original-text', originalText || '');

						const target = +(stat.getAttribute('data-target') || '0');
						let current = 0;

						const existingInterval = intervalIds.find(
							(id) => (stat as any).__intervalId === id,
						);
						if (existingInterval) clearInterval(existingInterval);

						const interval = setInterval(() => {
							if (current >= target) {
								clearInterval(interval);
								intervalIds = intervalIds.filter((id) => id !== interval);
								return;
							}
							current += 1;
							stat.textContent = originalText?.includes('%')
								? `${current}%`
								: `${current}`;
						}, 1200 / target);

						intervalIds.push(interval);
						(stat as any).__intervalId = interval;
					}
				},
				{ rootMargin: '0px 0px -400px 0px' },
			);
			observerStats.observe(statsSection);
		}
	});

	onDestroy(() => {
		if (observerStats) {
			observerStats.disconnect();
		}
		intervalIds.forEach(clearInterval);
	});
</script>
