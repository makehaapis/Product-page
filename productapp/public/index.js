/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
	navToggle = document.getElementById("nav-toggle"),
	navClose = document.getElementById("nav-close");
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
	const navMenu = document.getElementById("nav-menu");
	// When we click on each nav__link, we remove the show-menu class
	navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
	const header = document.getElementById("header");
	// When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
	if (this.scrollY >= 50) header.classList.add("scroll-header");
	else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
	const scrollUp = document.getElementById("scroll-up");
	// When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
	if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
	else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);