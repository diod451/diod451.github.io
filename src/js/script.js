window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.header__menu'),
		menuItem = document.querySelectorAll('.header__nav'),
		hamburger = document.querySelector('.header__hamburger');

	hamburger.addEventListener('click', () => {
		console.log('Кнопка нажата!');
		hamburger.classList.toggle('header__hamburger__active');
		menu.classList.toggle('header__menu__active');
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			console.log('Кнопка отжата!');
			hamburger.classList.toggle('header__hamburger__active');
			menu.classList.toggle('header__menu__active');
		})
	})
})
