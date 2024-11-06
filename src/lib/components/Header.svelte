<script>
	import { browser } from '$app/environment';
	import { navigation, isMenuOpen } from '$lib/stores.js';
	import { handleScrollTo } from '$lib/utils/NavScrollTo.js';

	let isScroll = $state(false); // Состояние скролла

	const handleBurger = () => isMenuOpen.update((value) => !value); // Обработчик клика по бургеру

	// Добавляем события только если мы на стороне браузера
	if (browser) {
		const handleScroll = () => {
			// При скролле меняем состояние
			if (window.scrollY > 0) {
				isScroll = true;
			} else {
				isScroll = false;
			}
		};

		// По умолчанию проверяет прокрутку вниз
		handleScroll();

		// При скролле меняем состояние
		window.addEventListener('scroll', () => handleScroll());
	}
</script>

<header class="header {isScroll ? 'background' : ''}">
	<div class="header__container">
		<a href="/" class="header__logo" aria-label="AZL Flower Logo">AZL \ Flower</a>

		<nav class="header__nav" aria-label="Главное меню">
			{#each $navigation as nav (nav.id)}
				<button class="header__button" onclick={() => handleScrollTo(nav.id)} aria-label={nav.title}>
					{nav.title}
				</button>
			{/each}

			<div class="header__socials" aria-label="Социальные сети">
				<a href="#" class="header__social header__icon-whatsapp" aria-label="WhatsApp"><!-- Ватсап --></a>
				<a href="#" class="header__social header__icon-telegram" aria-label="Telegram"><!-- Телеграм --></a>
			</div>
		</nav>

		<button
			class="header__burger {$isMenuOpen ? 'active' : ''}"
			onclick={handleBurger}
			aria-label="Меню бургер"
			aria-expanded={$isMenuOpen}>
			<span></span>
		</button>
	</div>
</header>

<style lang="scss">
	.header {
		padding: rem(20) 0;

		// position: absolute;
		top: 0;
		z-index: 10;
		width: 100%;

		transition: background-color 0.3s ease 0s;

		// @media (min-width: $mobile) {
		position: fixed;

		&.background {
			background-color: rgba($color: $colorBlack, $alpha: 0.9);
			&:before {
				content: '';
				width: 100%;
				height: rem(1);
				background-color: $colorPink;

				position: absolute;
				left: 0;
				bottom: 0;
			}
		}
		// }
		/* .header__container */
		&__container {
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: rem(20);
		}
		/* .header__logo */
		&__logo {
			color: inherit;
			// font-size: rem(38);
			@include adaptiveValue('font-size', 38, 28, 991, 767, 1);
			// line-height: math.div(43, 38);

			@media (max-width: $mobileSmall) {
				font-size: rem(22);
			}
		}
		/* .header__nav */
		&__nav {
			display: flex;
			align-items: center;
			gap: rem(30);
			@include adaptiveValue('gap', 30, 20, 991, 767, 1);
			@media (max-width: $mobile) {
				flex: 1;
				justify-content: flex-end;
			}
		}
		/* .header__button */
		&__button {
			color: $colorPink;
			// font-size: rem(20);
			@include adaptiveValue('font-size', 20, 18, 991, 767, 1);
			font-weight: 700;
			// line-height: math.div(25, 20);
			letter-spacing: rem(2);

			position: relative;

			transition: color 0.3s ease 0s;

			&:before {
				content: '';
				width: 0;
				height: 2px;
				background-color: $colorPinkDark;

				position: absolute;
				bottom: rem(-2);
				left: 0;
				z-index: 1;

				transition: width 0.3s ease 0s;
			}

			@media (any-hover: hover) {
				&:hover {
					color: $colorPinkDark;
					&:before {
						width: 100%;
					}
				}
			}

			@media (max-width: $mobile) {
				display: none;
			}
		}
		/* .header__socials */
		&__socials {
			display: flex;
			align-items: center;
			gap: rem(20);
		}
		/* .header__social */
		&__social {
			// font-size: 0;

			&::after {
				color: $colorPink;
				transition: color 0.3s ease 0s;
			}

			@media (any-hover: hover) {
				&:hover {
					&:after {
						color: $colorPinkDark;
					}
				}
			}
		}
		// intro__icon-whatsapp
		&__icon-whatsapp {
			&:after {
				// content: '\f232';
				@include adaptiveValue('font-size', 32, 28, 991, 767, 1);
			}
		}
		// intro__icon-telegram
		&__icon-telegram {
			&:after {
				// content: '\f2c6';
				@include adaptiveValue('font-size', 30, 26, 991, 767, 1);
			}
		}

		/* .header__burger */
		&__burger {
			display: none;
			width: rem(40);
			@include adaptiveValue('width', 40, 34, 991, 767, 1);
			height: rem(22);
			position: relative;

			@media (max-width: $mobile) {
				display: block;
			}

			&:before,
			&::after,
			span {
				content: '';
				position: absolute;
				width: 100%;
				height: rem(2);
				background-color: $colorPink;
				transition:
					width 0.15s ease 0s,
					top 0.3s ease 0s,
					transform 0.3s ease 0s;
			}

			&::before {
				left: 0;
				top: 0;
				width: 80%;
			}

			span {
				left: 0;
				top: 50%;
				transform: translateY(-50%);
			}

			&::after {
				bottom: 0;
				width: 80%;
				right: 0;
			}

			@media (any-hover: hover) {
				&:hover {
					&::before {
						width: 100%;
					}

					&::after {
						width: 100%;
					}
				}
			}

			&.active {
				&::before {
					width: 100%;
					top: 50%;
					transform: translateY(-50%) rotate(-45deg);
				}

				span {
					width: 0;
				}

				&::after {
					width: 100%;
					top: 50%;
					transform: translateY(-50%) rotate(45deg);
				}
			}
		}
	}
</style>
