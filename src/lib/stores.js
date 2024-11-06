import { readable, writable } from 'svelte/store';

//
export const navigation = readable([
	{
		title: 'Каталог',
		id: 'catalog'
	},
	{
		title: 'О нас',
		id: 'about'
	},
	{
		title: 'Вопросы',
		id: 'faq'
	}
]);
export const isMenuOpen = writable(false); // Состояние бургера
