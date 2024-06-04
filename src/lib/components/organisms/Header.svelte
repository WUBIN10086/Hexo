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
			// color: var(--color--text);
			color: azure;
		}

		.links {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			gap: 30px;
			

			a {
				text-decoration: none;
				font-size:20pt;
				font-weight: bold;
				height: auto;
				// font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
				&:hover {
					color: var(--color--primary);
					// color: azure;
					filter: drop-shadow(0px 0px 3px var(--color--primary));
				}
			}
		}
	}
</style>
