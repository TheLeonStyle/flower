<script>
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';
	register();

	const slides = [
		{
			id: 1,
			image: 'img/about/bg1.webp',
			title: 'Идеальный подарок не увянет',
			subtitle:
				'Наши букеты из лент — это не только красота, но и долговечность. Они останутся свежими и яркими, принося радость долгое время'
		},
		{
			id: 2,
			image: 'img/about/bg2.webp',
			title: 'Изысканные букеты из лент',
			subtitle:
				'Эти букеты сочетают в себе элегантность и нежность, сделаны с любовью к каждому цветку. Они долго сохраняют форму и могут украсить любой интерьер'
		},
		{
			id: 3,
			image: 'img/about/bg3.webp',
			title: 'Ручная работа',
			subtitle:
				'Каждый цветок создан вручную, с вниманием к деталям и стремлением передать природную красоту в тканевом воплощении'
		},
		{
			id: 4,
			image: 'img/about/bg4.webp',
			title: 'Украсьте свой праздник красотой',
			subtitle:
				'Идеальны для свадеб, юбилеев и других особенных событий, наши ленточные цветы будут радовать глаз, не увядая со временем'
		},
		{
			id: 5,
			image: 'img/about/bg5.webp',
			title: 'Создайте уют с цветами',
			subtitle:
				'Эти цветы не нужно поливать, но они добавят теплоту и стиль в ваш дом или офис, создавая ощущение гармонии и комфорта'
		}
	];

	let slidePrev, slideNext;

	onMount(() => {
		const slider = document.querySelector('.about__slider');
		if (slider) {
			slidePrev = () => slider.swiper.slidePrev();
			slideNext = () => slider.swiper.slideNext();
		}
	});
</script>

<!-- 
autoplay={{
			delay: 2500,
			disableOnInteraction: false
		}}
-->

<section class="about" id="about" aria-label="Доставка цветов">
	<swiper-container class="about__slider" loop lazy="true" pagination="true">
		{#each slides as slide (slide.id)}
			<swiper-slide class="about__slide">
				<img src={slide.image} alt={slide.title} class="about__image" loading="lazy" />
				<div class="about__container">
					<h3 class="about__title">{slide.title}</h3>
					<p class="about__subtitle">{slide.subtitle}</p>
				</div>
			</swiper-slide>
		{/each}
	</swiper-container>

	<!-- <div class="about__pagination swiper-pagination" aria-label="Навигация по слайдам"></div> -->

	<button class="about__button about__icon-prev" aria-label="Предыдущий слайд" onclick={() => slidePrev()}></button>
	<button class="about__button about__icon-next" aria-label="Следующий слайд" onclick={() => slideNext()}></button>
</section>

<style lang="scss">
	.about {
		position: relative;

		/* .about__slider */
		&__slider {
			height: rem(500);
			@include adaptiveValue('height', 500, 350, 991, 320, 1);
		}
		/* .about__slide */
		&__slide {
			// background-image: url('/img/about/bg1.jpeg');
			// background-repeat: no-repeat;
			// background-size: cover;
			// background-position: center;
			// background-attachment: fixed;
			// box-shadow: inset 0px 0px 0px rem(300) rgba(0, 0, 0, 0.6);

			display: flex;
			justify-content: center;
			align-items: center;
		}
		/* .about__image */
		&__image {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: 1;
			opacity: 0.4;

			width: 100%;
			height: auto;

			@media (max-width: $mobile) {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
		/* .about__wrapper */
		// &__wrapper {
		// 	box-shadow: inset 0px 0px 0px rem(300) rgba(0, 0, 0, 0.6);
		// 	position: relative;
		// 	z-index: 2;
		// }
		/* .about__container */
		&__container {
			position: relative;
			z-index: 2;

			padding-left: rem(60);
			padding-right: rem(60);
			@include adaptiveValue('padding-top', 60, 30, 991, 320, 1);
			@include adaptiveValue('padding-bottom', 60, 30, 991, 320, 1);

			max-width: rem(900);
			margin: 0 auto;

			@media (max-width: $mobile) {
				padding-left: rem(15);
				padding-right: rem(15);
			}
		}
		/* .delivary__title */
		&__title {
			color: $colorPinkDark;
			// font-size: rem(48);
			@include adaptiveValue('font-size', 48, 24, 991, 320, 1);
			font-weight: 600;
			margin-bottom: rem(20);
			text-align: center;
		}
		/* .about__subtitle */
		&__subtitle {
			// font-size: rem(32);
			@include adaptiveValue('font-size', 32, 18, 991, 320, 1);
			line-height: math.div(50, 32);
			text-align: center;

			@media (max-width: $mobile) {
				line-height: 1.2;
			}
		}
		/* .about__button */
		&__button {
			color: $colorMain;
			font-size: rem(40);

			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			z-index: 1;

			@media (max-width: $mobile) {
				display: none;
			}
		}
		/* .about__icon-prev */
		&__icon-prev {
			left: rem(20);
			&:before {
				content: '\e805';
			}
		}
		/* .about__icon-next */
		&__icon-next {
			right: rem(20);
			&:before {
				content: '\e806';
			}
		}
	}
</style>
