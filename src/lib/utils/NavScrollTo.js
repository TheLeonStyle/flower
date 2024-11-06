// Прокрутка навигации до блоков
export const handleScrollTo = (id, isMenuOpen) => {
	const offset = window.innerWidth < 768 ? 68 : 78;
	const element = document.getElementById(id);
	window.scrollTo({
		top: element.offsetTop - offset,
		behavior: 'smooth'
	});
	if (isMenuOpen) {
		isMenuOpen.set(false);
	}
};
