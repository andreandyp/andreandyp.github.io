/**
 * Muestra/oculta el contenido de una tarjeta, también cambia el ícono de mostrar/ocultar
 * @param {HTMLElement} elem
 */
function toggleCard(elem) {
	const divContenido = elem.parentElement.nextElementSibling;
	divContenido.classList.toggle("is-hidden-mobile");

	const icono = elem.firstElementChild.firstElementChild;
	if (icono.classList.contains("fa-angle-down")) {
		icono.classList.remove("fa-angle-down");
		icono.classList.add("fa-angle-up");
	} else {
		icono.classList.remove("fa-angle-up");
		icono.classList.add("fa-angle-down");
	}
}
