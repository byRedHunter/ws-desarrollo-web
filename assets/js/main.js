const menuIcon = document.querySelector('.menu-icon')
const menuNav = document.querySelector('.menu-nav')
const menuNavItem = document.querySelectorAll('.menu-nav-item')
const listLink = document.querySelectorAll('.list-link')

menuIcon.addEventListener('click', () => {
	toggleMenu()
})

const toggleMenu = () => {
	menuNav.classList.toggle('active')
	const icono = menuIcon.children[0]

	if (menuNav.classList.contains('active')) {
		icono.classList.remove('fa-bars')
		icono.classList.add('fa-times')
	} else {
		icono.classList.remove('fa-times')
		icono.classList.add('fa-bars')
	}
}

menuNavItem.forEach((item, indice) => {
	item.addEventListener('click', () => {
		showSubMenu(indice, item.children[0])
	})
})

const showSubMenu = (indice, icono) => {
	listLink[indice].classList.toggle('active')
	/* aqui el codigo para el reto */
	if (icono.classList.contains('angle-bottom')) {
		icono.classList.remove('angle-bottom')
		icono.classList.add('angle-top')
	} else {
		icono.classList.remove('angle-top')
		icono.classList.add('angle-bottom')
	}
	/* aqui el codigo para el reto */
}
