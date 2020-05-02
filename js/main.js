(function () {
	const header = document.querySelector('.header');
	window.onscroll = () => {
		if (window.pageYOffset > 50) {	
			header.classList.add('header_active');
		} else {
			header.classList.remove('header_active');
		}
	};
}());

(function () {
	const	headerNavItem = document.querySelector('.header__nav');
	const	menu = document.querySelector('.header__nav-wrap');
	const menuCloseItem = document.querySelector ('.header__nav-close');
	headerNavItem.addEventListener('click', () => {
		menu.classList.add('header__nav-wrap_active');

	});
	menuCloseItem.addEventListener('click', () => {
		menu.classList.remove('header__nav-wrap_active');
	})


}());