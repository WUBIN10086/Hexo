<script lang="ts">
	import Logo from '$lib/components/atoms/Logo.svelte';
	import ThemeToggle from '$lib/components/molecules/ThemeToggle.svelte';
	import RssLink from '$lib/components/atoms/RssLink.svelte';

	export let showBackground = false;
</script>

<header class:has-background={showBackground}>
	<nav class="container">
		<a class="logo" href="/" aria-label="Site logo">
			<Logo />
		</a>
		<div class="links">
			<a href="/blog">Blog</a>
			<a href="/blog">WLAN Simulator</a>
			<a href="/blog">About Me</a>
			<RssLink />
			<ThemeToggle />
		</div>
	</nav>
</header>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	header {
		position: relative;
		padding: 30px 0;

		@include for-phone-only {
			padding: 20px 0;
		}

		&.has-background {
			background: linear-gradient(
				60deg,
				var(--color--waves-start) 0%,
				var(--color--waves-end) 100%
			);
		}

		.container {
			display: flex;
			align-items: center;
			gap: 30px;

			@include for-phone-only {
				.links {
					a {
						display: none;
					}
				}
			}
		}

		.logo {
			height: 44px;
			flex: 1;
		}

		a {
			color: var(--color--text);
		}

		.links {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			gap: 30px;

			a {
				position: relative;
				text-decoration: none;
				font-size: 20pt;
				font-weight: bold;
				&::after {
					content: '';
					position: absolute;
					width: 100%;
					transform: scaleX(0);
					height: 2px;
					bottom: 0;
					left: 0;
					background-color: var(--color--text);
					transform-origin: bottom right;
					transition: transform 0.3s ease-out;
				}
				&:hover::after {
					transform: scaleX(1);
					transform-origin: bottom left;
				}
			}
		}
	}
</style>
