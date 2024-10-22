<script>
	import SparklingHighlight from '$lib/components/molecules/SparklingHighlight.svelte';
	import Socials from '$lib/components/molecules/Socials.svelte';
	import Image from '../atoms/Image.svelte';
</script>

<!-- <section id="about">
	<div class="info">
		<h2>
			This is a catchy headline that
			<SparklingHighlight color="secondary">sparkles!</SparklingHighlight>
		</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum velit voluptatibus commodi
			autem provident quam labore, libero beatae praesentium voluptate?
		</p>
		<div class="socials">
			<span>Socials:</span>
			<Socials />
		</div>
	</div>
	<div class="image">
		<Image
			src="/images/sample-image.png"
			alt="Sample for the static template"
		/>
	</div>
</section>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	#about {
		position: relative;
		display: grid;
		grid-template-columns: 500px 250px;
		align-items: center;
		justify-content: space-between;
		padding-bottom: 50px;

		@include for-phone-only {
			grid-template-columns: 1fr;
			justify-items: center;
			gap: 20px;
		}

		.info {
			display: flex;
			flex-direction: column;
			gap: 10px;
			
			h2 {
				// padding-left: 20%;
				@include for-phone-only {
					text-align: center;
				}
			}

			p {
				// padding-left: 20%;
				@include for-phone-only {
					text-align: justify;
				}
			}

			@include for-phone-only {
				gap: 20px;
			}
		}

		.socials {
			display: flex;
			align-items: center;
			gap: 15px;
			// padding-left: 20%;
			@include for-phone-only {
				justify-content: center;
				margin-bottom: 10px;
				span {
					display: none;
				}
			}
		}

		.image {
			width: 220px;
			height: 220px;
		}
	}
</style> -->

<section id="about">
	<div class="card">
		<div class="info">
			<h2>
				Welcome to my page...
				<SparklingHighlight color="secondary">
					Blog! under modifying
				</SparklingHighlight>
			</h2>
			<p>
				Hi, This is ToTo, welcome, and..ah, I am not prepared so much now, so
				please wait a bit more time. Meanwhile, you can read some posts about my
				researches!
			</p>
			<div class="socials">
				<span>Socials:</span>
				<Socials />
			</div>
		</div>
		<div class="image-container">
			<img
				class="image"
				src="https://api.hanximeng.com/ranimg/api.php"
				alt="Sample for the static template"
			/>
		</div>
	</div>
</section>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	#about {
		display: flex;
		justify-content: center;
		padding: 50px 20px;
		// background-color: #f8f9fa;
	}

	.card {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		gap: 20px;
		width: 100%;
		// max-width: 800px;
		// background-color: #ffffff;
		border-radius: 15px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		overflow: hidden;
		border: 1px solid #e0e0e0;

		@include for-phone-only {
			grid-template-columns: 1fr;
			gap: 30px;
		}
	}

	.info {
		padding: 30px;
		display: flex;
		flex-direction: column;
		gap: 15px;

		h2 {
			// color: #333;
			font-weight: bold;

			@include for-phone-only {
				text-align: center;
			}
		}

		p {
			line-height: 1.6;
			// color: #555;
			@include for-phone-only {
				text-align: justify;
			}
		}
	}

	.socials {
		display: flex;
		align-items: center;
		gap: 10px;

		@include for-phone-only {
			justify-content: center;
		}

		span {
			// color: #777;
		}
	}

	.image-container {
		position: relative;
		width: 100%;
		height: 300px;
		overflow: hidden;
		border-radius: 15px;
	}

	// .image-container::before {
	// 	content: "";
	// 	position: absolute;
	// 	top: 0;
	// 	left: 0;
	// 	width: 100%;
	// 	height: 100%;
	// 	background-image: url("https://api.hanximeng.com/ranimg/api.php");
	// 	background-size: cover;
	// 	background-position: center;
	// 	filter: blur(10px);
	// 	transform: scale(1.2);
	// 	z-index: -1;
	// }

	.image {
		width: 98%;
		height: 99%;
		object-fit: cover;
		border-radius: 15px;
	}
</style>
