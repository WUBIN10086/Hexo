<div class="waves-container">
	<svg
		class="waves"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		viewBox="0 24 150 28"
		preserveAspectRatio="none"
		shape-rendering="auto"
	>
		<defs>
			<path
				id="gentle-wave"
				d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
			/>
		</defs>
		<g class="parallax">
			<use
				xlink:href="#gentle-wave"
				x="48"
				y="0"
				fill="rgba(var(--color--page-background-rgb),0.7)"
			/>
			<use
				xlink:href="#gentle-wave"
				x="48"
				y="3"
				fill="rgba(var(--color--page-background-rgb),0.5)"
			/>
			<use
				xlink:href="#gentle-wave"
				x="48"
				y="5"
				fill="rgba(var(--color--page-background-rgb),0.3)"
			/>
			<use xlink:href="#gentle-wave" x="48" y="7" fill="var(--color--page-background)" />
		</g>
	</svg>
</div>

<style lang="scss">
	@import '$lib/scss/_breakpoints.scss';
	.waves-container {

		&::before {
			content: '';
			position:absolute;
			align-self: auto;
			top: 22px;
			width: 1200px;
			height: 6vh;
			background: linear-gradient(
				to right,
				var(--color--title-backgroud-start),
				var(--color--title-backgroud-end)
			); /* 渐变效果 */
			backdrop-filter: blur(8px); /* 模糊效果 */
			border-radius: 15px; /* 圆角 */
			// z-index: -1; /* 确保背景在内容后面 */
			@include for-phone-only {
				width: 100%;
				top: 18px;
			}
		}
		
		// background: linear-gradient(60deg, var(--color--waves-start) 0%, var(--color--waves-end) 100%);
		// background: url('http://www.panguidc.com/images/2024/02/20/0fa2d94043b6169ff3a783c467900d36.jpeg') no-repeat center center;
		background: var(--photo-background) no-repeat center center;
		position: absolute;
		// position: relative;
		background-size: cover;
    	padding: 50px 0;
		width: 100%;
		// height: min(85vh, 800px);
		height: 65vh;
    	display: flex;
		align-items: center;
    	justify-content: center;
		@include for-phone-only {
			height: min(75vh, 400px);
		}
	}

	.waves {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 15vh;
		/*Fix for safari gap*/
		min-height: 100px;
		max-height: 800px;
	}

	/* Animation */
	.parallax > use {
		@media screen and (prefers-reduced-motion: no-preference) {
			animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
		}
	}
	.parallax > use:nth-child(1) {
		animation-delay: -2s;
		animation-duration: 7s;
	}
	.parallax > use:nth-child(2) {
		animation-delay: -3s;
		animation-duration: 10s;
	}
	.parallax > use:nth-child(3) {
		animation-delay: -4s;
		animation-duration: 13s;
	}
	.parallax > use:nth-child(4) {
		animation-delay: -5s;
		animation-duration: 20s;
	}
	@keyframes move-forever {
		0% {
			transform: translate3d(-90px, 0, 0);
		}
		100% {
			transform: translate3d(85px, 0, 0);
		}
	}
</style>
