<script>
	let gridView = $state('4x4'); // Начальный вид сетки
	let hoveredButtonId = $state(null); // ID кнопки, на которую наведены
	let sortBy = $state('newest'); // Начальная сортировка по новизне
	// Массив элементов каталога
	const items = $state([
		{
			id: 1,
			image: 'img/catalog/1.webp',
			title: 'Роскошный розовый букет',
			subtitle: 'Элегантность в тканевых лепестках',
			price: 12500,
			discount: '-20%'
		},
		{
			id: 2,
			image: 'img/catalog/1.webp',
			title: 'Цветочный ансамбль "Сиреневый закат"',
			subtitle: 'Букеты из нежнейшей ткани',
			price: 10500,
			discount: ''
		},
		{
			id: 3,
			image: 'img/catalog/1.webp',
			title: 'Букет в стиле шебби-шик',
			subtitle: 'Романтика и утонченность',
			price: 890,
			discount: '-35%'
		},
		{
			id: 4,
			image: 'img/catalog/1.webp',
			title: 'Мини-букет для интерьера',
			subtitle: 'Идеальный подарок для дома',
			price: 7800,
			discount: ''
		},
		{
			id: 5,
			image: 'img/catalog/1.webp',
			title: 'Летний цветочный венок',
			subtitle: 'Цветы, которые не увядают',
			price: 1590,
			discount: '-15%'
		},
		{
			id: 6,
			image: 'img/catalog/1.webp',
			title: 'Изящные тканевые тюльпаны',
			subtitle: 'Для вашего уютного пространства',
			price: 1200,
			discount: ''
		},
		{
			id: 7,
			image: 'img/catalog/1.webp',
			title: 'Свадебный букет в стиле Прованс',
			subtitle: 'Вдохновение французским шиком',
			price: 2200,
			discount: '-30%'
		},
		{
			id: 8,
			image: 'img/catalog/1.webp',
			title: 'Букет веселья',
			subtitle: 'Яркие ткани для ярких людей',
			price: 600,
			discount: '-45%'
		}
	]);

	// Функция для сортировки элементов
	const handleGridView = (grid) => (gridView = grid);

	// Функция для сортировки элементов
	$effect(() => {
		switch (sortBy) {
			case 'newest':
				items.sort((a, b) => b.id - a.id); // Сортировка по новизне
				break;
			case 'price-asc':
				items.sort((a, b) => a.price - b.price); // Сортировка по возрастанию цены
				break;
			case 'price-desc':
				items.sort((a, b) => b.price - a.price); // Сортировка по убыванию цены
				break;
		}
	});

	// Функции для обработки наведения кнопки
	const handleButtonOver = (id) => (hoveredButtonId = id);
	const handleButtonLeave = () => (hoveredButtonId = null);
</script>

<section class="catalog" id="catalog" aria-label="Каталог">
	<div class="catalog__container">
		<h2 class="catalog__text text">Каталог</h2>

		<div class="catalog__tools">
			<nav class="catalog__views" aria-label="Выбор вида отображения каталога">
				<button
					class="catalog__view catalog__icon-grid2x2 {gridView === '2x2' ? 'active' : ''}"
					aria-label="Сетка 2 на 2"
					aria-pressed={gridView === '2x2'}
					onclick={() => handleGridView('2x2')}>
				</button>
				<button
					class="catalog__view catalog__icon-grid3x3 {gridView === '3x3' ? 'active' : ''}"
					aria-label="Сетка 3 на 3"
					aria-pressed={gridView === '3x3'}
					onclick={() => handleGridView('3x3')}>
				</button>
				<button
					class="catalog__view catalog__icon-grid4x4 {gridView === '4x4' ? 'active' : ''}"
					aria-label="Сетка 4 на 4"
					aria-pressed={gridView === '4x4'}
					onclick={() => handleGridView('4x4')}>
				</button>
			</nav>

			<select name="sort" class="catalog__select" bind:value={sortBy}>
				<option value="newest" class="catalog__option">По новизне</option>
				<option value="price-asc" class="catalog__option">Цены: по возрастанию</option>
				<option value="price-desc" class="catalog__option">Цены: по убыванию</option>
			</select>
		</div>

		<!-- prettier-ignore -->
		<ul
			class="catalog__items {gridView === '2x2' ? 'catalog__items-2x2' : gridView === '3x3' ? 'catalog__items-3x3' : ''}">
			{#each items as item (item.id)}
				<li class="catalog__item" aria-labelledby="catalog__title-{item.id}">
					<article class="catalog__product">
						<div class="catalog__image">
							<img src={item.image} alt={item.title} loading="lazy" />
							{#if item.discount}
								<div class="catalog__discount" aria-label="Скидка {item.discount}">{item.discount}</div>
							{/if}
						</div>

						<h3 class="catalog__title" id="catalog__title-{item.id}">{item.title}</h3>
						<p class="catalog__subtitle">{item.subtitle}</p>
						<p class="catalog__price">{item.price.toLocaleString('ru-RU')} ₽</p>
						<button
							class="catalog__button catalog__icon-cart {hoveredButtonId === item.id
								? 'hover'
								: ''}"
							onmouseover={() => handleButtonOver(item.id)}
							onmouseleave={() => handleButtonLeave()}
							onfocus={() => handleButtonOver(item.id)}  
   						 onblur={() => handleButtonLeave()} 
							aria-label={`Купить ${item.title}`}
							aria-describedby="catalog__title-{item.id}" >
							<span>Купить</span>
						</button>
					</article>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style lang="scss">
	.catalog {
		padding: rem(40) 0;
		/* .catalog__container */
		&__container {
		}
		/* .catalog__text */
		&__text {
		}
		/* .catalog__tools */
		&__tools {
			display: flex;
			justify-content: space-between;
			gap: rem(20);
			margin-bottom: rem(20);
		}
		/* .catalog__views */
		&__views {
			display: flex;
			align-items: center;
			gap: rem(20);

			@media (max-width: $tablet) {
				display: none;
			}
		}
		/* .catalog__view */
		&__view {
			&:after {
				color: $colorMain;
				transition: color 0.3s ease 0s;
			}
			&.active {
				&:after {
					cursor: default;
					color: rgba($color: $colorMain, $alpha: 0.4);
				}
			}
		}
		/* .catalog__icon-grid2x2 */
		&__icon-grid2x2 {
			&:after {
				content: '\e802';
				font-size: rem(28);
			}
		}
		/* .catalog__icon-grid3x3 */
		&__icon-grid3x3 {
			&:after {
				content: '\e803';
				font-size: rem(32);
			}
		}
		/* .catalog__icon-grid4x4 */
		&__icon-grid4x4 {
			&:after {
				content: '\e804';
				font-size: rem(38);
			}
		}
		/* .catalog__select */
		&__select {
			display: flex;
			width: rem(210);
			font-size: inherit;
			color: $colorBlack;
			background-color: #f7f7f7;
			border: 1px solid #ccc;
			border-radius: rem(5);
			appearance: none;
			cursor: pointer;

			position: relative;
			background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 20 20"%3E%3Cpath fill="%23333" d="M5 7l5 5 5-5H5z"/%3E%3C/svg%3E');
			background-repeat: no-repeat;
			background-position: right rem(12) center;

			padding: rem(8) rem(12);

			transition: background-color 0.3s ease 0s;

			@media (any-hover: hover) {
				&:hover {
					background-color: rgba($color: $colorMain, $alpha: 0.8);
				}
			}
		}
		/* .catalog__option */
		&__option {
			font-size: inherit;
			color: $colorBlack;
		}
		/* .catalog__items */
		&__items {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			gap: rem(20);

			&-2x2 {
				grid-template-columns: repeat(2, 1fr);
			}

			&-3x3 {
				grid-template-columns: repeat(3, 1fr);
			}

			// @media (max-width: em(1024)) {
			// 	grid-template-columns: repeat(3, 1fr);
			// }

			@media (max-width: $tablet) {
				grid-template-columns: repeat(2, 1fr);
			}

			@media (max-width: $mobile) {
				grid-template-columns: repeat(1, 1fr);
			}
		}
		/* .catalog__item */
		&__item {
			display: flex;
		}
		/* .catalog__product */
		&__product {
			display: flex;
			flex-direction: column;
			gap: rem(10);
		}
		/* .catalog__image */
		&__image {
			position: relative;

			img {
				width: 100%;
				height: auto;
				min-height: rem(200);
				object-fit: cover;
				border-radius: rem(20);

				@media (max-width: $mobile) {
					min-height: rem(300);
				}
			}
		}
		/* .catalog__discount */
		&__discount {
			font-size: rem(20);
			background-color: $colorPinkDark;
			border-radius: 50%;

			width: rem(60);
			height: rem(60);
			display: flex;
			justify-content: center;
			align-items: center;

			position: absolute;
			top: rem(10);
			left: rem(10);
			z-index: 1;
		}
		/* .catalog__title */
		&__title {
			color: $colorMain;
			font-size: rem(20);
			line-height: math.div(22, 20);
			font-weight: 600;
		}
		/* .catalog__subtitle */
		&__subtitle {
			flex: 1;
			color: $colorPink;
		}
		/* .catalog__price */
		&__price {
			color: $colorPinkLight;
			font-size: rem(18);
			font-weight: 600;
		}
		/* .catalog__button */
		&__button {
			border-radius: rem(20);
			background-color: $colorPinkLight;
			height: rem(37);
			padding: rem(5);
			overflow: hidden;

			position: relative;

			transition: background-color 0.3s ease 0s;

			span {
				color: $colorMain;
				font-size: rem(20);

				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);

				transition: top 0.3s ease 0s;
			}

			&:after {
				content: '\e801';
				color: #ffffff;
				font-size: rem(24);

				position: absolute;
				top: 100%;
				left: 50%;
				transform: translate(-50%, 0);

				transition: top 0.3s ease 0s;
			}

			@media (any-hover: hover) {
				&:hover {
					background-color: rgba($color: $colorPinkLight, $alpha: 0.7);
				}
			}

			&.hover {
				span {
					position: absolute;
					top: -100%;
				}
				&:after {
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
				}
			}
		}
	}
</style>
