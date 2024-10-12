const headerUnion = document.querySelector('.header-union')
const headerNavLinks = document.querySelectorAll('.header-nav .header-nav-link')

function updateHeaderUnionPosition() {
	headerNavLinks.forEach((link) => {
		if (link.classList.contains('is-active')) {
			const linkRect = link.getBoundingClientRect();
			const leftOffset = linkRect.left + window.scrollX;
			headerUnion.style.transform = `translateX(${leftOffset - 16}px)`;
		}
	});
}

document.addEventListener('DOMContentLoaded', updateHeaderUnionPosition);
window.addEventListener('resize', updateHeaderUnionPosition);