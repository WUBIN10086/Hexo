<script lang="ts">
	export let message: string;
	export let isUser: boolean = false;
</script>

<!-- 根据 isUser 的值切换类 -->
<div class={isUser ? 'from-user' : 'from-bot'}>
	<p>{message}</p>
</div>

<style>
	div {
		max-width: 70%;
		padding: 10px;
		margin: 5px 0;
		border-radius: 10px;
		line-height: 1.4;
	}

	.from-user {
		align-self: flex-end;
		background-color: #4caf50;
		color: white;
	}

	.from-bot {
		align-self: flex-start;
		background-color: #e0e0e0;
		color: black;
	}
</style>
