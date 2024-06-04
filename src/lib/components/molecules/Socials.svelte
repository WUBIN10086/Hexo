<script>
	import TelegramIcon from '$lib/icons/socials/telegram.svelte';
	import GitHubIcon from '$lib/icons/socials/github.svelte';
	import LinkedInIcon from '$lib/icons/socials/linkedin.svelte';
	import EmailIcon from '$lib/icons/socials/email.svelte';
	import RssIcon from '$lib/icons/rss.svelte';
	import MastodonIcon from '$lib/icons/socials/mastodon.svelte';
	import { writable } from 'svelte/store';

	let showEmail = writable(false);
	let email = 'wubin_workmail@163.com';

	function copyEmail() {
		navigator.clipboard.writeText(email);
	}
</script>

<div class="socials">

	<a
		href="https://t.me/yourusername"
		target="_blank"
		rel="noopener noreferrer"
		title="Say Hi on Telegram"
	>
		<TelegramIcon />
	</a>
	<a
		href="https://mastodon.social/@yourusername"
		target="_blank"
		rel="me noreferrer"
		title="Say Hi on Mastodon"
	>
		<MastodonIcon />
	</a>
	<a
		href="https://github.com/wubin10086"
		target="_blank"
		rel="noopener noreferrer"
		title="See my GitHub profile"
	>
		<GitHubIcon />
	</a>
	<a
		href="https://www.linkedin.com/in/yourusername/"
		target="_blank"
		rel="noopener noreferrer"
		title="Connect on LinkedIn"
	>
		<LinkedInIcon />
	</a>
	<div class="email-container" on:mouseenter={() => showEmail.set(true)} on:mouseleave={() => showEmail.set(false)}>
		<a on:click={copyEmail} title="Send an email">
			<EmailIcon/>
		</a>
		{#if $showEmail}
			<div class="email-popup">
				<p>{email}</p>
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	@import '../../scss/breakpoints.scss';
	.socials {
		display: flex;
		align-items: center;
		gap: 20px;

		a, button {
			transition: all 0.2s ease-in-out;
			width: 24px;
			color: var(--color--text);
			fill: var(--color--text);
			background: none;
			border: none;
			cursor: pointer;

			&:hover {
				color: var(--color--primary);
				fill: var(--color--primary);
				filter: drop-shadow(0px 0px 3px var(--color--primary));
			}
		}
	}

	.email-container {
		display: flex;
		align-items: center;
		// gap: 20px;
		a, button {
			transition: all 0.2s ease-in-out;
			width: 24px;
			color: var(--color--text);
			fill: var(--color--text);
			background: none;
			border: none;
			cursor: pointer;

			&:hover {
				color: var(--color--primary);
				fill: var(--color--primary);
				filter: drop-shadow(0px 0px 3px var(--color--primary));
			}
		}
	}

	.email-popup {
		position: relative;
		bottom: 100%;
		left: 20%;
		transform: translateX(-20%);
		background-color: #333;
		color: #fff;
		padding: 5px;
		padding-top: 0;
		padding-bottom: 0;
		border-radius: 5px;
		white-space: nowrap;
		z-index: auto;
		opacity: 0;
		visibility: hidden;
		transition: opacity 0.2s, visibility 0.2s;
	}

	.email-container:hover .email-popup {
		opacity: 1;
		visibility: visible;
	}
</style>