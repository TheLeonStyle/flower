<script>
	import { navigation, isMenuOpen } from '$lib/stores.js';
	import { handleScrollTo } from '$lib/utils/NavScrollTo.js';

	// Добавляем события только если мы на стороне браузера
	$effect(() => {
		// Отключаем скролл при открытом меню
		if ($isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	});
</script>

<nav class="menu {$isMenuOpen ? 'active' : ''}">
	{#each $navigation as nav (nav.id)}
		<button class="menu__button" onclick={() => handleScrollTo(nav.id, isMenuOpen)}>{nav.title}</button>
	{/each}
</nav>

<style lang="scss">
	.menu {
		position: fixed;
		top: 0;
		left: -100%;
		z-index: 11;

		display: flex;
		flex-direction: column;
		gap: rem(10);
		width: 80%;
		height: 100vh;
		overflow: auto;
		padding-top: rem(40);

		background: url('/img/intro/bg.webp');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		border-right: 2px solid $colorPink;
		border-bottom: 2px solid $colorPink;
		border-top-right-radius: rem(10);
		border-bottom-right-radius: rem(10);
		box-shadow: inset 0px 0px 0px rem(300) rgba(0, 0, 0, 0.6);
		transition: left 0.3s ease 0s;

		&.active {
			left: 0;
		}
		/* .menu__button */
		&__button {
			color: inherit;

			font-size: rem(20);
			font-weight: 600;
			padding: rem(10);
			border-top: 2px solid $colorMain;
			border-bottom: 2px solid $colorMain;
		}
	}
</style>
