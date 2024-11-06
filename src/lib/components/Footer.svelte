<footer class="footer">
	<div class="footer__container">
		<p class="footer__text">Наши контакты:</p>

		<div class="footer__socials">
			<a href="#" class="footer__social footer__icon-whatsapp" aria-label="Наш WhatsApp"><!-- Ватсап --></a>
			<a href="#" class="footer__social footer__icon-telegram" aria-label="Наш Telegram"><!-- Телеграм --></a>
		</div>
	</div>
</footer>

<style lang="scss">
	.footer {
		padding: rem(10) 0;
		border-top: 2px solid $colorMain;
		/* .footer__container */
		&__container {
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: rem(20);
		}
		/* .footer__text */
		&__text {
		}
		/* .footer__socials */
		&__socials {
			display: flex;
			align-items: center;
			gap: rem(20);
		}
		/* .footer__social */
		&__social {
			@include adaptiveValue('font-size', 36, 30, 767, 320, 1);
			color: $colorMain;
			transition: color 0.3s ease 0s;

			@media (any-hover: hover) {
				&:hover {
					color: $colorPink;
				}
			}
		}
		/* .footer__icon-whatsapp */
		&__icon-whatsapp {
			@include adaptiveValue('font-size', 36, 30, 767, 320, 1);
		}
		/* .footer__icon-telegram */
		&__icon-telegram {
			@include adaptiveValue('font-size', 34, 28, 767, 320, 1);
		}
	}
</style>
