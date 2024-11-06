<script>
	const handleScrollDown = () => {
		const offset = window.innerWidth < 768 ? 0 : 78;
		window.scrollTo({
			top: document.getElementById('catalog').offsetTop - offset,
			behavior: 'smooth'
		});
	};
</script>

<section class="intro">
	<div class="intro__container">
		<div class="intro__content">
			<p class="intro__suptitle">Красота природы в каждом</p>
			<h1 class="intro__title">Букете</h1>
		</div>

		<button class="intro__button intro__icon-arrow" aria-label="Прокрутить вниз к каталогу" onclick={handleScrollDown}>
		</button>
	</div>
</section>

<style lang="scss">
	.intro {
		background-image: url('/img/intro/bg.webp');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		background-attachment: fixed;

		/* .intro__container */
		&__container {
			display: flex;
			justify-content: center;
			align-items: center;

			min-height: 100vh;

			position: relative;
			// padding-top: rem(83);
		}
		/* .intro__content */
		&__content {
			text-align: center;

			opacity: 0;
			transform: translateY(20px);
			animation: fadeInUp 1.2s ease forwards;

			// @media (max-height: 320px) {
			// 	padding-top: rem(83);
			// }
		}
		/* .intro__suptitle */
		&__suptitle {
			// font-size: rem(36);
			@include adaptiveValue('font-size', 36, 20, 767, 320, 1);
			// line-height: math.div(80, 70);
			// letter-spacing: 15%;
			margin-bottom: rem(10);

			animation-delay: 0.2s;
			opacity: 0;
			animation: fadeInUp 1s ease forwards;
		}
		/* .intro__title */
		&__title {
			font-size: rem(100);
			@include adaptiveValue('font-size', 100, 46, 767, 320, 1);
			font-weight: 700;
			// line-height: math.div(280, 100);
			// letter-spacing: 30%;

			animation-delay: 0.4s;
			opacity: 0;
			animation: fadeInUp 1.2s ease forwards;
		}

		/* .intro__button */
		&__button {
			color: $colorPink;
			font-size: rem(20);
			@include adaptiveValue('font-size', 20, 16, 767, 320, 1);

			display: flex;
			flex-direction: column;

			position: absolute;
			bottom: rem(20);
			left: 50%;
			transform: translateX(-50%);
			z-index: 1;

			&:after,
			&:before {
				content: '\e800';
				transition: transform 0.3s ease;
			}

			&:after {
				animation: arrow-bounce 1s infinite ease-in-out alternate 0.5s;
			}

			&:before {
				animation: arrow-bounce 1s infinite ease-in-out alternate;
			}

			@keyframes arrow-bounce {
				0% {
					transform: translateY(0);
				}
				100% {
					transform: translateY(rem(7));
				}
			}
		}

		// Ключевые кадры для появления и движения вверх
		@keyframes fadeInUp {
			0% {
				opacity: 0;
				transform: translateY(20px);
			}
			100% {
				opacity: 1;
				transform: translateY(0);
			}
		}
	}
</style>
