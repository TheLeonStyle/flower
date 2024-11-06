<script>
	let activeSpoilerId = $state(1); // Инициализируем состояние для активного спойлера
	const faqs = [
		{
			id: 1,
			title: 'Сколько времени занимает изготовление букета?',
			subtitle:
				'Изготовление букета вручную занимает от 3 до 5 дней, в зависимости от сложности дизайна и количества цветов. Мы уделяем внимание каждой детали, чтобы обеспечить высокое качество'
		},
		{
			id: 2,
			title: 'Можно ли сделать букет на заказ по моим предпочтениям?',
			subtitle:
				'Да, мы можем создать букет по индивидуальному заказу! Сообщите нам свои пожелания по цветам, размерам и стилю, и мы сделаем уникальную композицию специально для вас'
		},
		{
			id: 3,
			title: 'Нужно ли как-то ухаживать за букетами?',
			subtitle:
				'Нет, букеты из ленточной ткани не требуют особого ухода. Достаточно хранить их в сухом месте, чтобы они долго сохраняли форму и цвет'
		},
		{
			id: 4,
			title: 'Есть ли доставка по другим городам?',
			subtitle:
				'Да, мы отправляем наши букеты по всей стране. Закажите букет, и мы аккуратно упакуем его для безопасной доставки'
		},
		{
			id: 5,
			title: 'Можно ли вернуть или обменять букет?',
			subtitle:
				'Мы стараемся обеспечить качество каждого букета, но если он не соответствует вашим ожиданиям, свяжитесь с нами, и мы обсудим возможные варианты обмена или возврата'
		}
	];

	// Функция для обработки переключения активного спойлера
	const handleSpoiler = (spoilerId) =>
		spoilerId === activeSpoilerId ? (activeSpoilerId = null) : (activeSpoilerId = spoilerId);
</script>

<section class="faq" id="faq" aria-labelledby="faq__text">
	<div class="faq__container">
		<h2 class="faq__text text" id="faq__text">Вопросы</h2>

		<ul class="faq__spoilers">
			{#each faqs as faq (faq.id)}
				<li
					class="faq__spoiler {activeSpoilerId === faq.id ? 'active' : ''}"
					aria-expanded={activeSpoilerId === faq.id}
					aria-controls={`faq-content-${faq.id}`}>
					<button
						class="faq__button"
						aria-controls={`faq-content-${faq.id}`}
						aria-expanded={activeSpoilerId === faq.id}
						onclick={() => handleSpoiler(faq.id)}>
						{faq.title}
					</button>

					<p class="faq__subtitle" id={`faq-content-${faq.id}`} aria-labelledby={`faq__text faq-content-${faq.id}`}>
						{faq.subtitle}
					</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style lang="scss">
	.faq {
		padding: rem(40) 0;

		/* .faq__container */
		&__container {
		}

		/* .faq__text */
		&__text {
		}

		/* .faq__spoilers */
		&__spoilers {
		}

		/* .faq__spoiler */
		&__spoiler {
			border: 1px solid #e0e0e0;
			border-radius: rem(5);
			overflow: hidden;
			margin: 0 auto;

			&:not(:last-child) {
				margin-bottom: rem(15);
			}

			&.active {
				.faq__subtitle {
					max-height: rem(300);
					opacity: 1;
					padding: rem(15) rem(20);

					@media (max-width: $mobile) {
						padding: rem(5) rem(15);
					}
				}
			}
		}

		/* .faq__button */
		&__button {
			// font-size: rem(22);
			@include adaptiveValue('font-size', 22, 18, 767, 320, 1);
			font-weight: 600;
			padding: rem(15) rem(20);
			cursor: pointer;
			background-color: $colorMain;
			color: $colorBlack;
			width: 100%;
			text-align: left;
			transition: background-color 0.3s ease 0s;

			@media (any-hover: hover) {
				&:hover {
					background-color: $colorPink;
				}
			}

			@media (max-width: $mobile) {
				padding: rem(10) rem(10);
			}
		}

		/* .faq__subtitle */
		&__subtitle {
			max-height: 0;
			opacity: 0;

			// font-size: rem(18);
			@include adaptiveValue('font-size', 18, 16, 767, 320, 1);
			color: $colorMain;
			line-height: 1.6;

			transition:
				max-height 0.3s ease 0s,
				opacity 0.3s ease 0s,
				padding 0.3s ease 0s;
		}
	}
</style>
