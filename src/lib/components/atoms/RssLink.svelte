<script lang="ts">
  import RssIcon from '$lib/icons/rss.svelte';
</script>

<a href="/rss.xml" target="_blank" rel="noopener noreferrer" title="Subscribe to my RSS Feed">
  <RssIcon />
</a>

<style lang="scss">
  a {
			transition: all 0.2s ease-in-out;
			width: 24px;
			transform: scale(1.28);
			color: var(--color--text);
			fill: var(--color--text);
			// color: azure;
			// fill: azure;
			&:hover {
				color: var(--color--primary);
				fill: var(--color--primary);
				filter: drop-shadow(0px 0px 3px var(--color--primary));
			}
		}
</style>