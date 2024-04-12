<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import { base } from '$app/paths';

	let menuIsOpen: boolean = false;

	function toggleMenu() {
		menuIsOpen = !menuIsOpen;
	}

	function handleResize() {
		if (browser && window.innerWidth > 800) {
			menuIsOpen = false;
		}
	}

	onMount(() => {
		if (browser) {
			window.addEventListener('resize', handleResize);
		}
	});

	onDestroy(() => {
		if (browser) {
			window.removeEventListener('resize', handleResize);
		}
	});
</script>

<nav>
	<a href="./">
		<img src="{base}/images/global/jb_logo_dark.png" alt="James Barnes Logo" class="logo" />
	</a>

	<i class="fi fi-br-menu-burger open-menu" on:click={toggleMenu} class:active={menuIsOpen}></i>

	<i class="fi fi-br-cross close-menu" on:click={toggleMenu} class:active={menuIsOpen}></i>

	<ul class="nav-links" class:active={menuIsOpen}>
		<li><a href="{base}/" class="active">Home</a></li>
		<li><a href="{base}/about">About</a></li>
		<li><a href="{base}/portfolio">Portfolio</a></li>
		<li><a href="{base}/contact" class="primary-btn">Contact</a></li>
	</ul>
</nav>

<style lang="scss">
	@use 'variables' as *;

	nav {
		justify-items: center;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 10px 20px;
		font-family: $text-body;
		font-weight: 500;
		font-size: 1.1rem;
		position: sticky;
		top: 0;
		z-index: 3;
		width: 100%;
		background-color: rgb(255, 255, 255);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.116);
	}

	nav img {
		width: 300px;
		height: auto;
	}

	nav ul {
		display: flex;
		align-items: center;
		gap: 1.6rem;
		flex-shrink: 0;
		list-style-type: none;
	}

	nav li {
		display: inline-block;
	}

	nav a {
		color: hsl(0, 0%, 45%);
		text-decoration: none;
		transition: 0.3s ease-in-out;
	}

	nav a:hover {
		color: $secondary;
	}

	a.active {
		color: #2a2a2a;
	}

	nav i {
		font-size: 1.3rem;
		display: none;
		position: relative;
		top: 0.25rem;
		cursor: pointer;
	}

	.primary-btn,
	.primary-btn:hover {
		color: white;
	}

	@media screen and (max-width: 800px) {
		nav {
			flex-wrap: nowrap;
			min-height: 4.5rem;
			align-items: center;
			gap: 1rem;
		}

		nav img {
			min-width: 12rem;
		}

		nav ul {
			flex-direction: column;
			background: rgb(248, 248, 248);
			z-index: 4;
			position: absolute;
			right: 0;
			top: 4.5rem;
			border-bottom-left-radius: 4px;
			border-bottom-right-radius: 4px;
			max-height: 0;
			padding: 0rem 2rem;
			transition-property: padding, max-height;
			transition-duration: 0.3s;
			transition-timing-function: ease;
			overflow: hidden;
			box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.116);
		}

		.open-menu {
			display: block;
		}

		.close-menu {
			display: none;
		}

		@media screen and (max-width: 370px) {
			nav ul {
				width: 100%;
			}
		}

		nav ul.active {
			max-height: 500px;
			padding: 2rem 2rem;
		}

		.open-menu.active {
			display: none;
		}

		.close-menu.active {
			display: block;
		}
		nav img {
			max-width: 15rem;
		}
	}

	@media screen and (min-width: 801px) {
		nav i {
			display: none;
		}

		nav ul {
			max-height: none;
			padding: 0;
			position: static;
			background: none;
			box-shadow: none;
			flex-direction: row;
		}
	}
</style>
