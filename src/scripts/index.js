// бургер меню
const burger = document.getElementById('burger')
const menu = document.getElementById('menu')

burger.addEventListener('click', () => {
	menu.classList.toggle('active')
	burger.classList.toggle('active')
})

const links = menu.querySelectorAll('a');
links.forEach((element) => {
  element.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
  });
});

//фиксация шапки при скроле
window.addEventListener('scroll', function () {
	const nav = document.querySelector('.header')
	const breakpoint = 50

	if (window.scrollY >= breakpoint) {
		nav.classList.add('header-fixed')
	} else {
		nav.classList.remove('header-fixed')
	}
})

//аккордеон
const accord = document.querySelectorAll('.accord__top')

accord.forEach(function (item) {
	item.addEventListener('click', function () {
		item.classList.toggle('active')

		var panel = item.nextElementSibling
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null
		} else {
			panel.style.maxHeight = panel.scrollHeight + 'px'
		}
	})
})
